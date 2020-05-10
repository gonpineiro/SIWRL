<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Sensor;

class Ambiente extends Model
{
    public function sensors()
    {
        return $this->hasMany('App\Sensor');
    }

    public function monitors()
    {
        return $this->hasMany('App\Monitor', 'codigo_id', 'codigo');
    }
    

    protected $fillable = [
        'name', 'codigo', 'temp', 'hume', 'luz', 'etapa'
    ];
}