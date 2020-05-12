import React, { Component } from 'react';
import { connect } from 'react-redux'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Table from './Table'
import Formulario from './Formulario'
import Delete from './Delete'
import Spinner from '../General/Spinner';

import * as sensorsActions from '../../actions/sensorsActions'

import * as ambientesActions from '../../actions/ambientesActions'

const { traerTodos: ambientesTraerTodos } = ambientesActions;
const { traerTodosPorAmbiente: sensorstraerTodosPorAmbiente } = sensorsActions;

class Sensors extends Component {

	async componentDidMount() {
		const {
			sensorsReducer: { sensors_ambiente },
			ambientesReducer: { ambientes },
			match: { params: { id: ambiente_id } },
			sensorstraerTodosPorAmbiente,
			ambientesTraerTodos
		} = this.props

		if (!sensors_ambiente.length) sensorstraerTodosPorAmbiente(ambiente_id)

		if (!ambientes.length) ambientesTraerTodos()
	}

	ponerContenido = () => {
		const {
			sensorstraerTodosPorAmbiente,
			sensorsReducer: {
				sensor: { ambiente_id },
				recargar_table,
				loading,
				sensors,
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

		if (loading && !sensors.length) return <Spinner />

		if (error) return 'Error'

		return <Table />
	}
	ponerFormulario = () => <Formulario getId={this.props.match.params.id} />

	render() {
		const {
			sensorsReducer: { loading, state_form },
			history: { goBack } } = this.props
		return (
			<div className="container col-md-9">
				<div className="row mt-2">
					<div className="col col-md-8">
						<div>
							<div className="row mt-2">
								<div className="col col-md-6">
									<h4 className="title-table">Lista de sensores</h4>
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
								{loading ? <Spinner /> :
									<div>
										{state_form === 'crear' ? <div className="card-header card-agregar">Agregar sensor</div> : ''}
										{state_form === 'editar' ? <div className="card-header card-agregar">Modificando sensor</div> : ''}
										{state_form === 'borrar' ? <div className="card-header card-agregar">Eliminar sensor</div> : ''}
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
	ambientesTraerTodos,
	sensorstraerTodosPorAmbiente
};

export default connect(mapStateToProps, mapDispatchToProps)(Sensors);
