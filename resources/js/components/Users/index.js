import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Delete from './Delete'

import * as usersActions from '../../actions/usersActions'

import Spinner from '../General/Spinner';

class Users extends Component {

	async componentDidMount() {
		const { traerTodos, users} = this.props

		if (!users.length) traerTodos()
	}

	ponerContenido = () => {
		const { traerTodos, recargar_table, loading, users, error} = this.props

		if (recargar_table) traerTodos()

		if (loading && !users.length) return <Spinner />

		if (error) return 'Error'

		return <Table />
	}
	ponerFormulario = () => <Formulario />

	render() {
		const { user, state_form, loading } = this.props

		return (
			<div className="container">
				<div className="row mt-2">
					<div className="col col-md-8">
						<div>
							<h4>Lista de usuarios</h4>
							{this.ponerContenido()}
						</div>
					</div>

					<div className="col col-md-4">

						<div className="card">
							{state_form === 'crear' ?
								<div>
									<div className="card-header card-agregar">
										Agregar usuario
									</div>
									{loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{state_form === 'editar' ?
								<div>
									<div className="card-header card-agregar">
										Modificando usuario: {user.id}
									</div>
									{loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{state_form === 'borrar' ?
								<div>
									<div className="card-header card-eliminar">
										Eliminar siguente usuario
											</div>
									{loading ? <Spinner /> :
										<div className="card-body">
											<Delete />
										</div>}
								</div> : ''}

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
