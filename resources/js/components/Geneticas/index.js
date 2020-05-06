import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Delete from './Delete'
import Spinner from '../General/Spinner';

import * as geneticasActions from '../../actions/geneticasActions'

class Geneticas extends Component {

	async componentDidMount() {
		const {
			traerTodos,
		} = this.props
		
		if (!this.props.geneticas.length) {			
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

		if (this.props.loading && !this.props.geneticas.length) {
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
							<h4>Lista de genéticas</h4>
							{this.ponerContenido()}
						</div>
					</div>
					<div className="col col-md-4">
						<div className="card">

							{this.props.state_form === 'crear' ?
								<div>
									<div className="card-header center">
										Agregar genética
									</div>
									{this.props.loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{this.props.state_form === 'editar' ?
								<div>
									<div className="card-header center">
										Modificando genetica: {this.props.genetica.id}
									</div>
									{this.props.loading ? <Spinner /> :
										<div className="card-body">
											{this.ponerFormulario()}
										</div>}
								</div> : ''}

							{this.props.state_form === 'borrar' ?
								<div>
									<div className="card-header center">
										Eliminar la siguente genética
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
	return reducers.geneticasReducer;
};


export default connect(mapStateToProps, geneticasActions)(Geneticas);
