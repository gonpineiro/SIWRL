import React, { Component } from 'react';
import { connect } from 'react-redux'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';

import * as marcasActions from '../../actions/marcasActions'

class Marcas extends Component {

	async componentDidMount() {
		const { traerTodos, marcas } = this.props
		if (!marcas.length) traerTodos()
	}

	ponerContenido = () => {
		const { traerTodos, recargar_table, loading, marcas, error } = this.props

		if (recargar_table) traerTodos()

		if (loading && !marcas.length) return <Spinner />

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
									<h4>Lista de marcas</h4>
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
													{state_form === 'crear' ? 'AGREGAR MARCA' : ''}
													{state_form === 'editar' ? 'MODIFICAR MARCA' : ''}
													{state_form === 'borrar' ? 'ELIMINAR MARCA' : ''}
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
	return reducers.marcasReducer
}

export default connect(mapStateToProps, marcasActions)(Marcas);
