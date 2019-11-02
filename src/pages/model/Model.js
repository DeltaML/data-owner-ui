import React from "react";
import {Grid, withStyles,} from "@material-ui/core";
import {ComposedChart, Line, ResponsiveContainer, XAxis, YAxis} from "recharts";

import ModelWidget from "../../components/ModelWidget";
import {Typography} from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import BigStat from "./components/BigStat/BigStat";
import PageTitle from "../../components/PageTitle";
import {acceptModelTraining} from "./ModelState"
import { JsonToTable } from "react-json-to-table";
import TableReqsComponent from "./components/Table/TableReqs";
import TableReqs2Component from "./components/Table/TableReqs2";

const Model = ({classes, theme, ...props}) => {
    console.log("-------------- STATUS -----------");
    console.log(props);
    console.log(props.model.status);
    if (props.model.requirements !== undefined) {
        console.log(props.model.requirements.split('\'').join('"'));
    }

    return (
        <React.Fragment>
            {((props.model.status !== "WAITING") && (props.model.status !== "READY")) ?
                <PageTitle title={props.model.name} disabled={false} modal="Show Model" modalData={props.model.weights}/>
                :
                <PageTitle title={props.model.name} onClick={props.handleModelTraining} disabled={props.model.status !== "READY"} button="Train model" buttonTo={"/app/model/" + props.model.id} />
            }
            <Grid container spacing={2}>
                <Grid item lg={3} md={4} sm={6} xs={12} spacing={2}>
                    <ModelWidget
                        title="Status"
                        upperTitle
                        bodyClass={classes.fullHeightBody}
                        className={classes.card}
                    >
                        <div className={classes.visitsNumberContainer}>
                            <Typography size="xl" weight="medium">
                                {props.model.status}
                            </Typography>
                        </div>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                        </Grid>
                    </ModelWidget>
                </Grid>

                { ((props.model.status !== "WAITING") && (props.model.status !== "READY")) ?
                    <Grid item lg={3} md={4} sm={6} xs={12} spacing={2}>
                        <BigStat mse={props.metrics.mse} improvement={props.metrics.improvement}
                                 initialMse={props.metrics.initial_mse} iterations={props.metrics.iterations}/>
                    </Grid>
                : null
                }

                { ((props.model.status !== "WAITING") && (props.model.status !== "READY")) ?
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ModelWidget
                            title="Spent Money"
                            upperTitle
                            bodyClass={classes.fullHeightBody}
                            className={classes.card}
                        >
                            <div className={classes.visitsNumberContainer}>
                                <Typography size="xl" weight="medium">
                                    $10/$100
                                </Typography>
                            </div>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                            </Grid>
                        </ModelWidget>
                    </Grid>
                : null }

                { ((props.model.status !== "WAITING") && (props.model.status !== "READY")) ?
                    <Grid item lg={12} md={12} sm={12} xs={12} spacing={2}>
                        <ModelWidget
                            bodyClass={classes.mainChartBody}
                            header={
                                <div className={classes.mainChartHeader}>
                                    <Typography variant="headline" color="textSecondary">
                                        MSE Comparatives
                                    </Typography>
                                    <div className={classes.mainChartHeaderLabels}>
                                        <div className={classes.mainChartHeaderLabel}>
                                            <Dot color="warning"/>
                                            <Typography className={classes.mainChartLegentElement}>Initial</Typography>
                                        </div>
                                        <div className={classes.mainChartHeaderLabel}>
                                            <Dot color="primary"/>
                                            <Typography className={classes.mainChartLegentElement}>Partial</Typography>
                                        </div>
                                        <div className={classes.mainChartHeaderLabel}>
                                            <Dot color="success"/>
                                            <Typography className={classes.mainChartLegentElement}>Final</Typography>
                                        </div>
                                    </div>
                                </div>
                            }
                        >
                            <ResponsiveContainer width="100%" minWidth={500} height={350}>
                                <ComposedChart
                                    margin={{top: 0, right: -15, left: -15, bottom: 0}}
                                    data={props.chart.data}
                                >
                                    <YAxis
                                        ticks={[0, 1000, 2000, 5000, 10000, 30000]}
                                        tick={{fill: theme.palette.text.hint + '80', fontSize: 14}}
                                        stroke={theme.palette.text.hint + '80'}
                                        tickLine={false}
                                    />
                                    <XAxis
                                        tickFormatter={i => i + 1}
                                        tick={{fill: theme.palette.text.hint + '80', fontSize: 14}}
                                        stroke={theme.palette.text.hint + '80'}
                                        tickLine={false}
                                    />
                                    <Line
                                        type="natural"
                                        dataKey="initial"
                                        fill={theme.palette.background.light}
                                        strokeWidth={2}
                                        dot={false}
                                        activeDot={false}
                                        strokeDasharray="5 5"
                                    />
                                    <Line
                                        type="natural"
                                        dataKey="partial"
                                        stroke={theme.palette.primary.main}
                                        strokeWidth={2}
                                        dot={{
                                            stroke: theme.palette.primary.main,
                                            strokeWidth: 2,
                                            fill: theme.palette.primary.main
                                        }}
                                        activeDot={false}
                                    />
                                    <Line
                                        type="linear"
                                        dataKey="final"
                                        stroke={theme.palette.success.main}
                                        strokeWidth={2}
                                        strokeDasharray="5 5"
                                        dot={false}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </ModelWidget>
                    </Grid>
                :
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <ModelWidget className={classes.card}
                                     title="Feature requirements"
                                     upperTitle
                                     bodyClass={classes.fullHeightBody}>
                            <div>
                                <TableReqsComponent rowsData={JSON.parse(props.model.requirements.split('\'').join('"'))} />
                            </div>
                        </ModelWidget>
                    </Grid>
                }

                { ((props.model.status !== "WAITING") && (props.model.status !== "READY")) ?
                    null :
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <ModelWidget className={classes.card}
                                     title="Target requirements"
                                     upperTitle
                                     bodyClass={classes.fullHeightBody}>
                            <div>
                                <TableReqs2Component rowsData={JSON.parse(props.model.requirements.split('\'').join('"'))} />
                            </div>
                        </ModelWidget>
                    </Grid>
                }
            </Grid>
        </React.Fragment>
    );
};

const styles = theme => ({
    card: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 2
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
    }
});

export default withStyles(styles, {withTheme: true})(Model);
