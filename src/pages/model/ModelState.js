import {get, put} from "../../utils/ApiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    data: null,
    model: {
        status: null,
        creation_date: null,
        updated_date: null,
        id: null,
        weights: null,
        type: null,
        earned: 0.0
    },
    metrics: {
        iterations: null,
        improvement: null
    },
    chart: {
        data: []
    }

};


export const FETCHING_MODEL_PENDING = "Home/FETCHING_MODEL_PENDING";
export const FETCHING_MODEL_ERROR = "Home/FETCHING_MODEL_ERROR";
export const FETCHING_MODEL_DATA = "Home/FETCHING_MODEL_DATA";
export const FETCHING_MODEL_METRICS = "Home/FETCHING_MODEL_METRICS";
export const FETCHING_MODEL_CHART_DATA = "Home/FETCHING_MODEL_CHART_DATA";


export const fetchingModelDataPending = () => ({
    type: FETCHING_MODEL_PENDING
});


export const fetchingModelDataError = (error) => ({
    type: FETCHING_MODEL_ERROR,
    error: error
});


export const fetchingModelDataField = (type, status) => ({
    type: type,
    payload: status
});

export const dispatchModelDataSuccess = (dispatch, model) => {
    dispatch(fetchingModelDataField(FETCHING_MODEL_DATA, model.model));
    dispatch(fetchingModelDataField(FETCHING_MODEL_METRICS, model.metrics));
    dispatch(fetchingModelDataField(FETCHING_MODEL_CHART_DATA, getWeightsChartData(model.metrics)));

};


export const getWeightsChartData = (metrics) => {
    const resultArray = [];
    console.log(metrics.mse_history);
    if (metrics.mse_history === null) return resultArray;
    for (let i = 0; i < metrics.mse_history.length; i++) {
        resultArray.push({
            partial: metrics.mse_history[i].mse,
            initial: metrics.initial_mse,
            final: metrics.mse
        });
    }
    return resultArray;
};

export const transformModelData = (data) => {
    data.metrics.improvement = (data.metrics.improvement * 100).toFixed(2);
    data.metrics.mse = (data.metrics.mse).toFixed(2);
    return data
};

export const fetchingModelData = (props) => async dispatch => {
    dispatch(fetchingModelDataPending());
    try {
        const modelId = props.location.pathname.split("/").pop()
        const url = `models/${modelId}`;
        const modelData = await get(url);
        const transformedModelData = transformModelData(modelData);
        dispatchModelDataSuccess(dispatch, transformedModelData);
    } catch (e) {
        console.log(e);
        props.history.push(`/app/models`);
        dispatch(fetchingModelDataError(e));
    }
};


export const acceptModelTraining = (props) => async dispatch => {
    try {
        const modelId = props.location.pathname.split("/").pop();
        const url = `trainings/${modelId}/accept`;
        await put(url);
    } catch (e) {
        console.log(e);
        props.history.push(`/app/models`);
        dispatch(fetchingModelDataError(e));
    }
};


export default function ModelReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_MODEL_DATA: {
            return {
                ...state,
                model: action.payload
            }
        }
            ;
        case FETCHING_MODEL_METRICS: {
            return {
                ...state,
                metrics: action.payload
            }
        }
            ;
        case FETCHING_MODEL_CHART_DATA: {
            return {
                ...state,
                chart: {
                    ...state.chart,
                    data: action.payload
                }


            }

        }
            ;
        case FETCHING_MODEL_ERROR: {
            return {
                ...state,
                error: true
            }
        }
            ;
        default:
            return state;
    }
}
