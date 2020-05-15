<?php

namespace App\Http\Controllers;

use App\Monitor;
use Illuminate\Http\Request;

class MonitorController extends Controller
{
    public function store(Request $request){        
        $data = Monitor::create([
            'codigo_id' => $request->input('codigo_id'),
            'temp' => $request->get('temp'),
            'hume' => $request->get('hume'),
            'estado' => $request->get('estado'),
            'horas_luz' => $request->get('horas_luz'),
            's1' => rand(0,100),
            's2' => rand(0,100),
            's3' => rand(0,100),
            's4' => rand(0,100)
        ]);    
        return response()->json($data, 200);
    }
}
