import React, {PureComponent} from "react";
import {Grid, withStyles} from "@material-ui/core";
import classnames from "classnames";
import { ArrowUpward as ArrowUpwardIcon , ArrowDownward as ArrowDownwardIcon} from "@material-ui/icons";
import Widget from "../../../../components/Widget";
import {Typography} from "../../../../components/Wrappers";


class BigStat extends PureComponent {
    state = {value: "daily"};

    changeValue = event => {
        this.setState({value: event.target.value});
    };

    render() {
        const {
            mse,
            improvement,
            initialMse,
            iterations,
            classes
        } = this.props;
        const {value} = this.state;

        return (
            <Widget
                header={
                    <div className={classes.title}>
                        <Typography variant="h5">Metrics</Typography>
                    </div>
                }
                upperTitle
            >
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <div className={classes.totalValueContainer}>
                        <div className={classes.totalValue}>
                            <Typography size="xxl" color={improvement > 0 ? "success" : "secondary"}>
                                {improvement > 0 ? <ArrowUpwardIcon/>: <ArrowDownwardIcon/>}
                                {improvement}% <Typography size="sm" color="textSecondary"> Improvement </Typography>
                            </Typography>

                        </div>

                    </div>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        className={classes.bottomStatsContainer}>
                        <Grid item className={classnames(classes.statCell, classes.borderRight)}>
                            <Grid container alignItems="center">
                                <Typography variant="h6">{initialMse}</Typography>
                            </Grid>
                            <Typography size="sm" color="textSecondary">
                                Initial MSE
                            </Typography>
                        </Grid>
                        <Grid item className={classes.statCell}>
                            <Grid container alignItems="center">
                                <Typography variant="h6">{mse}</Typography>

                            </Grid>
                            <Typography size="sm" color="textSecondary">
                                MSE
                            </Typography>
                        </Grid>
                        <Grid item className={classes.statCell}>
                            <Grid container alignItems="center">
                                <Typography variant="h6">#{iterations}</Typography>
                            </Grid>
                            <Typography size="sm" color="textSecondary">
                                Iterations
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Widget>
        );
    }
}

const styles = theme => ({
    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: theme.spacing.unit
    },
    bottomStatsContainer: {
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing.unit * -2,
        marginTop: theme.spacing.unit
    },
    statCell: {
        padding: theme.spacing.unit * 2
    },
    totalValueContainer: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    totalValue: {
        display: "flex",
        alignItems: "baseline"
    },
    profitArrow: {
        transform: "rotate(-45deg)",
        fill: theme.palette.success.main
    },
    profitArrowDanger: {
        transform: "rotate(45deg)",
        fill: theme.palette.secondary.main
    },
    selectInput: {
        padding: 10,
        paddingRight: 25,
        "&:focus": {
            backgroundColor: "white"
        }
    }
});

export default withStyles(styles, {withTheme: true})(BigStat);
