<?php

namespace App\Http\Controllers;

use App\Sensor;
use Illuminate\Http\Request;
use App\Http\Requests\SensorRequest;;

class SensorController extends Controller
{
    public function index(){
        $sensors = Sensor::with('ambiente')->get();
        return response()->json($sensors, 200);
    }

    public function edit($id){
        $data = Sensor::where('id', $id)->firstOrFail();
        return response()->json($data, 200);
    }

    public function update($id, SensorRequest $request){

        $data = Sensor::where('id', $id)->firstOrFail();

        $data->name = $request->get('name');
        $data->ambiente_id = $request->get('ambiente_id');
        $data->output = $request->get('output');
        $data->save();

        return response()->json($data, 200);
    }

    public function store(SensorRequest $request){        
        $data = Sensor::create([
            'name' => $request->input('name'),
            'ambiente_id' => $request->input('ambiente_id'),
            'output' => $request->input('output')
        ]);    
    }

    public function destroy($id) {
        $data = Sensor::where('id', $id)->firstOrFail();
        $data->delete();
    }
}
