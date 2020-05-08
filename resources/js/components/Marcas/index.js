import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Delete from './Delete'

import * as marcasActions from '../../actions/marcasActions'
import Spinner from '../General/Spinner';

class Marcas extends Component {

	async componentDidMount() {
		const { traerTodos, marcas } = this.props

		if (!marcas.length) traerTodos()
	}

	ponerContenido = () => {
		const { traerTodos, recargar_table, loading, marcas, error } = this.props

		if (recargar_table) traerTodos()

		if (loading && !marcas.length) return <Spinner />

		if (error) return 'Error'

		return <Table />
	}
	ponerFormulario = () => <Formulario />

	render() {
		const { state_form, loading, marca } = this.props

		return (
			<div className="container col-md-9">
				<div className="row mt-2">
					<div className="col col-md-8">
						<div>
							<h4>Lista de marcas</h4>
							{this.ponerContenido()}
						</div>
					</div>
					<div className="col col-md-4">
						<div className="card">

							{state_form === 'crear' ?
								<div>
									<div className="card-header card-agregar">
										Agregar marca
									</div>
									{loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{state_form === 'editar' ?
								<div>
									<div className="card-header card-agregar">
										Modificando usuario: {marca.id}
									</div>
									{loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{state_form === 'borrar' ?
								<div>
									<div className="card-header card-eliminar">
										Eliminar la siguente marca
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
	return reducers.marcasReducer
}

export default connect(mapStateToProps, marcasActions)(Marcas);
