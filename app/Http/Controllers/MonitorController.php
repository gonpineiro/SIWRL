<?php

namespace App\Http\Controllers;

use App\Monitor;
use App\Prototype;
use Illuminate\Http\Request;
use Carbon\Carbon;

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

    public function indexPrototypeHora($id){

        $prototype = Prototype::where('id', $id)->firstOrFail();
        $data = Monitor::select('temp', 'hume', 's1', 's2', 's3', 's4', 's5', 's6', 'created_at')    
        ->where('codigo_id',$prototype->ambiente->codigo)
        ->whereBetween('created_at',array(now()->addHour(-24),now()))
        ->orderBy('created_at')
        ->get()            
        ->groupBy(function ($val) {
            return Carbon::parse($val->created_at)->format('H');
        });
        return response()->json($data, 200);
    }
}

/*  */
