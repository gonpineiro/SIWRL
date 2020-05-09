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
        return [
            'name' => 'required|min:3|max:15',
            'genetica_id' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Requerido N.',
            'genetica_id.required' => 'Requerido G.',
        ];
    }
}
