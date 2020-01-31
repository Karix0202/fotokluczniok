<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PhotographyGroupCollection;
use App\PhotographyGroup;
use App\Http\Resources\IndexGalleryCollection;
use App\Gallery;

class IndexController extends Controller
{
    public function index()
    {
        return response()->json([
            'photography_groups' => new PhotographyGroupCollection(PhotographyGroup::all()),
            'galleries' => new IndexGalleryCollection(Gallery::where('private', '=', '0')->get()),
        ]);
    }
}
