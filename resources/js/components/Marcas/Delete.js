import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as marcasActions from '../../actions/marcasActions'


class Delete extends Component {
    render() {
        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label>ID</label>
                        <input
                            value={this.props.marca.id}
                            className="form-control"
                            disabled
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <label>Nombre</label>
                        <input
                            value={this.props.marca.name}
                            className="form-control"
                            disabled
                        />
                    </div>
                    <button
                        className="btn btn-dark"
                        onClick={() => this.props.borrar(this.props.marca.id)}
                    >
                        Eliminar
                    </button>
                    <button
                        className="btn btn-danger btn-cancelar"
                        onClick={this.props.cancelar}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reducers) => {
    return reducers.marcasReducer
}

export default connect(mapStateToProps, marcasActions)(Delete);