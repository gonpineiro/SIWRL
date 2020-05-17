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
		const { traerTodos, recargar_table, loading, ambientes, error, history: { goBack } } = this.props

		if (recargar_table) traerTodos()

		if (loading && !ambientes.length) return <Spinner />

		if (error) return 'Error'

		return <Table goBack={goBack} />
	}
	ponerFormulario = () => <Formulario />

	render() {
		const { } = this.props
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
	return reducers.ambientesReducer
}

export default connect(mapStateToProps, ambientesActions)(Ambientes);
