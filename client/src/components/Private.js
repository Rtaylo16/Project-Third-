import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../context/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    
    {(user) =>
    (
      <Route
        {...rest}
        render={props =>
          user.user.email ? (
            <Component {...props} />
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
        }
      />)}
  </AuthContext.Consumer>
);

export default PrivateRoute;