import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as protoypesActions from '../../actions/protoypesActions'

const Delete = (props) => {
    const { prototype: { 0: prototype }, borrar, cancelar, error_form } = props

    return (
        <div>
            <div className="form-row">

                <div className="form-group col-md-12">
                    <TextField
                        label="ID"
                        value={prototype.id}
                        className="form-control"
                        disabled={true}
                    />
                </div>

                <div className="form-group col-md-12">
                    <TextField
                        label="Nombre"
                        value={prototype.name}
                        className="form-control"
                        disabled={true}
                    />                    
                </div>

                <div className="form-row margin-button">
                    <div className="form-group col-md-6">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => borrar(prototype.id)}
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
    return reducers.prototypesReducer
}

export default connect(mapStateToProps, protoypesActions)(Delete);