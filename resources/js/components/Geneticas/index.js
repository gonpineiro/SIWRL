import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Delete from './Delete'

import * as marcasActions from '../../actions/marcasActions'
import Spinner from '../General/Spinner';

class Marcas extends Component {

	async componentDidMount() {
		const {
			traerTodos,
		} = this.props

		if (!this.props.marcas.length) {
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

		if (this.props.loading && !this.props.marcas.length) {
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
		return (
			<div className="container">
				<div className="row mt-2">
					<div className="col col-md-8">
						<div>
							<h4>Lista de marcas</h4>
							{this.ponerContenido()}
						</div>
					</div>
					<div className="col col-md-4">
						<div className="card">

							{this.props.state_form === 'crear' ?
								<div>
									<div className="card-header center">
										Agregar marca
									</div>
									{this.props.loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{this.props.state_form === 'editar' ?
								<div>
									<div className="card-header center">
										Modificando usuario: {this.props.marca.id}
									</div>
									{this.props.loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{this.props.state_form === 'borrar' ?
								<div>
									<div className="card-header center">
										Eliminar la siguente marca
									</div>
									{this.props.loading ? <Spinner /> :
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
