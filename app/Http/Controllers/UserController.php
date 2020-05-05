<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UsersRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use App\User;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return response()->json($users, 200);
    }

    public function edit($id){
        $users = $this->findByIdUser($id);
        return response()->json($users, 200);
    }

    public function update($id, UsersRequest $request){

        $user = $this->findByIdUser($id);
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        if (!is_null($request->get('password'))) {            
            $user->password = Hash::make($request->get('password'));
        }
        $user->save();
        return response()->json($user, 200);
    }

    public function store(UsersRequest $request){        
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'api_token' => Str::random(60)
        ]);    
    }

    public function destroy($id) {
        $user = $this->findByIdUser($id);
        $user->delete();
    }

    private function findByIdUser($id){
        return User::where('id', $id)->firstOrFail();
    }
}
