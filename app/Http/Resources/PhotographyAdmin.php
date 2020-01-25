<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\GalleriesAvailableToAssignCollection as GalleriesCollection;
use App\Gallery;

class PhotographyAdmin extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'thumbnail_path' => $this->thumbnail_full_path,
            'photography_group_id' => $this->photography_group_id,
            'description' => $this->description,
            'galleries' => $this->galleries,
            'galleries_to_assign' => new GalleriesCollection(Gallery::where('photography_id', '=', null)->get()),
            'sections' => $this->sections,
        ];;
    }
}
