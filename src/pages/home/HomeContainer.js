import {compose, lifecycle, withHandlers, withState} from "recompose";

import HomeView from "./Home";
import {connect} from "react-redux";
import {fetchingHomeData} from "../home/HomeState";


export default compose(
    connect(
        state => ({
            isLoading: state.home.isLoading,
            models: state.home.models,
            error: state.home.error
        }),
        {fetchingHomeData}
    ),
    withState("mainChartState", "setMainChartState", "monthly"),

  lifecycle({
    componentWillMount() {
      this.props.fetchingHomeData(this.props)
    }
  }),
)(HomeView);
