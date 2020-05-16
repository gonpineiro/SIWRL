import React from 'react';
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { red, indigo, brown } from '@material-ui/core/colors';

import { traerValorSensor } from '../../../js/funciones'

const Informacion = (props) => {

    const {
        prototypesReducer: {
            prototype: {
                sensor,
                ambiente,
            },
            prototype
        }
    } = props

    const useStyles = makeStyles((theme) => ({

        avatars: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
            justifyContent: "center"
        },

        temp: {
            color: theme.palette.getContrastText(red[900]),
            backgroundColor: red[900],
            width: theme.spacing(15),
            height: theme.spacing(15), brown
        },

        hume: {
            color: theme.palette.getContrastText(indigo[500]),
            backgroundColor: indigo[500],
            width: theme.spacing(15),
            height: theme.spacing(15),
        },

        tierra: {
            color: theme.palette.getContrastText(brown[500]),
            backgroundColor: brown[500],
            width: theme.spacing(15),
            height: theme.spacing(15),
        },

    }));

    const classes = useStyles();
    
    return (
        <div className="row mt-2">
            <div className="col col-md-6">
                <div className="card">
                    <div className={classes.avatars}>
                        <Avatar alt="Remy Sharp" className={classes.temp} >
                            <div className="avatar">
                                {ambiente.monitors.length ? ambiente.monitors[ambiente.monitors.length - 1].temp + 'C°' : ''}
                            </div>
                        </Avatar>
                        <Avatar alt="Travis Howard" className={classes.hume} >
                            <div className="avatar">
                                {ambiente.monitors.length ? ambiente.monitors[ambiente.monitors.length - 1].hume + '%' : ''}
                            </div>
                        </Avatar>
                        <Avatar alt="Cindy Baker" className={classes.tierra} >
                            <div className="avatar">
                                {ambiente.monitors.length && sensor ? traerValorSensor(prototype) + '%' : ''}
                            </div>
                        </Avatar>
                    </div>
                </div>
            </div>
            <div className="col col-md-6">
                <div className="card">
                    <div className={classes.avatars}>
                        <Avatar alt="Remy Sharp" className={classes.temp} >
                            <div className="avatar">
                                {
                                    ambiente.monitors.length ?
                                        (ambiente.monitors[ambiente.monitors.length - 1].estado === 0 || ambiente.monitors[ambiente.monitors.length - 1].estado === 2 ? 'P' : 'A')
                                        : ''
                                }
                            </div>
                        </Avatar>
                        <Avatar alt="Travis Howard" className={classes.hume} >
                            <div className="avatar">
                                {ambiente.monitors.length ? ambiente.monitors[ambiente.monitors.length - 1].horas_luz : ''}
                            </div>
                        </Avatar>
                        <Avatar alt="Cindy Baker" className={classes.tierra} >
                            <div className="avatar">
                                {
                                    ambiente.monitors.length ?
                                        (ambiente.monitors[ambiente.monitors.length - 1].estado === 1 || ambiente.monitors[ambiente.monitors.length - 1].estado === 3 ? 'C' : 'F')
                                        : ''
                                }
                            </div>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = (prototypesReducer) => prototypesReducer

export default connect(mapStateToProps)(Informacion);