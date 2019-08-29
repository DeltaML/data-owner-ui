import {compose, lifecycle, withHandlers, withState} from "recompose";

import DatasetsView from "./Datasets";
import {connect} from "react-redux";
import {fetchingDatasetseData} from "../datasets/DatasetsState";


export default compose(
    connect(
        state => ({
            isLoading: state.datasets.isLoading,
            datasets: state.datasets.datasets,
            error: state.datasets.error
        }),
        {fetchingDatasetseData}
    ),
    withState("mainChartState", "setMainChartState", "monthly"),

  lifecycle({
    componentWillMount() {
      this.props.fetchingDatasetseData(this.props)
    }
  }),
)(DatasetsView);
