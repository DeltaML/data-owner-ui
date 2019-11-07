import {get} from "../../utils/ApiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    models: []
};


export const FETCHING_MODELS_PENDING = "Models/FETCHING_MODELS_PENDING";
export const FETCHING_MODELS_SUCCESS = "Models/FETCHING_MODELS_SUCCESS";
export const FETCHING_MODELS_ERROR = "Models/FETCHING_MODELS_ERROR";

export const fetchingModelsDataPending = () => ({
    type: FETCHING_MODELS_PENDING
});

export const fetchingModelsDataSuccess = (models) => ({
    type: FETCHING_MODELS_SUCCESS,
    payload: models
});

export const fetchingModelsDataError = (error) => ({
    type: FETCHING_MODELS_ERROR,
    error: error
});


export const fetchingModelsData = (props) => async dispatch => {

    dispatch(fetchingModelsDataPending());
    let colorMap = {
        "WAITING": "error.main",
        "INITIATED": "primary.main",
        "IN_PRGRESS": "primary.main",
        "FINISHED": "grey.500"
    };
    try {
        let models = await get("models");
        models = models.map(model => {
            model.status_color = colorMap[model.status];
            model.improvement = (model.improvement * 100).toFixed(2);
            return model;
        });
        dispatch(fetchingModelsDataSuccess(models));
    } catch (e) {
        props.history.push(`/login`)
        dispatch(fetchingModelsDataError(e));

    }
};


export default function ModelsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_MODELS_PENDING:
            return {
                ...state,
                isLoading: true,
                error: null,
                models: action.payload
            };
        case FETCHING_MODELS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                models: action.payload
            };
        case FETCHING_MODELS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                models: []
            };
        default:
            return state;
    }
}
