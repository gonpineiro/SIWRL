<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\GeneticasRequest;

use App\Genetica;

class GeneticaController extends Controller
{
    public function index(){
        $genetica = Genetica::all();
        return response()->json($genetica, 200);
    }

    public function edit($id){
        $genetica = $this->findByIdGenetica($id);
        return response()->json($genetica, 200);
    }
    
    public function update($id, GeneticasRequest $request){

        $genetica = $this->findByIdGenetica($id);
        $genetica->name = $request->get('name');
        $genetica->save();
        return response()->json($genetica, 200);
    }

    public function store(GeneticasRequest $request){        
        $genetica = Genetica::create([
            'name' => $request->input('name'),
            'marca_id' => $request->input('marca_id')
        ]);    
    }

    public function destroy($id) {
        $genetica = $this->findByIdGenetica($id);
        $genetica->delete();
    }

    private function findByIdGenetica($id){
        return Genetica::where('id', $id)->firstOrFail();
    }
}
