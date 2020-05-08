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
        return response()->json($genetica, 200);
    }

    public function edit($id){
        $genetica = Genetica::where('id', $id)->with('marca')->get();
        return response()->json($genetica, 200);
    }
    
    public function update($id, GeneticasRequest $request){
        $genetica = Genetica::where('id', $id)->firstOrFail();

        $genetica->name = $request->get('name');
        $genetica->marca_id = $request->get('marca_id');
        $genetica->thc = $request->get('thc');
        $genetica->cbd = $request->get('cbd');
        $genetica->prod_int = $request->get('prod_int');
        $genetica->prod_ext = $request->get('prod_ext');
        $genetica->tiempo_flora = $request->get('tiempo_flora');
        $genetica->sabores = $request->get('sabores');

        $genetica->save();        
        return response()->json($genetica, 200);
    }

    public function store(GeneticasRequest $request){               
        $genetica = Genetica::create([
            'name' => $request->input('name'),
            'marca_id' => $request->input('marca_id'),
            'thc' => $request->input('thc'),
            'cbd' => $request->input('cbd'),
            'prod_int' => $request->input('prod_int'),
            'prod_ext' => $request->input('prod_ext'),
            'tiempo_flora' => $request->input('tiempo_flora'),
            'sabores' => $request->input('sabores')
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
