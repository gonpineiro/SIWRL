<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::get('/users', function(){
      return view('home');
    })->name('users');

    Route::get('/marcas', function(){
      return view('home');
    })->name('marcas');

    Route::get('/geneticas', function(){
      return view('home');
    })->name('geneticas');

    Route::get('/ambientes', function(){
      return view('home');
    })->name('ambientes');

    Route::get('/prototipos', function(){
      return view('home');
    })->name('prototipos');

    Route::get('//ambientes/sensor/{id}', function(){
      return view('home');
    })->name('sensors-ambiente');
    
    

});




