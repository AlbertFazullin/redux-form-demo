import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userActions from '../../../actions/userActions';

const Auth = Container => {
  class ContainerWrapper extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
    };

    componentDidMount() {
      this.props.dispatch(userActions.getCurrentUserRequest());
    }

    render() {
      return <Container { ...this.props } />;
    }
  }

  return connect()(ContainerWrapper);
};

export default Auth;
