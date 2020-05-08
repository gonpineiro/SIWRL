import React from 'react';
import { connect } from 'react-redux'

import * as geneticasActions from '../../actions/geneticasActions'

const Delete = (props) => {
    const { genetica: { 0: genetica }, borrar, cancelar } = props
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

                <div className="form-group col-md-12">
                    <label>Marca</label>
                    <input
                        value={genetica.marca.name}
                        className="form-control"
                        disabled
                    />
                </div>

                <div className="form-group col-md-12">
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label>THC</label>
                            <input
                                value={genetica.thc}
                                className="form-control"
                                disabled
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label>CBD</label>
                            <input
                                value={genetica.cbd}
                                className="form-control"
                                disabled
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group col-md-12">
                    <div className="form-row">

                        <div className="form-group col-md-4">
                            <label>THC</label>
                            <input
                                value={genetica.prod_int}
                                className="form-control"
                                disabled
                            />
                        </div>

                        <div className="form-group col-md-4">
                            <label>CBD</label>
                            <input
                                value={genetica.prod_ext}
                                className="form-control"
                                disabled
                            />
                        </div>

                        <div className="form-group col-md-4">
                            <label>CBD</label>
                            <input
                                value={genetica.tiempo_flora}
                                className="form-control"
                                disabled
                            />
                        </div>

                    </div>
                </div>

                <div className="form-group col-md-12">
                    <label>Sabores</label>
                    <input
                        value={genetica.sabores}
                        className="form-control"
                        disabled
                    />
                </div>

                <div className="form-group col-md-12">
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
        </div>
    );

}

const mapStateToProps = (reducers) => {
    return reducers.geneticasReducer
}

export default connect(mapStateToProps, geneticasActions)(Delete);