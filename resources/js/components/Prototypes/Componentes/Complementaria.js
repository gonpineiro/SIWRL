import React from 'react';
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import { calcularDiasTotalesParse } from '../../../js/funciones'

const Complementaria = (props) => {

    const {
        prototypesReducer: {
            prototype: {
                fecha_etapa_a,
                fecha_etapa_b,
                fecha_etapa_c,
                fecha_etapa_d,
                fecha_etapa_e,
            },
        }
    } = props

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
                    <h4>Complementaria</h4>
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
                        <td>{fecha_etapa_b ? calcularDiasTotalesParse(fecha_etapa_b, fecha_etapa_a) + ' Dias' : ''}</td>
                    </tr>
                    <tr>
                        <td>Flori</td>
                        <td>{fecha_etapa_c}</td>
                        <td>{fecha_etapa_c ? calcularDiasTotalesParse(fecha_etapa_c, fecha_etapa_b) + ' Dias' : ''}</td>
                    </tr>
                    <tr>
                        <td>Corte</td>
                        <td>{fecha_etapa_d}</td>
                        <td>{fecha_etapa_d ? calcularDiasTotalesParse(fecha_etapa_d, fecha_etapa_c) + ' Dias' : ''}</td>
                    </tr>
                    <tr>
                        <td>Frasco</td>
                        <td>{fecha_etapa_e}</td>
                        <td>{fecha_etapa_e ? calcularDiasTotalesParse(fecha_etapa_e, fecha_etapa_d) + ' Dias' : ''}</td>
                    </tr>
                </tbody>
            </table>
        </FormControl>
    );
}

const mapStateToProps = (prototypesReducer) => prototypesReducer

export default connect(mapStateToProps)(Complementaria);