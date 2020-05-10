import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import * as protoypesActions from '../../actions/protoypesActions'

const Delete = (props) => {
    const { prototype: { 0: prototype }, borrar, cancelar, error_form } = props

    const useStyles = makeStyles((theme) => ({

        formControl: {
            margin: theme.spacing(0),
            marginBottom: 35,
            width: "100%",
        },
    }));

    const classes = useStyles();

    return (
        <FormControl >
            <div className="form-row">

                <FormControl className={classes.formControl}>
                    <TextField
                        label="ID"
                        value={prototype.id}
                        className="form-control"
                        disabled={true}
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        label="Nombre"
                        value={prototype.name}
                        className="form-control"
                        disabled={true}
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        label="Genetica"
                        value={prototype.genetica.name}
                        className="form-control"
                        disabled={true}
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        label="Ambiente"
                        value={prototype.ambiente.name}
                        className="form-control"
                        disabled={true}
                    />
                </FormControl>

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
        </FormControl>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.prototypesReducer
}

export default connect(mapStateToProps, protoypesActions)(Delete);