<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gallery;
use \Validator;

class GalleryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['getPublic']]);
    }

    public function getPublic()
    {
        return response()->json(Gallery::where('private', 1)->get());
    }

    public function getAll()
    {
        return response()->json(Gallery::all());
    }

    public function store(Request $request)
    {
        $validator = $this->getValidator($request->all());
        if ($validator->fails()) return response()->json([$validator->errors()], 406);

        $group = new Gallery();
        $group->name = $request->input('name');
        $group->private = $request->input('private');
        $group->save();

        return $group;
    }

    public function getValidator(array $data)
    {
        $validator = Validator::make($data, [
            'name' => ['required', 'string'],
            'private' => ['required', 'boolean'],
        ]);

        return $validator;
    }
}
