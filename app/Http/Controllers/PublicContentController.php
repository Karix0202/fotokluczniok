<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PhotographyGroup;
use App\Gallery;
use App\Http\Resources\PhotographyGroupCollection;
use App\Http\Resources\IndexGalleryCollection;

class PublicContentController extends Controller
{
    public function index()
    {
        return response()->json([
            'photography_groups' => new PhotographyGroupCollection(PhotographyGroup::all()),
            'galleries' => new IndexGalleryCollection(Gallery::where('private', '=', '0')->get()),
        ]);
    }
}
