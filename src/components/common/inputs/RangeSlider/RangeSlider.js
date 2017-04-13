import React, { PropTypes } from 'react';
import Slider from 'react-rangeslider';
import './range.css';

const formatkm = value => value + ' km';

const RangeSlider = ({ input }) =>
  <Slider
    min={ 5 }
    max={ 100 }
    step={ 1 }
    format={ formatkm }
    orientation="horizontal"
    { ...input }
  />;

RangeSlider.propTypes = {
  input: PropTypes.object,
};

export default RangeSlider;
