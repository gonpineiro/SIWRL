<?php

use Illuminate\Database\Seeder;

class MarcaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('marcas')->insert(['name' => 'BSF']);
        DB::table('marcas')->insert(['name' => 'Sense Seeds']);
        DB::table('marcas')->insert(['name' => 'Monkey']);
        DB::table('marcas')->insert(['name' => 'Delicius']);
        DB::table('marcas')->insert(['name' => 'Stunka']);
    }
}
