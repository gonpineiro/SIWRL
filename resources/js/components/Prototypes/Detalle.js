import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import "react-sweet-progress/lib/style.css";
import Spinner from '../General/Spinner';
import Basico from './Componentes/Basico';
import Complementaria from './Componentes/Complementaria';
import Final from './Componentes/Final';
import Informacion from './Componentes/Informacion';
import StepperPrototype from './General/StepperPrototype'
import ChartJs from './General/ChartJs';

import * as protoypesActions from '../../actions/protoypesActions'

const { traerDetalleInterval, cancelar, traerTodosMonitors } = protoypesActions

const Detalle = (props) => {

    const {
        cancelar,
        traerDetalleInterval,
        traerTodosMonitors,
        prototypesReducer: {
            prototype: { id },
            prototype,
            loading,
            monitors,
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

    const getDataToChart = () => {
        const arrayTemp = []

        Object.keys(monitors).map((monitorKey, key) => {
            arrayTemp.push({
                x: key,
                y: monitors[monitorKey].temp,
            })
        })
        return arrayTemp
    }


    const arrayHume = []

    Object.keys(monitors).map((monitorKey, key) => {
        arrayHume.push({
            x: key,
            y: monitors[monitorKey].hume,
        })
    })

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
                    <div className="card transparent">
                        <ChartJs
                            title='Temperatura'
                            axisY='Temperatura (C°)'
                            xValueFormatString="Hace ## Horas"
                            array={getDataToChart()}
                        />
                    </div>
                </div>
            </div>

        </div>

    );
}

const mapStateToProps = (prototypesReducer) => prototypesReducer

const mapDispatchToProps = {
    cancelar,
    traerDetalleInterval,
    traerTodosMonitors
};

export default connect(mapStateToProps, mapDispatchToProps)(Detalle);