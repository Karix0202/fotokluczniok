<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use App\Gallery;
use \Validator;

class ImageController extends Controller
{
    public function store(Gallery $gallery, Request $request)
    {
        $validator = $this->getValidator($request->all());
        if ($validator->fails()) return response()->json([$validator->errors()], 406);

        $file = $request->file('file');

        $newName = $this::generateRandomString($length=32) . '.' . $file->getClientOriginalExtension();
        $path = 'galleries/' . $gallery->id;

        $image = new Image();
        $image->original_name = $file->getClientOriginalName();
        $image->name = $newName;
        $image->path = $path . '/' . $newName;
        $image->full_path = asset($path . '/' . $newName);
        $image->gallery_id = $gallery->id;

        if (! ($image->save() && $file->move($path, $newName))) return response()->json(["error" => "Something went wrong. Try again later.", "data" => $request->all()], 500);;

        return response()->json($image);
    }

    public function deleteSeries(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'images' => ['required', 'array', 'min:1'],
        ]);
        if ($validator->fails()) return response()->json([$validator->errors()], 406);

        foreach($request->input('images') as $id) {
            $image = Image::find($id);
            if ($image != null) $image->delete();
        }

        return response()->json($request->input('images'));
    }

    public function getValidator(array $data)
    {
        $validator = Validator::make($data, [
            'file' => ['required', 'mimes:jpg,jpeg,png']
        ]);

        return $validator;
    }

    private static function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
