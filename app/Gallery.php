<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Gallery extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            $user->{$user->getKeyName()} = (string) Uuid::uuid4();
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

    public function images()
    {
        return $this->hasMany('App\Image');
    }

    public function files()
    {
        return $this->hasMany('App\File');
    }

    public function photography()
    {
        return $this->belongsTo('App\Photography');
    }

    public function delete()
    {
        foreach($this->images as $image) $image->delete();
        return parent::delete();
    }
}
