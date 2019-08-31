import React from 'react';
import {Drawer, IconButton, List, withStyles} from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import {
    ArrowBack as ArrowBackIcon,
    HelpOutline as FAQIcon,
    Home as HomeIcon,
    LibraryBooks as LibraryIcon,
    QuestionAnswer as SupportIcon,
} from "@material-ui/icons";
import classNames from 'classnames';

import SidebarLink from './components/SidebarLink/SidebarLinkContainer';

const structure = [
    {id: 0, label: 'Home', link: '/app/home', icon: <HomeIcon/>},
    {id: 1, label: 'Datasets', link: '/app/datasets', icon: <LibraryIcon/>},
    {id: 2, label: 'Upload Dataset', link: '/app/upload-dataset', icon: <SupportIcon/>},
    {id: 3, label: 'Models', link: '/app/models', icon: <FAQIcon/>},
    {id: 4, label: 'Settingss', link: '/app/settings', icon: <Icons.SettingsApplications/>},
    /*{ id: 2, label: 'View Model', link: '/app/model', icon: <Icons.SettingsApplications/> },
    { id: 3, label: 'Notifications', link: '/app/notifications', icon: <NotificationsIcon />},
    {
      id: 4,
      label: 'UI Elements',
      link: '/app/ui',
      icon: <UIElementsIcon />,
      children: [
        { label: 'Icons', link: '/app/ui/icons' },
        { label: 'Charts', link: '/app/ui/charts' },
        { label: 'Maps', link: '/app/ui/maps' },
      ],
    },
    { id: 5, type: 'divider' },
    { id: 6, type: 'title', label: 'HELP' },
    { id: 7, label: 'Library', link: '', icon: <LibraryIcon /> },
    { id: 8, label: 'Support', link: '', icon: <SupportIcon /> },
    { id: 9, label: 'FAQ', link: '', icon: <FAQIcon />},
    { id: 10, type: 'divider' },
    { id: 11, type: 'title', label: 'PROJECTS' },
    { id: 12, label: 'My recent', link: '', icon: <Dot size="large" color="warning" /> },
    { id: 13, label: 'Starred', link: '', icon: <Dot size="large" color="primary" /> },
    { id: 14, label: 'Background', link: '', icon: <Dot size="large" color="secondary" /> },*/
];

const SidebarView = ({classes, theme, toggleSidebar, isSidebarOpened, isPermanent, location}) => {
    return (
        <Drawer
            variant={isPermanent ? 'permanent' : 'temporary'}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: isSidebarOpened,
                [classes.drawerClose]: !isSidebarOpened,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: isSidebarOpened,
                    [classes.drawerClose]: !isSidebarOpened,
                }),
            }}
            open={isSidebarOpened}
        >
            <div className={classes.toolbar}/>
            <div className={classes.mobileBackButton}>
                <IconButton
                    onClick={toggleSidebar}
                >
                    <ArrowBackIcon classes={{root: classNames(classes.headerIcon, classes.headerIconCollapse)}}/>
                </IconButton>
            </div>
            <List className={classes.sidebarList}>
                {structure.map(link => <SidebarLink key={link.id} location={location}
                                                    isSidebarOpened={isSidebarOpened} {...link} />)}
            </List>
        </Drawer>
    );
}

const drawerWidth = 240;

const styles = theme => ({
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 40,
        [theme.breakpoints.down("sm")]: {
            width: drawerWidth,
        }
    },
    toolbar: {
        ...theme.mixins.toolbar,
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    sidebarList: {
        marginTop: theme.spacing.unit * 6,
    },
    mobileBackButton: {
        marginTop: theme.spacing.unit * .5,
        marginLeft: theme.spacing.unit * 3,
        [theme.breakpoints.only("sm")]: {
            marginTop: theme.spacing.unit * .625,
        },
        [theme.breakpoints.up("md")]: {
            display: 'none',
        }
    }
});

export default withStyles(styles, {withTheme: true})(SidebarView);
