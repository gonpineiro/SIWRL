<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Monitor extends Model
{
    protected $fillable = [
        'codigo_id', 'temp', 'hume', 'estado', 'temp', 'horas_luz', 's1', 's2', 's3', 's4', 's5', 's6'
    ];
}
