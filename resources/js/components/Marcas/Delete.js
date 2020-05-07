import React from 'react';
import { connect } from 'react-redux'

import * as marcasActions from '../../actions/marcasActions'

const Delete = (props) => {
    const { marca, borrar, cancelar, error_form } = props

    return (
        <div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label>ID</label>
                    <input
                        value={marca.id}
                        className="form-control"
                        disabled
                    />
                </div>
                <div className="form-group col-md-12">
                    <label>Nombre</label>
                    <input
                        value={marca.name}
                        className="form-control"
                        disabled
                    />
                    {error_form && <small className="text-danger">Existe un registro vinculado.</small>}
                </div>
                <button
                    className="btn btn-dark"
                    onClick={() => borrar(marca.id)}
                >
                    Eliminar
                    </button>
                <button
                    className="btn btn-danger btn-cancelar"
                    onClick={cancelar}
                >
                    Cancelar
                    </button>
            </div>
        </div>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.marcasReducer
}

export default connect(mapStateToProps, marcasActions)(Delete);