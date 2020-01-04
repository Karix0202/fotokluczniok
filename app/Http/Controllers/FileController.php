<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Validator;
use App\Gallery;
use App\File;

class FileController extends Controller
{
    public function store(Gallery $gallery, Request $request)
    {
        $validator = $this->getValidator($request->all());
        if ($validator->fails()) return response()->json([$validator->errors()], 406);

        $file = new File();
        $file->name = $request->input('name');
        $file->link = $request->input('link');
        $file->gallery_id = $gallery->id;
        $file->save();

        return response()->json($file);
    }

    public function deleteSeries(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'files' => ['required', 'array', 'min:1'],
        ]);
        if ($validator->fails()) return response()->json([$validator->errors()], 406);

        foreach($request->input('files') as $id) {
            $file = File::find($id);
            if ($file != null) $file->delete();
        }

        return response()->json($request->input('files'));
    }

    public function getValidator(array $data)
    {
        $validator = Validator::make($data, [
            'link' => ['required', 'string'],
            'name' => ['required', 'string'],
        ]);

        return $validator;
    }
}
