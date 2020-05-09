<?php

use Illuminate\Database\Seeder;

class SensorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        for ($i=1; $i < 6; $i++) { 
            DB::table('sensors')->insert([
                'ambiente_id' => 1,
                'name' => 'S-'.rand(10, 33),
                'output' => $i,
            ]);
        }
        

        for ($i=1; $i < 6; $i++) { 
            DB::table('sensors')->insert([
                'ambiente_id' => 2,
                'name' => 'S-'.rand(10, 33),
                'output' => $i,
            ]);
        }

        

        
    }
}
