<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{    
    public function ambiente(){
        return $this->belongsTo('App\Ambiente');
    }

    protected $fillable = [
        'name', 'ambiente_id', 'output'
    ];
}
