<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prototype extends Model
{

    public function genetica(){
        return $this->belongsTo('App\Genetica')->with('marca');
    }

    public function ambiente(){
        return $this->belongsTo('App\Ambiente')->with('monitors');;
    }

    public function sensor(){
        return $this->belongsTo('App\Sensor');
    }


    protected $fillable = [
        'name',
        'genetica_id',
        'ambiente_id',
        'sensor_id',
        'fecha_etapa_a',
        'fecha_etapa_b',
        'fecha_etapa_c',
        'fecha_etapa_d',
        'cantidad'
    ];
}
