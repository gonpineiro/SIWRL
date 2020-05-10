<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AmbientesRequest;

use App\Ambiente;

class AmbienteController extends Controller
{
    public function index(){
        $ambientes = Ambiente::with('sensors')->get();
        return response()->json($ambientes, 200);
    }

     public function edit($id){
        $ambiente = Ambiente::where('id', $id)->with('sensors')->get();
        return response()->json($ambiente, 200);
    }
    
    public function update($id, AmbientesRequest $request){
        $ambiente = Ambiente::where('id', $id)->firstOrFail();
        
        $ambiente->name = $request->get('name');
        $ambiente->codigo = $request->get('codigo');
        $ambiente->inputs = $request->get('inputs');
        $ambiente->save();

        return response()->json($ambiente, 200);
    }

    public function store(AmbientesRequest $request){    

        $ambiente = Ambiente::create([
            'name' => $request->input('name'),
            'codigo' => $request->input('codigo'),
            'inputs' => $request->input('inputs')
        ]);    
    }

    public function destroy($id) {
        $ambiente = Ambiente::where('id', $id)->firstOrFail();
        $ambiente->delete();
    } 

  
}
