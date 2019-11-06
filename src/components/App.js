import React from 'react';
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from 'react-router-dom';
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
        <HashRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/login"/>}/>
                <Route path="/app" component={Layout}/>
                <Route path="/app/upload-dataset" component={Layout}/>
                <Route path="/app/datasets" component={Layout}/>
                <Route path="/app/models" component={Layout}/>
                <Route path="/app/model" component={Layout}/>
                <PublicRoute path="/login" component={Login}/>
                <Route component={Error}/>
            </Switch>
        </HashRouter>
    </MuiThemeProvider>
);

export default App;