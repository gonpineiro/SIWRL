import React from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

import * as geneticasActions from '../../../actions/geneticasActions'

const useStyles = makeStyles({
  root: {
    width: "100%",    
    height: 50
  },
  input: {
    width: "100%", 
    marginLeft: 10,
  },
});

const InputSlider = (props) => {
  const classes = useStyles();
  const { cambioGeneticaCbd, genetica: { cbd }, state_form } = props

  const [value, setValue] = React.useState(cbd);

  const handleSliderChange = (event, newValue) => {
    cambioGeneticaCbd(newValue)
    setValue(newValue);
  };

  const handleInputChange = (event) => {
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
          <label >CBD</label>
          <Slider
            value={typeof value === 'number' ? value : cbd || 0}
            onChange={handleSliderChange}
          />
        </div>
        <div className="form-group col-md-2">
          <label ></label>
          <Input
            className={classes.input}
            value={state_form ? cbd : value || ''}
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

