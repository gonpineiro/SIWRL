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
		const { 
			traerTodos, recargar_table, loading, users, error, 
			history: { goBack } 
		} = this.props

		if (recargar_table) traerTodos()

		if (loading && !users.length) return <Spinner />

		if (error) return 'Error'

		return <Table goBack={goBack} />
	}
	ponerFormulario = () => <Formulario />

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

const mapStateToProps = (reducers) => {
	return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Users);
