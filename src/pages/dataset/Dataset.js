import React from "react";
import {FormControl, Grid, Button, InputLabel, MenuItem, Select, withStyles} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import ModelWidget from "../../components/ModelWidget";
import PageTitle from "../../components/PageTitle";
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import {Typography} from "../../components/Wrappers";

const Dataset = ({classes, theme, ...props}) => {

    return (

        <React.Fragment>
            <PageTitle title="Upload Dataset"/>
            <Grid container spacing={32}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <ModelWidget
                        upperTitle
                        title="Upload "
                        bodyClass={classes.fullHeightBody}
                        className={classes.card}
                    >
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="load-file">Select Dataset</InputLabel>
                                    <input
                                        accept="*/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        onChange={e => props.handleUploadFile(e)}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" component="span" className={classes.upLoadButton}
                                        >
                                            Upload
                                            <CloudUploadIcon className={classes.rightIcon}/>
                                        </Button>
                                    </label>

                                </FormControl>
                                <div>
                                    <Typography size="m" weight="medium"> {props.fileName}</Typography>

                                </div>


                            </Grid>
                        </Grid>
                    </ModelWidget>
                </Grid>

                <div>
                    <Fab color="primary" aria-label="Add" className={classes.fab} onClick={props.handleSaveDataSet}>
                        <AddIcon/>
                    </Fab>
                </div>

            </Grid>
        </React.Fragment>
    );
};

const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 10,
        right: theme.spacing.unit * 10,
    },
    input: {
        display: 'none',
    },
    upLoadButton: {
        boxShadow: theme.customShadows.widget,
        textTransform: 'none',
        '&:active': {
            boxShadow: theme.customShadows.widgetWide,
        },
    },
    card: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column"
    },
    visitsNumberContainer: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        paddingBottom: theme.spacing.unit
    },
    progressSection: {
        marginBottom: theme.spacing.unit
    },
    progressTitle: {
        marginBottom: theme.spacing.unit * 2
    },
    progress: {
        marginBottom: theme.spacing.unit,
        backgroundColor: theme.palette.primary.main
    },
    pieChartLegendWrapper: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: theme.spacing.unit
    },
    legendItemContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing.unit
    },
    fullHeightBody: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    tableWidget: {
        overflowX: "auto"
    },
    progressBar: {
        backgroundColor: theme.palette.warning.main
    },
    performanceLegendWrapper: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        marginBottom: theme.spacing.unit
    },
    legendElement: {
        display: "flex",
        alignItems: "center",
        marginRight: theme.spacing.unit * 2,
    },
    legendElementText: {
        marginLeft: theme.spacing.unit
    },
    serverOverviewElement: {
        display: "flex",
        alignItems: "center",
        maxWidth: "100%"
    },
    serverOverviewElementText: {
        minWidth: 145,
        paddingRight: theme.spacing.unit * 2
    },
    serverOverviewElementChartWrapper: {
        width: "100%"
    },
    mainChartBody: {
        overflowX: 'auto',
    },
    mainChartHeader: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.only("xs")]: {
            flexWrap: 'wrap',
        }
    },
    mainChartHeaderLabels: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.only("xs")]: {
            order: 3,
            width: '100%',
            justifyContent: 'center',
            marginTop: theme.spacing.unit * 3,
            marginBottom: theme.spacing.unit * 2,
        }
    },
    mainChartHeaderLabel: {
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing.unit * 3,
    },
    mainChartSelectRoot: {
        borderColor: theme.palette.text.hint + '80 !important',
    },
    mainChartSelect: {
        padding: 10,
        paddingRight: 25
    },
    mainChartLegentElement: {
        fontSize: '18px !important',
        marginLeft: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
});

export default withStyles(styles, {withTheme: true})(Dataset);
