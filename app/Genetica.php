<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genetica extends Model
{    
    

    public function marca(){
        return $this->belongsTo('App\Marca');
    }


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    
    protected $fillable = [
        'name', 'marca_id', 'thc', 'cbd', 'prod_int', 'prod_ext', 'tiempo_flora', 'sabores'
    ];
}
