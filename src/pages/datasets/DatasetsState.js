import {get} from "../../utils/ApiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    datasets: []
};


export const FETCHING_DATASETS_PENDING = "Datasets/FETCHING_DATASETS_PENDING";
export const FETCHING_DATASETS_SUCCESS = "Datasets/FETCHING_DATASETS_SUCCESS";
export const FETCHING_DATASETS_ERROR = "Datasets/FETCHING_DATASETS_ERROR";

export const fetchingDatasetsDataPending = () => ({
    type: FETCHING_DATASETS_PENDING
});

export const fetchingDatasetsDataSuccess = (datasets) => ({
    type: FETCHING_DATASETS_SUCCESS,
    payload: datasets
});

export const fetchingDatasetsDataError = (error) => ({
    type: FETCHING_DATASETS_ERROR,
    error: error
});


export const fetchingDatasetseData = (props) => async dispatch => {

    dispatch(fetchingDatasetsDataPending());

    try {
        const datasets = await get("datasets");
        dispatch(fetchingDatasetsDataSuccess(datasets));
    } catch (e) {
        props.history.push(`/login`)
        dispatch(fetchingDatasetsDataError(e));

    }
};


export default function DatasetsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATASETS_PENDING:
            return {
                ...state,
                isLoading: true,
                error: null,
                datasets: action.payload
            };
        case FETCHING_DATASETS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                datasets: action.payload
            };
        case FETCHING_DATASETS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                datasets: []
            };
        default:
            return state;
    }
}
