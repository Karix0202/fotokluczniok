<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PhotographyGroup;
use App\Gallery;
use App\Http\Resources\PhotographyGroupCollection;
use App\Http\Resources\IndexGalleryCollection;
use App\Http\Resources\Gallery as GalleryResource;
use App\Http\Resources\ImageCollection;
use App\Image;
use App\Photography;

class PublicContentController extends Controller
{
    public function index()
    {
        return response()->json([
            'photography_groups' => new PhotographyGroupCollection(PhotographyGroup::all()),
            'galleries' => new IndexGalleryCollection(Gallery::where('private', '=', '0')->get()),
        ]);
    }

    public function getGallery(Gallery $gallery)
    {
        return response()->json([
            'gallery' => new GalleryResource($gallery),
            'galleries' => new IndexGalleryCollection(Gallery::where('private', '=', '0')->get()),
        ]);
    }

    public function photography(Photography $photography)
    {
        return response()->json([
            'galleries' => new IndexGalleryCollection(Gallery::where('private', '=', '0')->get()),

        ]);
    }

    public function getImages(Gallery $gallery)
    {
        return new ImageCollection(Image::where('gallery_id', '=', $gallery->id)->orderBy('created_at', 'asc')->paginate());
    }
}
