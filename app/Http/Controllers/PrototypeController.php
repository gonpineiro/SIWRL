<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
    
    public function update($id, Request $request){

        $data = Prototype::where('id', $id)->firstOrFail();

        $data->name = $request->get('name');
        $data->ambiente_id = $request->get('ambiente_id');
        $data->sensor_id = $request->get('sensor_id');
        $data->save();

        return response()->json($data, 200);
    }

    public function store(Request $request){        
        $data = Prototype::create([
            'name' => $request->input('name'),
            'genetica_id' => $request->input('genetica_id')
        ]);    
    }

    public function destroy($id) {
        $data = Prototype::where('id', $id)->firstOrFail();
        $data->delete();
    }
}
