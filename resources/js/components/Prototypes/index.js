import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Detalle from './Detalle'
import Spinner from '../General/Spinner';

import * as prototypesActions from '../../actions/protoypesActions'

import * as ambientesActions from '../../actions/ambientesActions'
import * as geneticasActions from '../../actions/geneticasActions'

const { traerTodos: geneticasTraerTodos } = geneticasActions;
const { traerTodos: ambientesTraerTodos } = ambientesActions;
const { traerTodos: prototypesTraerTodos } = prototypesActions

class Prototypes extends Component {

	async componentDidMount() {
		const {
			geneticasReducer: { geneticas },
			prototypesReducer: { prototypes },
			ambientesReducer: { ambientes },
			geneticasTraerTodos,
			prototypesTraerTodos,
			ambientesTraerTodos,

		} = this.props

		if (!prototypes.length) prototypesTraerTodos()

		if (!geneticas.length) geneticasTraerTodos()

		if (!ambientes.length) ambientesTraerTodos()
	}

	ponerContenido = () => {
		const {
			prototypesTraerTodos,
			prototypesReducer: {
				recargar_table,
				loading,
				prototypes,
				error
			},
			history: { goBack }
		} = this.props

		if (recargar_table) prototypesTraerTodos()

		if (loading && !prototypes.length) return <Spinner />

		if (error) return 'Error'

		return <Table goBack={goBack} />
	}

	ponerFormulario = () => <Formulario goBack={this.props.history.goBack} />

	detallePrototype = () => <Detalle />

	render() {
		
		const { prototypesReducer: { state_form } } = this.props

		if (state_form != 'detalle') return this.index()

		if (state_form == 'detalle') return this.detallePrototype()
	}

	index = () => {
		const { prototypesReducer: { state_form } } = this.props
		return (
			<div>
				{state_form === 'tabla' ?
					<div className="container col-md-9">
						<div className="row mt-2 center">
							<div className="col col-md-12">
								{this.ponerContenido()}
							</div>
						</div>
					</div>
					: ''}

				{state_form === 'crear' || state_form === 'editar' || state_form === 'borrar' ?

					<div className="container col-md-9">
						<div className="row mt-2">
							<div className="col col-md-8">
								{this.ponerContenido()}
							</div>
							<div className="col col-md-4">
								{this.ponerFormulario()}
							</div>
						</div>
					</div> : ''}
			</div>
		)
	}
}

const mapStateToProps = ({ prototypesReducer, geneticasReducer, ambientesReducer, sensorsReducer }) => {
	return { prototypesReducer, geneticasReducer, ambientesReducer, sensorsReducer };
};

const mapDispatchToProps = {
	geneticasTraerTodos,
	ambientesTraerTodos,
	prototypesTraerTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(Prototypes);
