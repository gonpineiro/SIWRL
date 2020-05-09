<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonitorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monitors', function (Blueprint $table) {
            $table->id();
            $table->integer('codigo_id')->unsigned();
            $table->integer('temp')->nullable();
            $table->integer('hume')->nullable();
            $table->integer('s1')->nullable();
            $table->integer('s2')->nullable();
            $table->integer('s3')->nullable();
            $table->integer('s4')->nullable();
            $table->integer('s5')->nullable();
            $table->integer('s6')->nullable();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('monitors');
    }
}
