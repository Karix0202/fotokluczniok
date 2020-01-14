<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;
use File;

class Image extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($image) {
            $image->{$image->getKeyName()} = (string) Uuid::uuid4();
        });
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }

    public function gallery()
    {
        return $this->belongsTo('App\Gallery');
    }

    public function delete()
    {
        File::delete($this->path);
        return parent::delete();
    }
}
