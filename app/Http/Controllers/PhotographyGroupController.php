<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PhotographyGroup;
use \Validator;

class PhotographyGroupController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['getAll']]);
    }

    public function getAll()
    {
        return response()->json(PhotographyGroup::all());
    }

    public function store(Request $request)
    {
        $validator = $this->getValidator($request->all());
        if ($validator->fails()) return response()->json([$validator->errors()], 406);

        $photographyGroup = new PhotographyGroup();
        $photographyGroup->name = $request->input('name');
        $photographyGroup->save();

        return response()->json($photographyGroup);
    }

    public function get(PhotographyGroup $group)
    {
        return response()->json($group);
    }

    public function delete(PhotographyGroup $group)
    {
        if (! $group->delete()) return response()->json(['error' => 'Could not delete photography group'], 500);

        return response()->json(['message' => 'success']);
    }

    public function update(PhotographyGroup $group, Request $request)
    {
        $validator = $this->getValidator($request->all());
        if ($validator->fails()) return response()->json([$validator->errors()]);

        $group->name = $request->input('name');
        $group->save();

        return response()->json($group);
    }

    public function getValidator(array $data)
    {
        $validator = Validator::make($data, [
            'name' => ['required', 'string']
        ]);

        return $validator;
    }
}
