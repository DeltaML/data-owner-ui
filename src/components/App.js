import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

import themes, {overrides} from '../themes';
import Layout from './Layout';
import Error from '../pages/error';
import Login from '../pages/login';

const theme = createMuiTheme({...themes.default, ...overrides});

const PrivateRoute = ({component, ...rest}) => {
    return (
        <Route
            {...rest} render={props => (
            localStorage.getItem('id_token') ? (
                React.createElement(component, props)
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: props.location},
                    }}
                />
            )
        )}
        />
    );
};

const PublicRoute = ({component, ...rest}) => {
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
                <Route exact path="/" render={() => <Redirect to="/app/home"/>}/>
                <Route exact path="/app" render={() => <Redirect to="/app/home"/>}/>
                <Route exact path="/app/datasets" render={() => <Redirect to="/app/datasets"/>}/>
                <Route exact path="/app/upload-dataset" render={() => <Redirect to="/app/upload-dataset"/>}/>
                <Route exact path="/app/models" render={() => <Redirect to="/app/models"/>}/>
                <Route exact path="/app/model" render={() => <Redirect to="/app/model"/>}/>
                <PrivateRoute path="/app" component={Layout}/>
                <PrivateRoute path="/app/upload-dataset" component={Layout}/>
                <PrivateRoute path="/app/datasets" component={Layout}/>
                <PrivateRoute path="/app/models" component={Layout}/>
                <PrivateRoute path="/app/model" component={Layout}/>
                <PublicRoute path="/login" component={Login}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>
);

export default App;