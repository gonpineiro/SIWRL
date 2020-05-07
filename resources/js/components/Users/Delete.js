import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'

const Delete = (props) => {
    const { user, borrar, cancelar } = props

    return (
        <div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label>ID</label>
                    <input
                        value={user.id}
                        className="form-control"
                        disabled
                    />
                </div>
                <div className="form-group col-md-12">
                    <label>Nombre</label>
                    <input
                        value={user.name}
                        className="form-control"
                        disabled
                    />
                </div>
                <div className="form-group col-md-12">
                    <label>Email</label>
                    <input
                        value={user.email}
                        className="form-control"
                        disabled
                    />
                </div>
                <button
                    className="btn btn-dark"
                    onClick={() => borrar(user.id)}
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
    return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Delete);