import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.any.isRequired,
    routing: PropTypes.any.isRequired,
    store: PropTypes.any.isRequired,
  };

  render() {
    const { store, routing, history } = this.props;

    return (
      <Provider store={ store } >
        <div>
            <Router history={ history } >
                {routing}
            </Router>
        </div>
      </Provider>
    );
  }
}
