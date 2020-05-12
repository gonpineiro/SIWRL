<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PrototypesRequest extends FormRequest
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
        $id = $this->request->get('id') ? ',' . $this->request->get('id') : '';

        return [
            'name' => 'required|min:3|max:15',
            'genetica_id' => 'required',
            'ambiente_id' => 'required',
            'sensor_id' => 'required|unique:prototypes,sensor_id'.$id
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Requerido.',
            'name.min' => 'El minimo es 3 caracteres.',
            'name.max' => 'El maximo es 15 caracteres.',

            'genetica_id.required' => 'Requerido.',

            'ambiente_id.required' => 'Requerido.',

            'sensor_id.required' => 'Requerido.',
            'sensor_id.unique' => 'Ya se encuentra vinvulado este sensor.'
            
        ];
    }
}
