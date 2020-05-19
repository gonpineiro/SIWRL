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

const { 
    traerDetalleInterval, 
    cancelar, 
    traerTodosMonitors, 
    cambiarChartTemp, 
    traerTodosMonitorsInterval 
} = protoypesActions

const Detalle = (props) => {

    const {
        cancelar,
        traerDetalleInterval,
        traerTodosMonitorsInterval,
        traerTodosMonitors,
        cambiarChartTemp,
        prototypesReducer: {
            prototype: {
                id,
                sensor,
            },
            prototype,
            loading,
            loading_chart,
            monitors,
            state_chart,
        }
    } = props

    if (loading && !prototype.length) return <Spinner />
    
    useEffect(() => {
        traerTodosMonitors(id, sensor.output)
        const intervalPrototype = setInterval(() => traerDetalleInterval(id), 5000)
        const intervalMonitor = setInterval(() => traerTodosMonitorsInterval(id, sensor.output), 20000)
        return () => {
            clearInterval(intervalPrototype)
            clearInterval(intervalMonitor)
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

            case 'tierra':
                const arrayTierra = []
                Object.keys(monitors).map((monitorKey, key) => {
                    arrayTierra.push({
                        x: key,
                        y: monitors[monitorKey].tierra,
                    })
                })

                return arrayTierra

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
                    {loading_chart ? <Spinner /> : 
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
                            <Button
                                variant="contained"
                                onClick={() => handleCambiarChart('tierra')}
                                disabled={state_chart === 'tierra'}
                            >
                                Tierra
                                </Button>
                        </div>
                        <ChartJs
                            title={state_chart === 'temp' ? 
                            'Temperatura' : state_chart === 'hume' ? 
                            'Humedad' : 'Humedad Tierra'}                            
                            min={0}
                            max={state_chart === 'temp' ? 50 : 100}
                            axisY={state_chart === 'temp' ? 'Temperatura (C°)' : 'Humedad (%)'}
                            xValueFormatString="Hace ## Horas"
                            array={getDataToChart(state_chart)}
                        />
                    </div>}
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (prototypesReducer) => prototypesReducer

const mapDispatchToProps = {
    traerTodosMonitorsInterval,
    cambiarChartTemp,
    cancelar,
    traerDetalleInterval,
    traerTodosMonitors
};

export default connect(mapStateToProps, mapDispatchToProps)(Detalle);