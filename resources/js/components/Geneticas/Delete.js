import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as geneticasActions from '../../actions/geneticasActions'

const Delete = (props) => {
    const { genetica: { 0: genetica }, borrar, cancelar } = props
    return (
        <div>
            <div className="form-row">

                <div className="form-group col-md-12">
                    <TextField
                        label="ID"
                        value={genetica.id}
                        className="form-control"
                        disabled={true}
                    />
                </div>

                <div className="form-group col-md-12">
                    <TextField
                        label="Nombre"
                        value={genetica.name}
                        className="form-control"
                        disabled={true}
                    />
                </div>

                <div className="form-group col-md-12">
                    <TextField
                        label="Nombre"
                        value={genetica.marca.name}
                        className="form-control"
                        disabled={true}
                    />
                </div>

                <div className="form-group col-md-12">
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <TextField
                                label="THC"
                                value={genetica.thc}
                                className="form-control"
                                disabled={true}
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <TextField
                                label="CBD"
                                value={genetica.cbd}
                                className="form-control"
                                disabled={true}
                            />
                        </div>
                        
                    </div>
                </div>

                <div className="form-group col-md-12">
                    <TextField
                        label="Sabores"
                        value={genetica.sabores}
                        className="form-control"
                        disabled={true}
                    />
                </div>

                <div className="form-group col-md-12">
                    <div className="form-row">

                        <div className="form-group col-md-4">
                            <TextField
                                label="Interna"
                                value={genetica.prod_int}
                                className="form-control"
                                disabled={true}
                            />
                        </div>

                        <div className="form-group col-md-4">
                            <TextField
                                label="Externa"
                                value={genetica.prod_ext}
                                className="form-control"
                                disabled={true}
                            />
                        </div>

                        <div className="form-group col-md-4">
                            <TextField
                                label="Tiempo"
                                value={genetica.tiempo_flora}
                                className="form-control"
                                disabled={true}
                            />
                        </div>

                    </div>
                </div>

                <div className="form-row margin-button">
                    <div className="form-group col-md-6">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => borrar(genetica.id)}
                        >
                            Eliminar
                         </Button>
                    </div >

                    <div className="form-group col-md-6">
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={cancelar}
                        >
                            Cancelar
                        </Button>
                    </div >

                </div>

            </div>
        </div>
    );

}

const mapStateToProps = (reducers) => {
    return reducers.geneticasReducer
}

export default connect(mapStateToProps, geneticasActions)(Delete);