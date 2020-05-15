import React from 'react';
import { connect } from 'react-redux'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Avatar from '@material-ui/core/Avatar';
import { red, indigo, brown } from '@material-ui/core/colors';
import Spinner from '../General/Spinner';

import { calcularDiasTotales, calcularPorcentaje, calcularDiasTotalesParse, traerValorSensor } from '../../js/funciones'

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
                },
                sensor,
                ambiente,
                fecha_etapa_a,
                fecha_etapa_b,
                fecha_etapa_c,
                fecha_etapa_d,
                fecha_etapa_e,
                cantidad,
            },
            prototype
        }
    } = props

    const volver = () => traerTabla()

    const useStyles = makeStyles((theme) => ({

        avatars: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
            justifyContent: "center"
        },

        temp: {
            color: theme.palette.getContrastText(red[900]),
            backgroundColor: red[900],
            width: theme.spacing(20),
            height: theme.spacing(20), brown
        },

        hume: {
            color: theme.palette.getContrastText(indigo[500]),
            backgroundColor: indigo[500],
            width: theme.spacing(20),
            height: theme.spacing(20),
        },

        tierra: {
            color: theme.palette.getContrastText(brown[500]),
            backgroundColor: brown[500],
            width: theme.spacing(20),
            height: theme.spacing(20),
        },

        formControl: {
            margin: theme.spacing(1),
            marginBottom: 35,
            width: "90%"
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
                        <div className="row">

                            <div className="col col-md-8">
                                <FormControl className={classes.formControl}>
                                    <div className="row mt-2">
                                        <div className="col col-md-8">
                                            <h4>Informacion Complementaria</h4>
                                        </div>
                                    </div>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Implante</td>
                                                <td>{fecha_etapa_a}</td>
                                                <td>--</td>
                                            </tr>
                                            <tr>
                                                <td>Germi</td>
                                                <td>{fecha_etapa_b}</td>
                                                <td>{fecha_etapa_b ? calcularDiasTotalesParse(fecha_etapa_b, fecha_etapa_a) + 'Dias' : ''}</td>
                                            </tr>
                                            <tr>
                                                <td>Flori</td>
                                                <td>{fecha_etapa_c}</td>
                                                <td>{fecha_etapa_c ? calcularDiasTotalesParse(fecha_etapa_c, fecha_etapa_b) + 'Dias' : ''}</td>
                                            </tr>
                                            <tr>
                                                <td>Corte</td>
                                                <td>{fecha_etapa_d}</td>
                                                <td>{fecha_etapa_d ? calcularDiasTotalesParse(fecha_etapa_d, fecha_etapa_c) + 'Dias' : ''}</td>
                                            </tr>
                                        </tbody>
                                    </table>


                                </FormControl>
                            </div>

                            <div className="col col-md-4">
                                <FormControl className={classes.formControl}>
                                    <div className="row mt-2">
                                        <div className="col col-md-8">
                                            <h4>Final</h4>
                                        </div>
                                    </div>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Etapa</td>
                                                <td>{fecha_etapa_a || '-'}</td>
                                            </tr>
                                            <tr>
                                                <td>Cantidad</td>
                                                <td>{cantidad}</td>
                                            </tr>
                                            <tr>
                                                <td>Dias totales</td>
                                                <td>{fecha_etapa_e ?
                                                    calcularDiasTotalesParse(fecha_etapa_e, fecha_etapa_a) + ' Dias' :
                                                    calcularDiasTotales(Date.now('YYYY-MM-DD'), Date.parse(fecha_etapa_a)) + ' Dias'
                                                }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Dias Estitpulados:</td>
                                                <td>{tiempo_flora}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Progress
                                        percent={
                                            calcularPorcentaje(
                                                calcularDiasTotales(Date.now('YYYY-MM-DD'), Date.parse(fecha_etapa_a)), tiempo_flora)
                                        }
                                        status={
                                            calcularPorcentaje(
                                                calcularDiasTotales(Date.now('YYYY-MM-DD'), Date.parse(fecha_etapa_a)), tiempo_flora) === 100 ?
                                                "sucess" : ""
                                        }
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col col-md-6">
                    <div className="card">
                        <div className={classes.avatars}>
                            <Avatar alt="Remy Sharp" className={classes.temp} >
                                <div className="avatar">
                                    {ambiente.monitors.length ? ambiente.monitors[ambiente.monitors.length - 1].temp + 'C°' : ''}
                                </div>
                            </Avatar>
                            <Avatar alt="Travis Howard" className={classes.hume} >
                                <div className="avatar">
                                    {ambiente.monitors.length ? ambiente.monitors[ambiente.monitors.length - 1].hume + 'C°' : ''}
                                </div>
                            </Avatar>
                            <Avatar alt="Cindy Baker" className={classes.tierra} >
                                <div className="avatar">
                                    {ambiente.monitors.length && sensor ? traerValorSensor(prototype) + 'C°' : ''}
                                </div>
                            </Avatar>
                        </div>
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

export default connect(mapStateToProps, protoypesActions)(Detalle);




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