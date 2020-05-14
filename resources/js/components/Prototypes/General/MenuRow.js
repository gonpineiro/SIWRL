import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function MenuRow(props) {

  const {
    traerUnoEditar,
    traerUnoEliminar,
    traerUnoDetalle,
    data,
  } = props

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTraerUno = () => {
    setAnchorEl(null);
    traerUnoEditar(data)
  };

  const handleTraerUnoBorrar = () => {
    setAnchorEl(null);
    traerUnoEliminar(data)
  };

  const handleTraerUnoDetalle = () => {
    setAnchorEl(null);
    traerUnoDetalle(data)
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        {data.name}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleTraerUno}>Editar</MenuItem>
        <MenuItem onClick={handleTraerUnoBorrar}>Eliminar</MenuItem>
        <MenuItem onClick={handleTraerUnoDetalle}>Detalle</MenuItem>
      </Menu>
    </div>
  );
}