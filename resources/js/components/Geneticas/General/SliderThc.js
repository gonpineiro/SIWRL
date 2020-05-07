import React from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

import * as geneticasActions from '../../../actions/geneticasActions'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  input: {
    width: 42,
  },
});

const InputSlider = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {

    props.cambioGeneticaThc(newValue)
    setValue(newValue);

  };

  const handleInputChange = (event) => {
    console.log(Number(event.target.value))
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>     

      <div className="form-row">
        <div className="form-group col-md-10">
          <label >THC</label>
          <Slider
            value={typeof value === 'number' ? props.thc || value : 0}
            onChange={handleSliderChange}
          />
        </div>
        <div className="form-group col-md-2">
          <label ></label>
          <Input
            className={classes.input}
            value={props.thc || value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />          
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (reducers) => {
  return reducers.geneticasReducer
}

export default connect(mapStateToProps, geneticasActions)(InputSlider);

