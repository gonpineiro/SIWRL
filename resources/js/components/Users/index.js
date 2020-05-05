import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'

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
		console.log(this.props)
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
									<div className="card-header center">
										Agregar usuario
									</div>
									{this.props.loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{this.props.state_form === 'editar' ?
								<div>
									<div className="card-header center">
										Modificando usuario: {this.props.user.id}
									</div>
									{this.props.loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{this.props.state_form === 'borrar' ?
								<div>
									<div className="card-header center">
										Eliminar siguente usuario
											</div>
									{this.props.loading ? <Spinner /> :
										<div className="card-body">
											<div className="form-row">
												<div className="form-group col-md-12">
													<label>ID</label>
													<input
														value={this.props.user.id}
														className="form-control"
														disabled
													/>
												</div>
												<div className="form-group col-md-12">
													<label>Nombre</label>
													<input
														value={this.props.user.name}
														className="form-control"
														disabled
													/>
												</div>
												<div className="form-group col-md-12">
													<label>Email</label>
													<input
														value={this.props.user.email}
														className="form-control"
														disabled
													/>
												</div>
												<button
													className="btn btn-dark"
													onClick={() => this.props.borrar(this.props.user.id)}
												>
													Eliminar
                  								</button>
												<button
													className="btn btn-danger btn-cancelar"
													onClick={this.props.cancelar}
												>
													Cancelar
                  								</button>
											</div>
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
