import React from "react";
import {FormControl, Grid, Input, InputLabel, MenuItem, Select, withStyles} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import ModelWidget from "../../components/ModelWidget";
import PageTitle from "../../components/PageTitle";
import AddIcon from '@material-ui/icons/Add';

const NewModel = ({classes, theme, ...props}) => {

    return (

        <React.Fragment>
            <PageTitle title="Create New Model"/>
            <Grid container spacing={32}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <ModelWidget
                        upperTitle
                        title="Model "
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
                                    <InputLabel htmlFor="name">Name</InputLabel>
                                    <Input id="name" value={props.modelName}
                                           onChange={e => props.handleInput("model", "name", e)}/>
                                </FormControl>
                                <div>
                                    <InputLabel htmlFor="model-type">Model Type</InputLabel>
                                    <Select
                                        displayEmpty
                                        className={classes.selectEmpty}
                                        value={props.selectedModelType}
                                        onChange={e => props.handleSelect(e)}

                                    >
                                        {(props.modelTypes.map(modelType => (
                                            <MenuItem id={modelType} value={modelType}>{modelType}</MenuItem>
                                        )))}

                                    </Select>
                                </div>


                            </Grid>
                        </Grid>
                    </ModelWidget>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <ModelWidget
                        title="Features"
                        upperTitle
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
                                    <InputLabel htmlFor="features-list">List</InputLabel>
                                    <Input id="features-list" value={props.features.list}
                                           onChange={e => props.handleInput("features", "list", e)}/>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="features-range">Range</InputLabel>
                                    <Input id="features-range" value={props.features.range}
                                           onChange={e => props.handleInput("features", "range", e)}/>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="features-preProcessing">Pre Processing</InputLabel>
                                    <Input id="features-preProcessing" value={props.features.pre_processing}
                                           onChange={e => props.handleInput("features", "pre_processing", e)}/>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="features-desc">Desc</InputLabel>
                                    <Input id="features-desc" value={props.features.desc}
                                           onChange={e => props.handleInput("features", "desc", e)}/>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </ModelWidget>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <ModelWidget
                        title="Target"
                        upperTitle
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
                                    <InputLabel htmlFor="target-range">Range</InputLabel>
                                    <Input id="target-range" value={props.target.range}
                                           onChange={e => props.handleInput("target", "range", e)}/>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="target-desc">Desc</InputLabel>
                                    <Input id="target-desc" value={props.features.desc}
                                           onChange={e => props.handleInput("target", "desc", e)}/>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </ModelWidget>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <ModelWidget
                        title="Payment"
                        upperTitle
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
                                    <InputLabel htmlFor="currency">Currency</InputLabel>
                                    <Input id="currency" value={props.payment_requirements.currency}/>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="total_pay">$</InputLabel>
                                    <Input id="total_pay" value={props.payment_requirements.total_pay}
                                           onChange={e => props.handleInput("payment_requirements", "total_pay", e)}/>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </ModelWidget>
                </Grid>

                <div>
                    <Fab color="primary" aria-label="Add" className={classes.fab} onClick={props.handleCreateModel}>
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

export default withStyles(styles, {withTheme: true})(NewModel);
