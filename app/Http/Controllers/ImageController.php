<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use App\Gallery;
use \Validator;
use Illuminate\Support\Str;

class ImageController extends Controller
{
    public function store(Gallery $gallery, Request $request)
    {
        $validator = $this->getValidator($request->all());
        if ($validator->fails()) return response()->json([$validator->errors(), "data" => $request->all()], 406);

        $file = $request->file('file');

        $newName = Str::random(32) . '.' . $file->getClientOriginalExtension();
        $path = 'galleries/' . $gallery->id;

        $image = new Image();
        $image->original_name = $file->getClientOriginalName();
        $image->name = $newName;
        $image->path = $path . '/' . $newName;
        $image->full_path = asset($path . '/' . $newName);
        $image->gallery_id = $gallery->id;

        $file->move($path, $newName);
        $image->save();

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
}
