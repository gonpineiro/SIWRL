<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(['name' => 'Gonzalo','email' => 'gon.pineiro@gmail.com','password' => Hash::make('admin'),'api_token' => Str::random(60)]);
        DB::table('users')->insert(['name' => 'Roberto','email' => 'roberto@gmail.com','password' => Hash::make('admin'),'api_token' => Str::random(60)]);
        DB::table('users')->insert(['name' => 'Matias','email' => 'matias@gmail.com','password' => Hash::make('admin'),'api_token' => Str::random(60)]);
        DB::table('users')->insert(['name' => 'Cecilia','email' => 'cecilia@gmail.com','password' => Hash::make('admin'),'api_token' => Str::random(60)]);
        DB::table('users')->insert(['name' => 'Maria','email' => 'Maria@gmail.com','password' => Hash::make('admin'),'api_token' => Str::random(60)]);
        
    }
}
