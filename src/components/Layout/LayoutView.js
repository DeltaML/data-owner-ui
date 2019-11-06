import React from 'react';
import {CssBaseline, withStyles} from '@material-ui/core';
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import classnames from 'classnames';

import Header from '../Header';
import Sidebar from '../Sidebar';
// pages
import Home from '../../pages/home';
import Datasets from '../../pages/datasets';
import UploadDataset from '../../pages/uploadDataset';
import Models from '../../pages/models';
import Model from '../../pages/model';
import Profile from '../../pages/profile';

const Layout = ({classes, isSidebarOpened, toggleSidebar}) => (
    <div className={classes.root}>
        <CssBaseline/>
        <HashRouter>
            <React.Fragment>
                <Header/>
                <Sidebar/>
                <div className={classnames(classes.content, {[classes.contentShift]: isSidebarOpened})}>
                    <div className={classes.fakeToolbar}/>
                    <Switch>
                        <Route path="/app/home" component={Home}/>
                        <Route path="/app/datasets" component={Datasets}/>
                        <Route path="/app/upload-dataset" component={UploadDataset}/>
                        <Route path="/app/models" component={Models}/>
                        <Route path="/app/model" component={Model}/>
                        <Route path="/app/profile" component={Profile} />
                    </Switch>
                </div>
            </React.Fragment>
        </HashRouter>
    </div>
);

const styles = theme => ({
    root: {
        display: 'flex',
        maxWidth: '100vw',
        overflowX: 'hidden',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        width: `calc(100vw - 240px)`,
        minHeight: '100vh',
    },
    contentShift: {
        width: `calc(100vw - ${240 + theme.spacing.unit * 6}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    fakeToolbar: {
        ...theme.mixins.toolbar,
    }
});

export default withStyles(styles)(Layout);
