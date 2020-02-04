<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;
use File;

class Photography extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($photography) {
            $photography->{$photography->getKeyName()} = (string) Uuid::uuid4();
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

    public function group()
    {
        return $this->belongsTo('App\PhotographyGroup');
    }

    public function sections()
    {
        return $this->hasMany('App\Section');
    }

    public function galleries()
    {
        return $this->hasMany('App\Gallery');
    }

    public function delete()
    {
        File::delete($this->thumbnail_path);
        return parent::delete();
    }
}
