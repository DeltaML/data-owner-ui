export const initialState = {
    isLoading: false,
    error: null,
    notifications: []
};


export const FETCHING_HOME_PENDING = "Home/FETCHING_HOME_PENDING";
export const FETCHING_HOME_SUCCESS = "Home/FETCHING_HOME_SUCCESS";
export const FETCHING_HOME_ERROR = "Home/FETCHING_HOME_ERROR";

export const fetchingHomeDataPending = () => ({
    type: FETCHING_HOME_PENDING
});

export const fetchingHomeDataSuccess = (models) => ({
    type: FETCHING_HOME_SUCCESS,
    payload: models
});

export const fetchingHomeDataError = (error) => ({
    type: FETCHING_HOME_ERROR,
    error: error
});


export const fetchingHomeData = (props) => async dispatch => {

    /*dispatch(fetchingHomeDataPending());

    try {
        const datasets = await get("datasets");
        dispatch(fetchingHomeDataSuccess(datasets));
    } catch (e) {
        props.history.push(`/login`)
        dispatch(fetchingHomeDataError(e));

    }*/
};


export default function HomeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_HOME_PENDING:
            return {
                ...state,
                isLoading: true,
                error: null,
                notifications: action.payload
            };
        case FETCHING_HOME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                notifications: action.payload
            };
        case FETCHING_HOME_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                notifications: []
            };
        default:
            return state;
    }
}
