<?php

use Illuminate\Database\Seeder;

class MonitorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 100; $i++) { 
            DB::table('monitors')->insert([
                'codigo_id' => 445682,
                'temp' => rand(10,40),
                'hume' => rand(10,80),
                's1' => rand(0,100),
                's2' => rand(0,100),
                's3' => rand(0,100),
                's4' => rand(0,100),
                's5' => rand(0,100),
                's6' => rand(0,100),
            ]);
        }

        for ($i=0; $i < 100; $i++) { 
            DB::table('monitors')->insert([
                'codigo_id' => 445372,
                'temp' => rand(10,40),
                'hume' => rand(10,80),
                's1' => rand(0,100),
                's2' => rand(0,100),
                's3' => rand(0,100),
                's4' => rand(0,100),
                's5' => rand(0,100),
                's6' => rand(0,100),
            ]);
        }
    }
}
