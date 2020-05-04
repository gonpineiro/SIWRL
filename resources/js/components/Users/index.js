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
		if (this.props.loading) {
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
		//console.log(this.props)
		return (
			<div className="container">
				<div className="row mt-2">
					<div className="col col-md-8">					
						<div>
							<h1>Users</h1>
							{this.ponerContenido()}
						</div>
					</div>
					<div className="col col-md-4">					
						<div>							
							<div className="card">
								<div className="card-header">Agregar Usuario</div>
								<div className="card-body">
									{this.ponerFormulario()}
								</div>
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
