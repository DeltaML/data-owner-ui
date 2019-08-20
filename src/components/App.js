import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import themes, { overrides } from '../themes';
import Layout from './Layout';
import Error from '../pages/error';
import Login from '../pages/login';

const theme = createMuiTheme({...themes.default, ...overrides});

const PrivateRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest} render={props => (
      localStorage.getItem('id_token') ? (
        React.createElement(component, props)
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    )}
    />
  );
};

const PublicRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest} render={props => (
      localStorage.getItem('id_token') ? (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      ) : (
        React.createElement(component, props)
      )
    )}
    />
  );
};

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/home" />} />
        <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
        <Route exact path="/app/newModel" render={() => <Redirect to="/newModel" />} />
          <Route exact path="/app/model" render={() => <Redirect to="/model" />} />
        <PrivateRoute path="/app" component={Layout} />
        <PrivateRoute path="/newModel" component={Layout} />
        <PrivateRoute path="/model" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;