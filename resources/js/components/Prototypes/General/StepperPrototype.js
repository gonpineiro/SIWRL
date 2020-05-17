import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Spinner from '../../General/Spinner';

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
}));

const getSteps = () => ['Implantación', 'Germinación', 'Floración', 'Corte', 'Secado'];

const StepperPrototype = (props) => {
    const {
        prototypesReducer: {
            prototype: {
                id,
                estado,
            },
            prototype,
            loading_stepper,
        },
        traerDetalleInterval,
        sumarEstadoStepper
    } = props

    const classes = useStyles();
    const steps = getSteps();

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
                        estado: estado + 1
                    };
                    break;

                default:
                    break;
            }
        }
        sumarEstadoStepper(enviarUpdateEstado(estado), id)
        traerDetalleInterval(id)

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
                            <div>
                                <Button variant="contained" className={classes.avanzarButton} color="primary" onClick={handleNext}>
                                    {estado === steps.length - 1 ? 'Terminar' : 'Pasar a ' + steps[estado + 1]}
                                </Button>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

const mapStateToProps = (prototypesReducer) => prototypesReducer

export default connect(mapStateToProps, protoypesActions)(StepperPrototype);