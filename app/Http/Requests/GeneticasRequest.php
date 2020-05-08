<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GeneticasRequest extends FormRequest
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
            'marca_id' => 'required',
            'thc' => 'required',
            'cbd' => 'required',
            'tiempo_flora' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Requerido.',
            'name.min' => 'El minimo es 3 caracteres.',
            'name.max' => 'El maximo es 15 caracteres.',

            'marca_id.required' => 'La marca es requerida',

            'thc.required' => 'Requerido.',
            'cbd.required' => 'Requerido.',

            'tiempo_flora.required' => 'Requerido.',
        ];
    }
}
