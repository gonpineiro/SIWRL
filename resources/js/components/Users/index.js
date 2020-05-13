import React, { Component } from 'react';
import { connect } from 'react-redux'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';

import * as usersActions from '../../actions/usersActions'


class Users extends Component {

	async componentDidMount() {
		const { traerTodos, users } = this.props

		if (!users.length) traerTodos()
	}

	ponerContenido = () => {
		const { traerTodos, recargar_table, loading, users, error } = this.props

		if (recargar_table) traerTodos()

		if (loading && !users.length) return <Spinner />

		if (error) return 'Error'

		return <Table />
	}
	ponerFormulario = () => <Formulario />

	render() {
		const { state_form, loading, user, history: { goBack } } = this.props

		return (
			<div className="container col-md-9">
				<div className="row mt-2">
					<div className="col col-md-8">
						<div>
							<div className="row mt-2">
								<div className="col col-md-6">
									<h4 className="title-table">Lista de usuarios</h4>
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
								<div className="card-header">
									<div className="row mt-2">
										<div className="col col-md-6 card-agregar" >
											{state_form === 'crear' ? 'AGREGAR USUARIO' : ''}
											{state_form === 'editar' ? 'MODIFICAR USUARIO' : ''}
											{state_form === 'borrar' ? 'ELIMINAR USUARIO' : ''}
										</div>
										<div className="col col-md-6 center">

										</div>
									</div>
								</div>
								{loading ? <Spinner /> :
									<div className="card-body">
										{this.ponerFormulario()}
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
	return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Users);
