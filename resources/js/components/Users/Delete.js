import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import * as usersActions from '../../actions/usersActions'

const Delete = (props) => {
    const { user, borrar, cancelar } = props

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
                        value={user.id}
                        className="form-control"
                        disabled={true}
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        label="Nombre"
                        value={user.name}
                        className="form-control"
                        disabled={true}
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        label="Email"
                        value={user.email}
                        className="form-control"
                        disabled={true}
                    />
                </FormControl>

                <div className="form-row margin-button">
                    <div className="form-group col-md-6">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => borrar(user.id)}
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
        </FormControl>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Delete);