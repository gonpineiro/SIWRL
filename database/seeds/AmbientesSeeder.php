<?php

use Illuminate\Database\Seeder;

class AmbientesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ambientes')->insert([
            'codigo' => 445682,
            'name' => 'AMB-01',
            'inputs' => 4,
        ]);

        DB::table('ambientes')->insert([
            'codigo' => 445372,
            'name' => 'AMB-02',
            'inputs' => 4,
        ]);
        
    }
}
