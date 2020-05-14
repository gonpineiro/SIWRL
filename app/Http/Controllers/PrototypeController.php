<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PrototypesRequest;
use App\Prototype;

class PrototypeController extends Controller
{
    public function index(){
        $data = Prototype::with('sensor')
            ->with('genetica')
            ->with('ambiente')
            ->get();
        
        //dd($data[0]->ambiente->monitors->take(5));

        return response()->json($data, 200);
    }

    public function edit($id){
        $data = Prototype::where('id', $id)
            ->with('sensor')
            ->with('genetica')
            ->with('ambiente')
            ->get();

        return response()->json($data, 200);
    }
    
    public function update($id, PrototypesRequest $request){

        $data = Prototype::where('id', $id)->firstOrFail();

        $data->name = $request->get('name');
        $data->genetica_id = $request->get('genetica_id');
        $data->ambiente_id = $request->get('ambiente_id');
        $data->sensor_id = $request->get('sensor_id');
        $data->save();

        return response()->json($data, 200);
    }

    public function store(PrototypesRequest $request){        
        $data = Prototype::create([
            'name' => $request->input('name'),
            'genetica_id' => $request->get('genetica_id'),
            'ambiente_id' => $request->get('ambiente_id'),
            'sensor_id' => $request->get('sensor_id'),
            'fecha_etapa_a' => $request->get('fecha_etapa_a'),
        ]);    
        return response()->json($data, 200);
    }

    public function destroy($id) {
        $data = Prototype::where('id', $id)->firstOrFail();
        $data->delete();
    }
}
