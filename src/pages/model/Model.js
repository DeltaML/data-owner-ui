import React from "react";
import {Grid, withStyles,} from "@material-ui/core";
import {ComposedChart, Line, ResponsiveContainer, XAxis, YAxis} from "recharts";

import ModelWidget from "../../components/ModelWidget";
import {Typography} from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import BigStat from "./components/BigStat/BigStat";
import PageTitle from "../../components/PageTitle";
import Table from "./components/Table/Table";

const Model = ({classes, theme, ...props}) => {
    return (
        <React.Fragment>
            <PageTitle title={props.model.name} modal="Show Model" modalData={props.model.weights}/>
            <Grid container spacing={32}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
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

                <Grid item md={4} sm={6} xs={12}>
                    <BigStat mse={props.metrics.mse} improvement={props.metrics.improvement}
                             initialMse={props.metrics.initial_mse} iterations={props.metrics.iterations}/>
                </Grid>


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

                <Grid item xs={12}>
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
                                    fill={theme.palette.primary.warning}
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
                <Grid item xs={12}>
                    <ModelWidget
                        title="Partial MSE's"
                        upperTitle
                        noBodyPadding
                        bodyClass={classes.tableWidget}
                    >
                        <Table rowsData={props.metrics.partial_MSEs || []}/>
                    </ModelWidget>
                </Grid>
            </Grid>

        </React.Fragment>
    );
};

const styles = theme => ({
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
    }
});

export default withStyles(styles, {withTheme: true})(Model);
