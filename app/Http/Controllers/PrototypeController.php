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
        $data->fecha_etapa_a = $request->get('fecha_etapa_a');
        $data->fecha_etapa_b = $request->get('fecha_etapa_b');
        $data->fecha_etapa_c = $request->get('fecha_etapa_c');
        $data->fecha_etapa_d = $request->get('fecha_etapa_d');
        $data->fecha_etapa_e = $request->get('fecha_etapa_e');
        $data->fecha_etapa_f = $request->get('fecha_etapa_f');
        $data->cantidad = $request->get('cantidad');
        $data->estado = $request->get('estado');
        $data->save();

        return response()->json($data, 200);
    }

    public function store(PrototypesRequest $request){        
        $data = Prototype::create([
            'name' => $request->get('name'),
            'genetica_id' => $request->get('genetica_id'),
            'ambiente_id' => $request->get('ambiente_id'),
            'sensor_id' => $request->get('sensor_id'),
            'fecha_etapa_a' => $request->get('fecha_etapa_a'),
            'estado' => 0,
        ]);    
        return response()->json($data, 200);
    }

    public function destroy($id) {
        $data = Prototype::where('id', $id)->firstOrFail();
        $data->delete();
    }
}
