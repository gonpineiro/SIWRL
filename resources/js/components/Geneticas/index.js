import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';

import * as geneticasActions from '../../actions/geneticasActions'
import * as marcasActions from '../../actions/marcasActions'

const { traerTodos: marcasTraerTodos } = marcasActions
const { traerTodos: genericasTraerTodos } = geneticasActions

class Geneticas extends Component {

	async componentDidMount() {
		const {
			geneticasReducer: { geneticas },
			marcasReducer: { marcas },
			genericasTraerTodos,
			marcasTraerTodos,
		} = this.props

		if (!geneticas.length) genericasTraerTodos()
		if (!marcas.length) marcasTraerTodos()
	}

	ponerContenido = () => {
		const {
			genericasTraerTodos,
			geneticasReducer: {
				recargar_table,
				loading,
				geneticas,
				error
			},
			history: { goBack }
		} = this.props

		if (recargar_table) genericasTraerTodos()

		if (loading && !geneticas.length) return <Spinner />

		if (error) return 'Error'

		return <Table goBack={goBack} />
	}

	ponerFormulario = () => <Formulario goBack={this.props.history.goBack} />

	render() {
		const {
			geneticasReducer: {
				state_form,
			},
		} = this.props

		return (
			<div className="container col-md-12">
				<div className="row mt-2 center">

					{state_form === 'tabla' ?
						<div className="col col-md-10">
							{this.ponerContenido()}
						</div> : ''}

					{state_form === 'crear' || state_form === 'editar' || state_form === 'borrar' ?
						<div className="col col-md-6">
							{this.ponerFormulario()}
						</div> : ''}

				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ geneticasReducer, marcasReducer }) => {
	return { geneticasReducer, marcasReducer };
};

const mapDispatchToProps = {
	geneticasActions,
	marcasTraerTodos,
	genericasTraerTodos

};

export default connect(mapStateToProps, mapDispatchToProps)(Geneticas);
