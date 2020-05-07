import React from 'react';
import { connect } from 'react-redux'

import * as geneticasActions from '../../actions/geneticasActions'

const Delete = (props) => {
    const { genetica, borrar, cancelar } = props
    
    return (
        <div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label>ID</label>
                    <input
                        value={genetica.id}
                        className="form-control"
                        disabled
                    />
                </div>
                <div className="form-group col-md-12">
                    <label>Nombre</label>
                    <input
                        value={genetica.name}
                        className="form-control"
                        disabled
                    />
                </div>
                <button
                    className="btn btn-dark"
                    onClick={() => borrar(genetica.id)}
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
    return reducers.geneticasReducer
}

export default connect(mapStateToProps, geneticasActions)(Delete);