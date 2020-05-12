<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', 'UserController@index');
Route::middleware('auth:api')->get('/user/{id}', 'UserController@edit');
Route::middleware('auth:api')->put('/user/{id}', 'UserController@update');
Route::middleware('auth:api')->post('/user', 'UserController@store');
Route::middleware('auth:api')->delete('/user/{id}', 'UserController@destroy');

Route::middleware('auth:api')->get('/marca', 'MarcaController@index');
Route::middleware('auth:api')->get('/marca/{id}', 'MarcaController@edit');
Route::middleware('auth:api')->put('/marca/{id}', 'MarcaController@update');
Route::middleware('auth:api')->post('/marca', 'MarcaController@store');
Route::middleware('auth:api')->delete('/marca/{id}', 'MarcaController@destroy');

Route::get('/genetica', 'GeneticaController@index');
Route::get('/genetica/{id}', 'GeneticaController@edit');
Route::put('/genetica/{id}', 'GeneticaController@update');
Route::post('/genetica', 'GeneticaController@store');
Route::delete('/genetica/{id}', 'GeneticaController@destroy');

Route::get('/ambiente', 'AmbienteController@index');
Route::get('/ambiente/{id}', 'AmbienteController@edit');
Route::put('/ambiente/{id}', 'AmbienteController@update');
Route::post('/ambiente', 'AmbienteController@store');
Route::delete('/ambiente/{id}', 'AmbienteController@destroy');
Route::get('/ambiente/sensors/{id}', 'AmbienteController@indexSensors');

Route::get('/prototype', 'PrototypeController@index');
Route::get('/prototype/{id}', 'PrototypeController@edit');
Route::put('/prototype/{id}', 'PrototypeController@update');
Route::post('/prototype', 'PrototypeController@store');
Route::delete('/prototype/{id}', 'PrototypeController@destroy');

Route::get('/sensor', 'SensorController@index');
Route::get('/sensor/{id}', 'SensorController@edit');
Route::put('/sensor/{id}', 'SensorController@update');
Route::post('/sensor', 'SensorController@store');
Route::delete('/sensor/{id}', 'SensorController@destroy');