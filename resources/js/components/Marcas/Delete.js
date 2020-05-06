import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as marcasActions from '../../actions/marcasActions'


const Delete = (props) => {
    return (
        <div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label>ID</label>
                    <input
                        value={props.marca.id}
                        className="form-control"
                        disabled
                    />
                </div>
                <div className="form-group col-md-12">
                    <label>Nombre</label>
                    <input
                        value={props.marca.name}
                        className="form-control"
                        disabled
                    />
                {props.error_form && <small className="text-danger">Existe un registro vinculado.</small>}
                </div>
                <button
                    className="btn btn-dark"
                    onClick={() => props.borrar(props.marca.id)}
                >
                    Eliminar
                    </button>
                <button
                    className="btn btn-danger btn-cancelar"
                    onClick={props.cancelar}
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