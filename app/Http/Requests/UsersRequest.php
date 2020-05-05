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

        return [
            'name' => 'required|min:3|max:20',
            'password' => 'required',
            'email' => 'required|email|max:100|unique:users,email'.$id
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El nombre el requerido.',
            'name.min' => 'El minimo es 3 caracteres.',
            'name.max' => 'El maximo es 20 caracteres.',

            'password.required' => 'El password el requerido.',

            'email.required' => 'El email es requerido.',
            'email.unique' => 'Ya existe un correo. ',
            'email.email' => 'No corresponde el formato.',
            'email.max' => 'El maximo es 20 caracteres.'
        ];
    }
  
}
