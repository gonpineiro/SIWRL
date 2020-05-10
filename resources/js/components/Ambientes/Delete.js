import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as ambientesActions from '../../actions/ambientesActions'

const Delete = (props) => {
    const { ambiente, borrar, cancelar, error_form } = props

    return (
        <div>
            <div className="form-row">

                <div className="form-group col-md-12">
                    <TextField
                        label="ID"
                        value={ambiente.id}
                        className="form-control"
                        disabled={true}
                    />
                </div>

                <div className="form-group col-md-12">
                    <TextField
                        label="Nombre"
                        value={ambiente.name}
                        className="form-control"
                        disabled={true}
                    />                    
                </div>

                <div className="form-row margin-button">
                    <div className="form-group col-md-6">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => borrar(ambiente.id)}
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
                
                {error_form && <small className="text-danger">Existe un registro vinculado.</small>}
                
            </div>
        </div>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.ambientesReducer
}

export default connect(mapStateToProps, ambientesActions)(Delete);