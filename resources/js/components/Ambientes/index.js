import React, { Component } from 'react';
import { connect } from 'react-redux'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';

import * as ambientesActions from '../../actions/ambientesActions'

class Ambientes extends Component {

	async componentDidMount() {

		const { traerTodos, ambientes } = this.props

		if (!ambientes.length) traerTodos()
	}

	ponerContenido = () => {
		const { traerTodos, recargar_table, loading, ambientes, error } = this.props

		if (recargar_table) traerTodos()

		if (loading && !ambientes.length) return <Spinner />

		if (error) return 'Error'

		return <Table />
	}
	ponerFormulario = () => <Formulario />

	render() {
		const { state_form, loading, history: { goBack } } = this.props
		return (
			<div className="container col-md-9">
				<div className="row mt-2">
					<div className="col col-md-8">
						<div>
							<div className="row mt-2">
								<div className="col col-md-6">
									<h4>Lista de ambientes</h4>
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
													{state_form === 'crear' ? 'AGREGAR AMBIENTE' : ''}
													{state_form === 'editar' ? 'MODIFICAR AMBIENTE' : ''}
													{state_form === 'borrar' ? 'ELIMINAR AMBIENTE' : ''}
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

const mapStateToProps = (reducers) => {
	return reducers.ambientesReducer
}

export default connect(mapStateToProps, ambientesActions)(Ambientes);
