<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AmbientesRequest extends FormRequest
{
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
        return [
            'name' => 'required|min:3|max:15',
            'codigo' => 'required|min:6|max:6',
            'inputs' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Requerido.',
            'name.min' => 'El minimo es 3 caracteres.',
            'name.max' => 'El maximo es 15 caracteres.',

            'codigo.required' => 'Requerido.',
            'codigo.min' => 'El minimo es 6 digitos.',
            'codigo.max' => 'El maximo es 6 digitos.',

            'inputs.required' => 'Requerido.',
        ];
    }
}
