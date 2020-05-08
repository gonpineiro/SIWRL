import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import * as usersActions from '../../actions/usersActions'

const Delete = (props) => {
    const { user, borrar, cancelar } = props

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(2),
                width: "95%",
            },
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <div className="form-row">

                <div className="form-group col-md-12">
                    <TextField
                        label="ID"
                        value={user.id}
                        className="form-control"
                        disabled={true}
                    />
                </div>

                <div className="form-group col-md-12">
                    <TextField
                        label="Nombre"
                        value={user.name}
                        className="form-control"
                        disabled={true}
                    />
                </div>

                <div className="form-group col-md-12">
                    <TextField
                        label="Email"
                        value={user.email}
                        className="form-control"
                        disabled={true}
                    />
                </div>

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
        </div>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Delete);