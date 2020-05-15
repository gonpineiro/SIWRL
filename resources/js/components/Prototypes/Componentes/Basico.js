import React from 'react';
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import * as protoypesActions from '../../../actions/protoypesActions'

const Basico = (props) => {

    const {
        traerTabla,
        prototypesReducer: {
            prototype: {
                name,
                genetica: {
                    name: genetica_name,
                    thc,
                    cbd,
                    tiempo_flora,
                    sabores,
                    marca: {
                        name: marca_name
                    }
                },
                
            }
        }
    } = props

    const volver = () => traerTabla()

    const useStyles = makeStyles((theme) => ({

        formControl: {
            margin: theme.spacing(1),
            marginBottom: 35,
            width: "90%"
        },
    }));

    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <div className="row mt-2">
                <div className="col col-md-8">
                    <h4>Básica</h4>
                </div>
                <div className="col col-md-4 text-derecha">
                    <KeyboardReturnIcon fontSize="large" onClick={volver} />
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
                        <td>Sabones:</td>
                        <td>{sabores}</td>
                    </tr>
                </tbody>
            </table>
        </FormControl>
    );
}

const mapStateToProps = (prototypesReducer) => prototypesReducer

export default connect(mapStateToProps, protoypesActions)(Basico);