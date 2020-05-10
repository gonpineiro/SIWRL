import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as marcasActions from '../../actions/marcasActions'

const Delete = (props) => {
    const { marca, borrar, cancelar, error_form } = props

    return (
        <div>
            <div className="form-row">

                <div className="form-group col-md-12">
                    <TextField
                        label="ID"
                        value={marca.id}
                        className="form-control"
                        disabled={true}
                    />
                </div>

                <div className="form-group col-md-12">
                    <TextField
                        label="Nombre"
                        value={marca.name}
                        className="form-control"
                        disabled={true}
                    />                    
                </div>

                <div className="form-row margin-button">
                    <div className="form-group col-md-6">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => borrar(marca.id)}
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
    return reducers.marcasReducer
}

export default connect(mapStateToProps, marcasActions)(Delete);