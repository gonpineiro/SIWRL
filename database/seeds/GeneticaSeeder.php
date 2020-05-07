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
        
        DB::table('geneticas')->insert(['name' => 'Serafina', 'marca_id' => 1,'thc' => 25]);
        DB::table('geneticas')->insert(['name' => 'Aleo Vera', 'marca_id' => 1,'thc' => 25]);
        DB::table('geneticas')->insert(['name' => 'Plage', 'marca_id' => 1,'thc' => 25]);
        DB::table('geneticas')->insert(['name' => 'Cristal', 'marca_id' => 1,'thc' => 25]);

        DB::table('geneticas')->insert(['name' => 'Fijasd', 'marca_id' => 2,'thc' => 25]);
        DB::table('geneticas')->insert(['name' => 'SItacio', 'marca_id' => 2,'thc' => 25]);
        DB::table('geneticas')->insert(['name' => 'Leis', 'marca_id' => 2,'thc' => 25]);
        DB::table('geneticas')->insert(['name' => 'Siop', 'marca_id' => 2,'thc' => 25]);

        DB::table('geneticas')->insert(['name' => 'Huji', 'marca_id' => 3,'thc' => 25]);
        DB::table('geneticas')->insert(['name' => 'Pols', 'marca_id' => 3,'thc' => 25]);
        DB::table('geneticas')->insert(['name' => 'Humos', 'marca_id' => 3,'thc' => 25]);
        DB::table('geneticas')->insert(['name' => 'retos', 'marca_id' => 3,'thc' => 25]);
    }
}
