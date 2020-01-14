<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Validator;
use App\Photography;
use Illuminate\Support\Str;

class PhotographyController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'thumbnail' => ['required', 'mimes:jpg,jpeg,png'],
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'photography_group_id' => ['required', 'string'],
        ]);
        if ($validator->fails()) return response()->json([$validator->errors()], 406);

        $file = $request->file('thumbnail');
        $newName = Str::random(32) . '.' . $file->getClientOriginalExtension();
        $path  = 'photographies/thumbnails';

        $photography = new Photography();
        $photography->name = $request->input('name');
        $photography->description = $request->input('description');
        $photography->photography_group_id = $request->input('photography_group_id');
        $photography->thumbnail_path = $path . '/' . $newName;
        $photography->thumbnail_full_path = asset($path . '/' . $newName);

        if (!$photography->save() || !$file->move($path, $newName)) return response()->json(["error" => "Something went wrong. Try again later.", "data" => $request->all()], 500);
        return response()->json($photography);
    }

    public function index()
    {
        return response()->json(Photography::all());
    }
}
