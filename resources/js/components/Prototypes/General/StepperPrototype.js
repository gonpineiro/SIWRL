import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Spinner from '../../General/Spinner';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { obtenerFechaHoy } from '../../../js/funciones'

import * as protoypesActions from '../../../actions/protoypesActions'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    avanzarButton: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    input: {
        width: '50%',
    },
}));

const getSteps = () => ['Implantación', 'Germinación', 'Floración', 'Corte', 'Secado'];

const StepperPrototype = (props) => {
    const {
        prototypesReducer: {
            prototype: {
                id,
                estado,
            },
            cantidad_stepper,
            prototype,
            loading_stepper,
        },
        cambioPrototypeCantidad,
        traerTodosInterval,
        traerDetalleInterval,
        sumarEstadoStepper
    } = props

    const classes = useStyles();

    const steps = getSteps();

    const handlecambioPrototypeCantidad = (event) => cambioPrototypeCantidad(event.target.value);

    const handleNext = () => {

        const enviarUpdateEstado = (estado) => {

            switch (estado) {
                case 0:
                    return {
                        ...prototype,
                        fecha_etapa_b: obtenerFechaHoy(),
                        estado: estado + 1
                    };
                    break;

                case 1:
                    return {
                        ...prototype,
                        fecha_etapa_c: obtenerFechaHoy(),
                        estado: estado + 1
                    };
                    break;

                case 2:
                    return {
                        ...prototype,
                        fecha_etapa_d: obtenerFechaHoy(),
                        estado: estado + 1
                    };
                    break;

                case 3:
                    return {
                        ...prototype,
                        fecha_etapa_e: obtenerFechaHoy(),
                        estado: estado + 1
                    };
                    break;
                case 4:
                    return {
                        ...prototype,
                        fecha_etapa_f: obtenerFechaHoy(),
                        estado: estado + 1,
                        cantidad: cantidad_stepper
                    };
                    break;

                default:
                    break;
            }
        }
        sumarEstadoStepper(enviarUpdateEstado(estado), id)
        traerDetalleInterval(id)
        traerTodosInterval()

    };
    

    return (
        <div className={classes.root}>
            <Stepper activeStep={estado} alternativeLabel className="transparent">
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="center">
                {loading_stepper ? <Spinner /> :
                    estado === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>Prototipo Completado!</Typography>
                        </div>
                    ) : (
                            <div className={classes.root}>
                                <Grid
                                    container
                                    spacing={3}
                                    direction="row"
                                    justify="center"
                                    alignItems="center">

                                    {estado === steps.length - 1 ?
                                        <Grid item xs={2} sm={6} >
                                            <TextField
                                                id="standard-basic"
                                                label="Cantidad"
                                                type="number"
                                                className="form-control transparent input-stepper"
                                                value={cantidad_stepper || ''}
                                                onChange={handlecambioPrototypeCantidad}
                                            />
                                        </Grid> : ''}

                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            className={classes.avanzarButton}
                                            color="primary"
                                            onClick={handleNext}
                                            disabled={estado < 4 || cantidad_stepper ? false : true}
                                        >
                                            {estado === steps.length - 1 ? 'Terminar' : 'Pasar a ' + steps[estado + 1]}
                                        </Button>
                                    </Grid>

                                </Grid>


                            </div>
                        )
                }
            </div>
        </div>
    );
}

const mapStateToProps = (prototypesReducer) => prototypesReducer

export default connect(mapStateToProps, protoypesActions)(StepperPrototype);