<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Gallery;

class GalleryExist implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if (Gallery::find($value) === null) return false;
        return Gallery::find($value)->gallery === null;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Gallery is null or already has been assigned to photography';
    }
}
