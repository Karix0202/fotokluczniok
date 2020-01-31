<?php

namespace App\Http\Controllers;

use App\Gallery;
use Illuminate\Http\Request;
use \Validator;
use App\Photography;
use Illuminate\Support\Str;
use App\Http\Resources\PhotographyAdmin as PhotographyResource;
use App\Rules\GalleryExist;
use App\Http\Resources\IndexGalleryCollection;
use App\Http\Resources\PhotographyPublic;

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

    public function get(Photography $photography)
    {
        return new PhotographyResource($photography);
    }

    public function assignGalleries(Photography $photography, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'galleries' => ['required', 'array'],
            'galleries.*' => [new GalleryExist],
        ]);
        if ($validator->fails()) return response()->json([$validator->errors()], 406);

        foreach ($request->input('galleries') as $galleryId) {
            $gallery = Gallery::find($galleryId);
            $gallery->photography_id = $photography->id;
            $gallery->save();
        }

        return [
            'galleries' => Gallery::whereIn('id', $request->input('galleries'))->get()
        ];
    }

    public function delete(Photography $photography)
    {
        if(! $photography->delete()) return response()->json(['error' => 'Could not delete photography'], 500);

        return response()->json(['message' => 'success']);
    }

    public function getPublic(Photography $photography)
    {
        return response()->json([
            'galleries' => new IndexGalleryCollection(Gallery::where('private', '=', '0')->get()),
            'photography' => new PhotographyPublic($photography),
        ]);
    }
}
