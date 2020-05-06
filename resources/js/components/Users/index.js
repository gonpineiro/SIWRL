import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Delete from './Delete'

import * as usersActions from '../../actions/usersActions'

import Spinner from '../General/Spinner';

class Users extends Component {

	async componentDidMount() {
		const {
			traerTodos,
		} = this.props

		if (!this.props.users.length) {
			traerTodos()
		}
	}

	ponerContenido = () => {
		const {
			traerTodos,
		} = this.props

		if (this.props.recargar_table) {
			traerTodos()
		}

		if (this.props.loading && !this.props.users.length) {
			return <Spinner />
		}

		if (this.props.error) {
			return 'Error'
		}

		return <Table />
	}
	ponerFormulario = () => {
		return <Formulario />
	}



	render() {
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

							{this.props.state_form === 'crear' ?
								<div>
									<div className="card-header card-agregar">
										Agregar usuario
									</div>
									{this.props.loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{this.props.state_form === 'editar' ?
								<div>
									<div className="card-header card-agregar">
										Modificando usuario: {this.props.user.id}
									</div>
									{this.props.loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{this.props.state_form === 'borrar' ?
								<div>
									<div className="card-header card-eliminar">
										Eliminar siguente usuario
											</div>
									{this.props.loading ? <Spinner /> :
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
