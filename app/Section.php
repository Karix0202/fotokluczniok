<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Section extends Model
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

    public function photography()
    {
        return $this->belongsTo('App\Photography');
    }

    public function images()
    {
        return $this->hasMany('App\SectionImage');
    }

    public function delete()
    {
        foreach($this->images as $image) $image->delete();
        return parent::delete();
    }
}
