<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneticasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('geneticas', function (Blueprint $table) {
            $table->id();
            $table->string('name', 20);
            $table->bigInteger('marca_id')->unsigned();
            $table->integer('thc');
            $table->integer('cbd');
            $table->integer('prod_int')->nullable();
            $table->integer('prod_ext')->nullable();
            $table->integer('tiempo_flora');
            $table->string('sabores', 20)->nullable();
            $table->timestamps();
        });

        Schema::table('geneticas', function (Blueprint $table) {
            $table->foreign('marca_id')->references('id')->on('marcas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('geneticas');
    }
}
