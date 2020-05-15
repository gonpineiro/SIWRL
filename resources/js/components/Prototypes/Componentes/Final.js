import React from 'react';
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import { calcularDiasTotales, calcularPorcentaje, calcularDiasTotalesParse } from '../../../js/funciones'

const Final = (props) => {

    const {
        prototypesReducer: {
            prototype: {
                genetica: {
                    tiempo_flora,
                },
                fecha_etapa_a,
                fecha_etapa_e,
                cantidad,
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
                        <td>Dias Estipulados:</td>
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
                        "success" : ""
                }
            />
        </FormControl>
    );
}

const mapStateToProps = (prototypesReducer) => prototypesReducer

export default connect(mapStateToProps)(Final);