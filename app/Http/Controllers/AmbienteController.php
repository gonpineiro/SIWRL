<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
    
    public function update($id, Request $request){
        $ambiente = Ambiente::where('id', $id)->firstOrFail();
        
        $ambiente->name = $request->get('name');
        $ambiente->codigo = $request->get('codigo');
        $ambiente->save();
        return response()->json($ambiente, 200);
    }

    public function store(Request $request){        
        $ambiente = Ambiente::create([
            'name' => $request->input('name'),
            'codigo' => $request->input('codigo')
        ]);    
    }

    public function destroy($id) {
        $ambiente = Ambiente::where('id', $id)->firstOrFail();
        $ambiente->delete();
    } 

  
}
