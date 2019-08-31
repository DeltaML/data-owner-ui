import {compose, lifecycle, withState} from "recompose";

import ModelsView from "./Datasets";
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
        componentWillMount() {
            this.props.fetchingModelsData(this.props)
        }
    }),
)(ModelsView);
