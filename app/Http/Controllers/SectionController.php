<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Photography;
use \Validator;
use App\Section;
use App\SectionImage;
use App\Rules\StringOrBoolean;
use Illuminate\Support\Str;

class SectionController extends Controller
{
    public function store(Photography $photography, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'galleries' => ['required', new StringOrBoolean],
            'images' => ['required'],
            'images.*' => ['mimes:jpg,jpeg,png'],
            'description' => ['nullable', 'string'],
        ]);
        if ($validator->fails()) return response()->json([$validator->errors()], 406);

        $section = new Section();
        $section->description = $request->input('description') === null ? '' : $request->input('description');
        $section->photography_id = $photography->id;
        if (is_string($request->input('galleries'))) $section->galleries = $request->input('galleries') === 'true' ? true : false;
        else $section->galleries = $request->input('galleries');
        $section->save();

        foreach($request->file('images') as $image) {
            $newName = Str::random(32) . '.' . $image->getClientOriginalExtension();
            $path = 'photographies/' . $section->id;

            $sectionImage = new SectionImage();
            $sectionImage->path = $path . '/' . $newName;
            $sectionImage->full_path = asset($path . '/' . $newName);
            $sectionImage->section_id = $section->id;

            $image->move($path, $newName);
            $sectionImage->save();
        }

        return response()->json(['message' => 'success']);
    }

    public function delete(Section $section)
    {
        $section->delete();
        return response()->json(['message' => 'success']);
    }
}
