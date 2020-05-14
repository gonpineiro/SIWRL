import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function MenuRow(props) {
  
    const {
        props: {
            traerUno,
            traerUnoBorrar
        },
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
    traerUno(data.id)
  };

  const handleTraerUnoBorrar = () => {
    setAnchorEl(null);
    traerUnoBorrar(data.id)
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
      </Menu>
    </div>
  );
}