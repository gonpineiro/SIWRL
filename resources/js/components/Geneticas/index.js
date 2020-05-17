import React, { Component } from 'react';
import { connect } from 'react-redux'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
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

		return <Table goBack={ goBack }/>
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

const mapStateToProps = ({ geneticasReducer, marcasReducer }) => {
	return { geneticasReducer, marcasReducer };
};

const mapDispatchToProps = {
	geneticasActions,
	marcasTraerTodos,
	genericasTraerTodos

};

export default connect(mapStateToProps, mapDispatchToProps)(Geneticas);
