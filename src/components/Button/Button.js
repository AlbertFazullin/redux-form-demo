import React, { Component, PropTypes } from 'react';
import classnames from 'classnames/bind';
import s from './button.pcss';

const cx = classnames.bind(s);

export default class Button extends Component {
  static propTypes = {
    color: PropTypes.string,
  };

  constructor (props) {
    super(props);
  }

  render () {
    const { color } = this.props;
    const button = cx(color, { button: true });
    return (
      <button className={ button }>{ this.props.children }</button>
    );
  }
}
