import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import * as marcasActions from '../../actions/marcasActions'

const Delete = (props) => {
    const { marca, borrar, cancelar, error_form } = props

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
                        value={marca.id}
                        className="form-control"
                        disabled={true}
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        label="Nombre"
                        value={marca.name}
                        className="form-control"
                        disabled={true}
                    />
                </FormControl>

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
        </FormControl>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.marcasReducer
}

export default connect(mapStateToProps, marcasActions)(Delete);