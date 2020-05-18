import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import "react-sweet-progress/lib/style.css";
import Spinner from '../General/Spinner';
import Basico from './Componentes/Basico';
import Complementaria from './Componentes/Complementaria';
import Final from './Componentes/Final';
import Informacion from './Componentes/Informacion';
import StepperPrototype from './General/StepperPrototype'
import ChartJs from './General/ChartJs';
import Button from '@material-ui/core/Button';

import * as protoypesActions from '../../actions/protoypesActions'

const { traerDetalleInterval, cancelar, traerTodosMonitors, cambiarChartTemp } = protoypesActions

const Detalle = (props) => {

    const {
        cancelar,
        traerDetalleInterval,
        traerTodosMonitors,
        cambiarChartTemp,
        prototypesReducer: {
            prototype: { id },
            prototype,
            loading,
            monitors,
            state_chart,
        }
    } = props

    if (loading && !prototype.length) return <Spinner />

    useEffect(() => {
        traerTodosMonitors(id, 'temp')
        const intervalPrototype = setInterval(() => traerDetalleInterval(id), 5000)
        return () => {
            clearInterval(intervalPrototype)
            cancelar()
        }
    }, []);

    const getDataToChart = (state_chart) => {

        switch (state_chart) {
            case 'temp':
                const arrayTemp = []
                Object.keys(monitors).map((monitorKey, key) => {
                    arrayTemp.push({
                        x: key,
                        y: monitors[monitorKey].temp,
                    })
                })
                return arrayTemp

            case 'hume':
                const arrayHume = []
                Object.keys(monitors).map((monitorKey, key) => {
                    arrayHume.push({
                        x: key,
                        y: monitors[monitorKey].hume,
                    })
                })

                return arrayHume

            default:
                break;
        }


    }

    const handleCambiarChart = (state_chart) => cambiarChartTemp(state_chart)

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="container col-md-9">

            <div className="row mt-2">
                <div className="col col-md-4">
                    <div className="card transparent">
                        <Basico />
                    </div>
                </div>

                <div className="col col-md-8">
                    <div className="card transparent">
                        <div className="row">
                            <div className="col col-md-7">
                                <Complementaria />
                            </div>

                            <div className="col col-md-5">
                                <Final />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Informacion />

            <div className="row mt-2">
                <div className="col col-md-12">
                    <div className="card transparent">
                        <StepperPrototype />
                    </div>
                </div>
            </div>


            <div className="row mt-2">
                <div className="col col-md-12">
                    <div className="card transparent center">
                        <div className={classes.root}>
                            <Button
                                variant="contained"
                                onClick={() => handleCambiarChart('temp')}
                                disabled={state_chart === 'temp'}
                            >
                                Temperatura
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => handleCambiarChart('hume')}
                                disabled={state_chart === 'hume'}
                            >
                                Humedad
                                </Button>
                            <Button variant="contained" onClick={() => handleCambiarChart('hume')}>Tierra</Button>
                        </div>
                        <ChartJs
                            title='Temperatura'
                            min={0}
                            max={state_chart === 'temp' ? 50 : 100}
                            axisY={state_chart === 'temp' ? 'Temperatura (C°)' : 'Humedad (%)'}
                            xValueFormatString="Hace ## Horas"
                            array={getDataToChart(state_chart)}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (prototypesReducer) => prototypesReducer

const mapDispatchToProps = {
    cambiarChartTemp,
    cancelar,
    traerDetalleInterval,
    traerTodosMonitors
};

export default connect(mapStateToProps, mapDispatchToProps)(Detalle);