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
			geneticasReducer: { geneticas, recargar_table },
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
			}
		} = this.props

		if (recargar_table) genericasTraerTodos()

		if (loading && !geneticas.length) return <Spinner />

		if (error) return 'Error'

		return <Table />
	}

	ponerFormulario = () => <Formulario />

	render() {
		const {
			geneticasReducer: {
				loading,
				state_form,
			},
			history: { goBack }
		} = this.props

		return (
			<div className="container col-md-9">
				<div className="row mt-2">
				<div className="col col-md-8">
						<div>
							<div className="row mt-2">
								<div className="col col-md-6">
									<h4>Lista de genéticas</h4>
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
								{loading ? <Spinner /> :
									<div>
										{state_form === 'crear' ? <div className="card-header card-agregar">Agregar genética</div> : ''}
										{state_form === 'editar' ? <div className="card-header card-agregar">Modificando genética</div> : ''}
										{state_form === 'borrar' ? <div className="card-header card-agregar">Eliminar genética</div> : ''}
										<div className="card-body">
											{this.ponerFormulario()}
										</div>
									</div>}

							</div>

						</div>
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
