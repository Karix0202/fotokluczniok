<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\SectionCollection;
use App\Http\Resources\IndexGalleryCollection as GalleryCollection;
use App\Section;

class PhotographyPublic extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description,
            'sections' => new SectionCollection(
                Section::where('photography_id', '=', $this->id)->orderBy('created_at', 'asc')->get()
            ),
            'galleries' => new GalleryCollection($this->galleries),
        ];
    }
}
