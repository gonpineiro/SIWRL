<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrototypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prototypes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 20);
            $table->bigInteger('genetica_id')->unsigned();
            $table->bigInteger('ambiente_id')->unsigned()->nullable();
            $table->bigInteger('sensor_id')->unsigned();
            $table->date('fecha_etapa_a')->nullable();      //implante
            $table->date('fecha_etapa_b')->nullable();      //germi
            $table->date('fecha_etapa_c')->nullable();      //flori
            $table->date('fecha_etapa_d')->nullable();      //corte
            $table->date('fecha_etapa_e')->nullable();      //final
            $table->integer('cantidad')->nullable();
            $table->timestamps();
        });

        Schema::table('prototypes', function (Blueprint $table) {
            $table->foreign('genetica_id')->references('id')->on('geneticas');
            $table->foreign('ambiente_id')->references('id')->on('ambientes');
            $table->foreign('sensor_id')->references('id')->on('sensors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prototypes');
    }
}
