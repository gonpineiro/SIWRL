<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UsersRequest extends FormRequest
{
    //protected $redirect = '/users';
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->request->get('id') ? ',' . $this->request->get('id') : '';
        //dd($id);
        return [
            'name' => 'required',
            'email' => 'required|email|unique:users,email'.$id
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El nombre el requerido.',
            'email.required' => 'El email es requerido.',
            'email.unique' => 'Ya existe un correo. ',
            'email.email' => 'no corresponde el formato. '
        ];
    }
  
}
