<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genetica extends Model
{    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'marca_id'
    ];
}
