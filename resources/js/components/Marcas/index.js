import React, { Component } from 'react';
import { connect } from 'react-redux'
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
		const { 
			traerTodos, recargar_table, loading, marcas, error, 
			history: { goBack } } = this.props

		if (recargar_table) traerTodos()

		if (loading && !marcas.length) return <Spinner />

		if (error) return 'Error'

		return <Table goBack={goBack} />
	}
	ponerFormulario = () => <Formulario goBack={this.props.history.goBack} />

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

const mapStateToProps = (reducers) => reducers.marcasReducer

export default connect(mapStateToProps, marcasActions)(Marcas);