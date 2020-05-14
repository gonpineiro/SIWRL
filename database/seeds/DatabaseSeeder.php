<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(MarcaSeeder::class);
        $this->call(GeneticaSeeder::class);
        //$this->call(AmbientesSeeder::class);
        //$this->call(SensorsSeeder::class);
        //$this->call(PrototypeSeeder::class);
        //$this->call(MonitorSeeder::class);
                
    }
}
