import React, { Component } from 'react';
import { connect } from 'react-redux'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Table from './Table'
import Formulario from './Formulario'
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
			}
		} = this.props

		if (recargar_table) prototypesTraerTodos()

		if (loading && !prototypes.length) return <Spinner />

		if (error) return 'Error'

		return <Table />
	}
	ponerFormulario = () => <Formulario />

	render() {
		const {
			prototypesReducer: {
				state_form,
				loading,
				prototype,
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
									<h4>Lista de prototipos</h4>
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
										<div className="card-header">
											<div className="row mt-2">
												<div className="col col-md-6 card-agregar" >
													{state_form === 'crear' ? 'AGREGAR PROTOTIPO' : ''}
													{state_form === 'editar' ? 'MODIFICAR PROTOTIPO' : ''}
													{state_form === 'borrar' ? 'ELIMINAR PROTOTIPO' : ''}
												</div>
												<div className="col col-md-6 center">

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

const mapStateToProps = ({ prototypesReducer, geneticasReducer, ambientesReducer, sensorsReducer }) => {
	return { prototypesReducer, geneticasReducer, ambientesReducer, sensorsReducer };
};

const mapDispatchToProps = {
	geneticasTraerTodos,
	ambientesTraerTodos,
	prototypesTraerTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(Prototypes);
