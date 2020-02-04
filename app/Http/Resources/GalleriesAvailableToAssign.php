<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Photography;

class GalleriesAvailableToAssign extends JsonResource
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
            'text' => $this->photography_id != null ? $this->name . ' - ' . Photography::get($this->photography_id) : $this->name,
            'value' => $this->id,
            'disabled' => $this->photography_id != null ? true : false,
        ];
    }
}
