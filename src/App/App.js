import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers'; 
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_routers';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';


class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;

    return (
      <div>
        {
          alert.message && 
            <p>{alert.message}</p>
        }
        <Router history={history}>
          <div>
            <PrivateRoute exact path='/' component={HomePage} />
            <Route path='/login' component={LoginPage} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  alert: state.alert
});

App = connect(
  mapStateToProps
)(App);

export  { App };