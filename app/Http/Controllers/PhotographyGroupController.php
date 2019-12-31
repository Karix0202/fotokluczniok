<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PhotographyGroup;

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
}
