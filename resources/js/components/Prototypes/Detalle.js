import React from 'react';
import { connect } from 'react-redux'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Spinner from '../General/Spinner';

import * as protoypesActions from '../../actions/protoypesActions'

const Detalle = (props) => {
    if (props.prototypesReducer.loading && !props.prototypesReducer.prototype.length) return <Spinner />

    const {
        traerTabla,
        prototypesReducer: {
            prototype: {
                name,
                genetica: {
                    name: genetica_name,
                    marca: { name: marca_name },
                    thc,
                    cbd,
                    tiempo_flora,
                    sabores,
                    cantidad
                },
                ambiente,
                fecha_estado_a,
                fecha_estado_b,
                fecha_estado_c,
                fecha_estado_d,
                fecha_estado_e
            },
            loading
        }
    } = props

    const volver = () => traerTabla()

    const useStyles = makeStyles((theme) => ({

        formControl: {
            margin: theme.spacing(1),
            marginBottom: 35,
            width: "90%",
        },
    }));

    const classes = useStyles();

    return (
        <div className="container col-md-9">

            <div className="row mt-2">
                <div className="col col-md-4">
                    <div className="card">
                        <FormControl className={classes.formControl}>
                            <div className="row mt-2">
                                <div className="col col-md-8">
                                    <h4>Informacion Básica</h4>
                                </div>
                                <div className="col col-md-4 text-derecha">
                                    <KeyboardReturnIcon fontSize="large" onClick={() => volver()} />
                                </div>
                            </div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Nombre:</td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td>Genética:</td>
                                        <td>{genetica_name} {marca_name}</td>
                                    </tr>
                                    <tr>
                                        <td>THC/CBD:</td>
                                        <td>{thc}% / {cbd}%</td>
                                    </tr>
                                    <tr>
                                        <td>Tiempo:</td>
                                        <td>{tiempo_flora}</td>
                                    </tr>
                                    <tr>
                                        <td>Sabones:</td>
                                        <td>{sabores}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </FormControl>
                    </div>
                </div>
                <div className="col col-md-8">
                    <div className="card">
                    //
                    </div>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col col-md-6">
                    <div className="card">
                    //
                    </div>
                </div>
                <div className="col col-md-6">
                    <div className="card">
                    //
                    </div>
                </div>
            </div>


            <div className="row mt-2">
                <div className="col col-md-12">
                    <div className="card">
                    //
                    </div>
                </div>
            </div>


            <div className="row mt-2">
                <div className="col col-md-12">
                    <div className="card">
                    //
                    </div>
                </div>
            </div>


        </div>

    );
}

const mapStateToProps = (prototypesReducer) => {
    return prototypesReducer;
};

export default connect(mapStateToProps,protoypesActions)(Detalle);




{/* <FormControl className={classes.formControl}>
<FormControl className={classes.formControl}>
    <TextField
        id="standard-basic"
        label="Nombre"
        type="text"
        className="form-control"
        value={name || ''}
    />
</FormControl>
<FormControl className={classes.formControl}>
    <TextField
        id="standard-basic"
        label="Genética"
        type="text"
        className="form-control"
        value={genetica_name || ''}
    />
</FormControl>
<FormControl className={classes.formControl}>
    <TextField
        id="standard-basic"
        label="Marca"
        type="text"
        className="form-control"
        value={marca_name || ''}
    />
</FormControl>
<FormControl className={classes.formControl}>
    <TextField
        id="standard-basic"
        label="THC"
        type="text"
        className="form-control"
        value={thc || ''}
    />
</FormControl>
<FormControl className={classes.formControl}>
    <TextField
        id="standard-basic"
        label="CBD"
        type="text"
        className="form-control"
        value={cbd || ''}
    />
</FormControl>
</FormControl>
 */}