import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_actions';


class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    
    const { dispatch } = this.props;
    const { username, password } = this.state;

    if (username && password) {
      dispatch(userActions.login(
        username,
        password
      ));
    }

  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    // const { loggingIn } = this.props;
    // const { username, password, submitted } = this.state;

    return (
      
      <form onSubmit={this.onSubmit}>
        <input type="text" name="username" onChange={this.onChange}/>
        <input type="password" name="password" onChange={this.onChange}/>
        <input type="submit" value="login" />
      </form>

    );
  }
}

const mapStateToProps = (state) => ({
  loggingIn: state.authentication.loggingIn
});

LoginPage = connect(
  mapStateToProps
)(LoginPage);

export { LoginPage };