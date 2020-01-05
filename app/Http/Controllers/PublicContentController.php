<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PhotographyGroup;
use App\Gallery;

class PublicContentController extends Controller
{
    public function index()
    {
        return response()->json([
            'photographyGroups' => PhotographyGroup::all(),
            'galleries' => Gallery::where('private', '=', 0)->get(),
        ]);
    }
}
