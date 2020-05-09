<?php

use Illuminate\Database\Seeder;

class PrototypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i < 6; $i++) { 
            DB::table('prototypes')->insert([
                'name' => 'PROTO-0'.$i,
                'genetica_id' => rand(1,5),
                'ambiente_id' => 1,
                'sensor_id' => $i,
                'fecha_etapa_a' => date_create('now')->format('Y-m-d H:i:s'),
            ]);
        }
        
    }
}
