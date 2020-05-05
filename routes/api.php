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

/* 
Route::group(['auth:api'], function () {
    
    Route::get('/user', );

    Route::get('/user/{id}', 'UserController@edit');
    Route::put('/user/{id}', 'UserController@update'); 
    Route::post('/user', 'UserController@store'); 
    Route::delete('/user/{id}', 'UserController@destroy');

}); */


    