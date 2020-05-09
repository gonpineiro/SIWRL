<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSensorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sensors', function (Blueprint $table) {
            $table->id();   
            $table->bigInteger('ambiente_id')->unsigned();
            $table->string('name', 10);
            //ESTE DATO DE 'output' SIRVE PARA DETECTAR LA COLUMNA CORRESPONDIENTE A LA TABLA MONITOREO
            $table->integer('output'); 
            $table->timestamps();
        });

        Schema::table('sensors', function (Blueprint $table) {
            $table->foreign('ambiente_id')->references('id')->on('ambientes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sensors');
    }
}
