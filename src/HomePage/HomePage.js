import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';


export default class HomePage extends React.Component {
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.getAll());
  }

  render() {
    const { user, users } = this.props;
    return (
      <div>
        <h1>Hi {user.firstName}</h1>
        <p>You're logged in with React and JWT!</p>
        {users.loading && <em>Loading users...</em>}
        {users.error && <span>ERROR: {users.error}</span>}
        {
          users.items &&
            <ul>
              {
                users.items.map((user, index) => (
                  <li key={index}>
                    {user.firstName + ' ' + user.lastName}
                  </li>
                )
                )}
            </ul>
        }
      </div>
    );  
  }
}

const mapStateToProps = (state) => {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
};

HomePage = connect(
  mapStateToProps
);