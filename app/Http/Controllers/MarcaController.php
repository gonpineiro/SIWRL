<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Marca;

class MarcaController extends Controller
{
    public function index(){
        $marcas = Marca::all();
        return response()->json($marcas, 200);
    }

    public function edit($id){
        $marca = $this->findByIdMarca($id);
        return response()->json($marca, 200);
    }
    
    public function update($id, Request $request){

        $marca = $this->findByIdMarca($id);
        $marca->name = $request->get('name');
        $marca->save();
        return response()->json($marca, 200);
    }

    public function store(Request $request){        
        $marca = Marca::create([
            'name' => $request->input('name')
        ]);    
    }

    public function destroy($id) {
        $marca = $this->findByIdMarca($id);
        $marca->delete();
    }

    private function findByIdMarca($id){
        return Marca::where('id', $id)->firstOrFail();
    }
}
