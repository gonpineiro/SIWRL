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
        $faker = Faker\Factory::create();

        for ($i=0; $i < 5; $i++) { 
            DB::table('geneticas')->insert([
                'name' => $faker->lastName(),
                'marca_id' => rand(1, 5),
                'thc' => rand(0, 100),
                'cbd' => rand(0, 100),
                'prod_int' => rand(100, 800),
                'prod_ext' => rand(300, 1900),
                'tiempo_flora' => rand(7, 15),
                'sabores' => 'Limon'
                ]);    
        }              

        
    }
}
