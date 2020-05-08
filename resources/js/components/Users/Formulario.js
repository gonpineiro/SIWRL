import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import * as usersActions from '../../actions/usersActions'

const Formulario = (props) => {

   const {
      form: { id, name, email, password },
      agregar,
      editar,
      cancelar,
      state_form,
      error_form,
      cambioUsuarioName,
      cambioUsuarioEmail,
      cambioUsuarioPassword,
   } = props

   const handleCambioUsuarioName = (event) => cambioUsuarioName(event.target.value);

   const handleCambioUsuarioEmail = (event) => cambioUsuarioEmail(event.target.value);

   const handleCambioUsuarioPassword = (event) => cambioUsuarioPassword(event.target.value);

   const guardar = () => {

      const nuevo_usuario = {
         id: id,
         name: name,
         email: email,
         password: password
      };

      if (state_form === 'crear') agregar(nuevo_usuario);

      if (state_form === 'editar') editar(nuevo_usuario, id)
   };

   const useStyles = makeStyles((theme) => ({
      root: {
         '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: "95%",
         },
      },
   }));

   const classes = useStyles();

   return (
      <form className={classes.root} noValidate autoComplete="off">
         <div className="form-row">

            <div className="form-group col-md-12">
               <TextField
                  id="standard-basic"
                  label="Nombre"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={handleCambioUsuarioName}
                  helperText={error_form.name}
                  error={!error_form.name ? false : true}
               />
            </div>

            <div className="form-group col-md-12">
               <TextField
                  label="Email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={handleCambioUsuarioEmail}
                  helperText={error_form.email}
                  error={!error_form.email ? false : true}
               />
            </div>

            <div className="form-group col-md-12">
               <TextField
                  id="standard-basic"
                  label="Password"
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={handleCambioUsuarioPassword}
                  helperText={error_form.password}
                  error={!error_form.password ? false : true}
               />
            </div>

            <div className="form-row margin-button">
               <div className="form-group col-md-6">
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={guardar}
                  >
                     Guardar
                  </Button>
               </div >

               <div className="form-group col-md-6">
                  {state_form === 'editar'
                     ?
                     <Button
                        variant="contained"
                        color="inherit"
                        onClick={cancelar}
                     >
                        Cancelar
                     </Button> : ''}
               </div >
            </div>

         </div>
      </form>
   );
}

const mapStateToProps = (reducers) => {
   return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Formulario);
