import React from 'react';
import { connect } from 'react-redux'
import "react-sweet-progress/lib/style.css";
import Spinner from '../General/Spinner';
import Basico from './Componentes/Basico';
import Complementaria from './Componentes/Complementaria';
import Final from './Componentes/Final';

import * as protoypesActions from '../../actions/protoypesActions'
import Informacion from './Componentes/Informacion';

const Detalle = (props) => {
    
    const {
        prototypesReducer: {
            prototype,
            loading,
        }
    } = props
    
    if (loading && !prototype.length) return <Spinner />

    return (
        <div className="container col-md-9">

            <div className="row mt-2">
                <div className="col col-md-4">
                    <div className="card">
                        <Basico/>
                    </div>
                </div>

                <div className="col col-md-8">
                    <div className="card">
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

const mapStateToProps = (prototypesReducer) => prototypesReducer

export default connect(mapStateToProps, protoypesActions)(Detalle);