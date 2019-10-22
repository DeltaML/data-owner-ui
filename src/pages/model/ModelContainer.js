import {compose, lifecycle, withHandlers, withState} from "recompose";
import {connect} from "react-redux";
import ModelView from "./Model";
import {fetchingModelData, acceptModelTraining} from "./ModelState";
import withRouter from "react-router/es/withRouter";


export default compose(
    connect(
        state => ({
            isLoading: state.model.isLoading,
            model: state.model.model,
            metrics: state.model.metrics,
            chart: state.model.chart
        }),
        {fetchingModelData, acceptModelTraining}
    ),
    withRouter,
    withHandlers({
        handleModelTraining: props => () => {
            props.acceptModelTraining(props);
        }
    }),
    withState("mainChartState", "setMainChartState", "monthly"),
    lifecycle({
        componentWillMount() {
            this.props.fetchingModelData(this.props)
        }
    })
)(ModelView);
