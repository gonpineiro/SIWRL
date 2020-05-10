import React, { Component } from 'react';
import { connect } from 'react-redux'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Table from './Table'
import Formulario from './Formulario'
import FormularioMarca from '../Marcas/Formulario'
import Delete from './Delete'
import Spinner from '../General/Spinner';

import * as geneticasActions from '../../actions/geneticasActions'

class Geneticas extends Component {

	async componentDidMount() {
		const { traerTodos, geneticas } = this.props

		if (!geneticas.length) traerTodos()
	}

	ponerContenido = () => {
		const {
			traerTodos,
			recargar_table,
			loading,
			geneticas,
			error
		} = this.props

		if (recargar_table) traerTodos()

		if (loading && !geneticas.length) return <Spinner />

		if (error) return 'Error'

		return <Table />
	}

	ponerFormulario = () => <Formulario />

	ponerFormularioMarca = () => <FormularioMarca />

	render() {
		const { loading, state_form, genetica, history: { goBack } } = this.props

		return (
			<div className="container col-md-9">
				<div className="row mt-2">
					<div className="col col-md-8">
						<div>
							<h4>Lista de genéticas</h4>
							{this.ponerContenido()}
						</div>
					</div>
					<div className="col col-md-4">
						<div className="card">

							{state_form === 'crear' ?
								<div>
									<div className="card-header card-agregar">
										Agregar genética<KeyboardReturnIcon fontSize="small" onClick={ goBack }/>
									</div>
									{loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{state_form === 'editar' ?
								<div>
									<div className="card-header card-agregar">
										Modificando genetica: {genetica.id}
									</div>
									{loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{state_form === 'crear-marca' ?
								<div>
									<div className="card-header card-agregar">
										Agregar marca
									</div>
									{loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormularioMarca()}
										</div>}
								</div> : ''}

							{state_form === 'borrar' ?
								<div>
									<div className="card-header card-eliminar">
										Eliminar la siguente genética
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
	return reducers.geneticasReducer;
};

export default connect(mapStateToProps, geneticasActions)(Geneticas);
