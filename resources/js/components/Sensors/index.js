import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';

import * as sensorsActions from '../../actions/sensorsActions'
import * as ambientesActions from '../../actions/ambientesActions'

const { 
	traerTodos: ambientesTraerTodos, 
	traerUno: ambientesTraerUno,
	cancelar: ambientesCancelar 
} = ambientesActions;

const { 
	traerTodosPorAmbiente: sensorstraerTodosPorAmbiente,
	cancelar: sensorsCancelar
} = sensorsActions;

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

	componentWillUnmount(){
		const { ambientesCancelar, sensorsCancelar } = this.props
		sensorsCancelar()
		ambientesCancelar()
	}

	ponerContenido = () => {
		const {
			sensorstraerTodosPorAmbiente,
			sensorsReducer: {
				sensor: { ambiente_id },
				recargar_table,
				loading,
				sensors_ambiente,
				error
			},
			history: { goBack },
			match: { params: { id: getId } }
		} = this.props

		if (recargar_table) (ambiente_id ? sensorstraerTodosPorAmbiente(ambiente_id) : sensorstraerTodosPorAmbiente(getId))	

		if (loading && !sensors_ambiente.length) return <Spinner />

		if (error) return 'Error'

		return <Table goBack={goBack} />
	}
	ponerFormulario = () => <Formulario getId={this.props.match.params.id} />

	render() {
		return (
			<div className="container col-md-9">
				<div className="row mt-2">
					<div className="col col-md-8">
						{this.ponerContenido()}
					</div>
					<div className="col col-md-4">
						{this.ponerFormulario()}
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
	sensorsCancelar,
	ambientesCancelar,
	ambientesTraerUno,
	ambientesTraerTodos,
	sensorstraerTodosPorAmbiente
};

export default connect(mapStateToProps, mapDispatchToProps)(Sensors);
