<?php

use Illuminate\Database\Seeder;

class GeneticaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('geneticas')->insert([
            'name' => 'Serafina', 'marca_id' => 1,'thc' => rand(0,100),'cbd' => rand(0,100),'prod_int' => rand(100,800), 'prod_ext' => rand(300, 1900),'tiempo_flora' => rand(7, 15), 'sabores' => 'Limon'
            ]);

        DB::table('geneticas')->insert([
            'name' => 'Aleo Vera', 'marca_id' => 2,'thc' => rand(0,100),'cbd' => rand(0,100),'prod_int' => rand(100,800), 'prod_ext' => rand(300, 1900),'tiempo_flora' => rand(7, 15), 'sabores' => 'Pera'
            ]);

        DB::table('geneticas')->insert([
            'name' => 'Plage', 'marca_id' => 3,'thc' => rand(0,100),'cbd' => rand(0,100),'prod_int' => rand(100,800), 'prod_ext' => rand(300, 1900),'tiempo_flora' => rand(7, 15), 'sabores' => 'Manzana'
            ]);

        DB::table('geneticas')->insert([
            'name' => 'Cristal', 'marca_id' => 4,'thc' => rand(0,100),'cbd' => rand(0,100),'prod_int' => rand(100,800), 'prod_ext' => rand(300, 1900),'tiempo_flora' => rand(7, 15), 'sabores' => 'Naranja'
            ]);

        DB::table('geneticas')->insert([
            'name' => 'Cristal', 'marca_id' => 5,'thc' => rand(0,100),'cbd' => rand(0,100),'prod_int' => rand(100,800), 'prod_ext' => rand(300, 1900),'tiempo_flora' => rand(7, 15), 'sabores' => 'Pomelo'
            ]);
    }
}
