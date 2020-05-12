<?php

namespace App\Http\Controllers;

use App\Sensor;
use Illuminate\Http\Request;

class SensorController extends Controller
{
    public function update($id, Request $request){

        $data = Sensor::where('id', $id)->firstOrFail();

        $data->name = $request->get('name');
        $data->ambiente_id = $request->get('ambiente_id');
        $data->save();

        return response()->json($data, 200);
    }
}
