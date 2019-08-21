import React from "react";
import {Grid, withStyles,CircularProgress,} from "@material-ui/core";
import HomeWidget from "../../components/HomeWidget";
import PageTitle from "../../components/PageTitle";
import {Typography} from "../../components/Wrappers";

const Home = ({classes, theme, ...props}) => {

    return (

        <React.Fragment>
            <PageTitle title="Home" button="New Model" buttonTo="/app/newModel"/>
            <Grid container spacing={32}>
                {props.isLoading ? (
                    <CircularProgress size={26}/>
                ) : (
                    props.models.map(model => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <HomeWidget
                                    title={model.name}
                                    upperTitle
                                    bodyClass={classes.fullHeightBody}
                                    className={classes.card}
                                    link={model.id}
                                >
                                    <div className={classes.visitsNumberContainer}>
                                        <Typography size="xl" weight="medium">
                                            {model.status}
                                        </Typography>
                                    </div>

                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                    >
                                        <Grid item>
                                            <Typography color="textSecondary">Improvement</Typography>
                                            <Typography size="md">{model.improvement}%</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="textSecondary">Iterations</Typography>
                                            <Typography size="md">{model.iterations}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="textSecondary">Cost</Typography>
                                            <Typography size="md">${model.cost}</Typography>
                                        </Grid>

                                    </Grid>
                                </HomeWidget>
                            </Grid>
                        )
                    )
                )}


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

export default withStyles(styles, {withTheme: true})(Home);
