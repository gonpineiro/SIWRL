import React, { Component } from 'react';
import { connect } from 'react-redux'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Table from './Table'
import Formulario from './Formulario'
import Delete from './Delete'
import Spinner from '../General/Spinner';

import * as sensorsActions from '../../actions/sensorsActions'

import * as ambientesActions from '../../actions/ambientesActions'

const { traerTodos: ambientesTraerTodos, traerUno: ambientesTraerUno } = ambientesActions;
const { traerTodosPorAmbiente: sensorstraerTodosPorAmbiente } = sensorsActions;

class Sensors extends Component {

	async componentDidMount() {
		const {
			sensorsReducer: { sensors_ambiente },
			ambientesReducer: { ambientes, ambiente },
			match: { params: { id: ambiente_id } },
			ambientesTraerUno,
			sensorstraerTodosPorAmbiente,
			ambientesTraerTodos
		} = this.props

		if (!sensors_ambiente.length) sensorstraerTodosPorAmbiente(ambiente_id)

		if (!ambientes.length) ambientesTraerTodos()

		if (!ambiente.length) ambientesTraerUno(ambiente_id)
	}

	ponerContenido = () => {
		const {
			sensorstraerTodosPorAmbiente,
			ambientesReducer: {
				ambiente
			},
			sensorsReducer: {
				sensor: { ambiente_id },
				recargar_table,
				loading,
				sensors_ambiente,
				error
			},
			match: { params: { id: getId } }
		} = this.props

		if (recargar_table) {
			if (ambiente_id) {
				sensorstraerTodosPorAmbiente(ambiente_id)
			} else {
				sensorstraerTodosPorAmbiente(getId)
			}
		}

		if (loading && !sensors_ambiente.length) return <Spinner />

		if (error) return 'Error'

		return <Table />
	}
	ponerFormulario = () => <Formulario getId={this.props.match.params.id} />

	render() {
		const {
			ambientesReducer: {
				ambiente
			},
			sensorsReducer: {
				loading,
				state_form,
				sensors_ambiente
			},
			history: { goBack }
		} = this.props

		return (
			<div className="container col-md-9">
				<div className="row mt-2">
					<div className="col col-md-8">
						<div>
							<div className="row mt-2">
								<div className="col col-md-6">
									<h4 className="title-table">Lista de sensores en: {ambiente.name}</h4>
								</div>
								<div className="col col-md-6 text-derecha">
									<KeyboardReturnIcon fontSize="large" onClick={goBack} />
								</div>
							</div>
							{this.ponerContenido()}
						</div>
					</div>
					<div className="col col-md-4">
						<div className="card">
							<div>
								{loading || !ambiente.inputs ? <Spinner /> :
									<div>
										<div className="card-header">
											<div className="row mt-2">
												<div className="col col-md-6 card-agregar" >
													{state_form === 'crear' ? 'AGREGAR SENSOR' : ''}
													{state_form === 'editar' ? 'MODIFICAR SENSOR' : ''}
													{state_form === 'borrar' ? 'ELIMINAR SENSOR' : ''}
												</div>
												<div
													className={(ambiente.sensors.length >= ambiente.inputs) ? 
														"col col-md-6 center color-alert" : "col col-md-6 center"}
												>
													{sensors_ambiente ? sensors_ambiente.length + " / " + ambiente.inputs : ''}
												</div>
											</div>
										</div>
										<div className="card-body">
											{this.ponerFormulario()}
										</div>
									</div>}

							</div>

						</div>
					</div>

				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ sensorsReducer, ambientesReducer }) => {
	return { sensorsReducer, ambientesReducer };
}

const mapDispatchToProps = {
	ambientesTraerUno,
	ambientesTraerTodos,
	sensorstraerTodosPorAmbiente
};

export default connect(mapStateToProps, mapDispatchToProps)(Sensors);
