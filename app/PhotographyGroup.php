<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class PhotographyGroup extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($photographyGroup) {
            $photographyGroup->{$photographyGroup->getKeyName()} = (string) Uuid::uuid4();
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

    public function photographies()
    {
        return $this->hasMany('App\Photography');
    }

    public function delete()
    {
        foreach($this->photographies as $photography) $photography->delete();
        return parent::delete();
    }
}
