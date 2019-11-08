import {compose, lifecycle, withState} from "recompose";

import ModelsView from "./Models";
import {connect} from "react-redux";
import {fetchingModelsData} from "../models/ModelsState";


export default compose(
    connect(
        state => ({
            isLoading: state.models.isLoading,
            models: state.models.models,
            error: state.models.error
        }),
        {fetchingModelsData}
    ),
    withState("mainChartState", "setMainChartState", "monthly"),

    lifecycle({
        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                5000
            );
        },
        componentWillMount() {
            this.props.fetchingModelsData(this.props)
        },
        componentWillUnmount() {
            clearInterval(this.timerID);
        },
        tick() {
            this.props.fetchingModelsData(this.props)
        }
    }),
)(ModelsView);
