<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\GeneticasRequest;

use App\Genetica;
use App\Marca;

class GeneticaController extends Controller
{
    public function index(){
        $genetica = Genetica::with('marca')->get();
        
        //dd($genetica);
        return response()->json($genetica, 200);
    }

    public function edit($id){
        $genetica = Genetica::where('id', $id)->firstOrFail();
        //$genetica->marca = $genetica->marca;

        return response()->json($genetica, 200);
    }
    
    public function update($id, GeneticasRequest $request){

        $genetica = Genetica::where('id', $id)->firstOrFail();
        $genetica->name = $request->get('name');
        $genetica->marca_id = $request->get('marca_id');
        $genetica->save();
        //dd($genetica);
        return response()->json($genetica, 200);
    }

    public function store(GeneticasRequest $request){        
        $genetica = Genetica::create([
            'name' => $request->input('name'),
            'marca_id' => $request->input('marca_id')
        ]);    
    }

    public function destroy($id) {
        $genetica = Genetica::where('id', $id)->firstOrFail();
        $genetica->delete();
    }

    private function findByIdGenetica($id){
        return Genetica::where('id', $id)->with('marca')->get();
    }
}
