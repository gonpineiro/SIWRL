import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import "react-sweet-progress/lib/style.css";
import Spinner from '../General/Spinner';
import Basico from './Componentes/Basico';
import Complementaria from './Componentes/Complementaria';
import Final from './Componentes/Final';
import Informacion from './Componentes/Informacion';
import StepperPrototype from './General/StepperPrototype'

import * as protoypesActions from '../../actions/protoypesActions'

const { traerDetalleInterval, cancelar } = protoypesActions

const Detalle = (props) => {

    const {
        cancelar,
        traerDetalleInterval,
        prototypesReducer: {
            prototype,
            loading,
        }
    } = props

    if (loading && !prototype.length) return <Spinner />

    useEffect(() => {
        const intervalPrototype = setInterval(() => traerDetalleInterval(prototype.id), 5000)
        return () => {
            clearInterval(intervalPrototype)
            cancelar()
        }
    }, []);

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
                    //
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Detalle);