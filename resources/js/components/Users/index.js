import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'

class Users extends Component {

	async componentDidMount() {
		const {
			traerTodos,
		} = this.props

		if (!this.props.users.length) {
			traerTodos()			
		}
	}

	ponerContenido = () => {
		if (this.props.loading) {
			return 'Loading'
		}

		if (this.props.error) {
			return 'Error'
		}		

		//return <Table />
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<h1>Users</h1>
				{this.ponerContenido()}
			</div>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Users);
