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
            's1' => $request->get('s1'),
            's2' => $request->get('s2'),
            's3' => $request->get('s3'),
            's4' => $request->get('s4'),
        ]);    
        return response()->json($data, 200);
    }
}
