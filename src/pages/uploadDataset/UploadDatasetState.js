import {executeRequest} from "../../utils/ApiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    finished: false,
    file: {
        filename: null,
        type: null,
        size: null
    },
    dataDetails: {
        id: null,
        ipfsHash: null,
        link: null,
        features: [],
        columns: null,
        rows: null
    }
};


export const LOAD_FILE = "Dataset/LOAD_FILE";
export const LOAD_FILE_NAME = "Dataset/LOAD_FILE_NAME";
export const SELECT_DATA_SET = "Dataset/SELECT_DATA_SET";
export const ADD_DATASET_PENDING = "Dataset/ADD_DATASET_PENDING";
export const ADD_DATASET_SUCCESS = "Dataset/ADD_DATASET_SUCCESS";
export const ADD_DATASET_ERROR = "Dataset/ADD_DATASET_ERROR";


export const selectDataSet = () => ({
    type: SELECT_DATA_SET
});


export const addDataSetPending = () => ({
    type: ADD_DATASET_PENDING
});

export const addDataSetSuccess = (response) => ({
    type: ADD_DATASET_SUCCESS,
    payload: response
});

export const addDataSetError = (error) => ({
    type: ADD_DATASET_ERROR,
    error: error
});

export const updateFile = (file) => ({
    type: LOAD_FILE,
    payload: file
});


export const uploadFile = (files) => dispatch => {
    let file = files[0];
    if (file) {
        console.log(file);

        dispatch(updateFile(file))
    }
}

const buildUploadDatasetData = (file) => {
    let data = new FormData()
    data.append('file', file)
    return data;
};

export const saveDataSet = (props) => async dispatch => {

    dispatch(addDataSetPending());
    try {
        const data = buildUploadDatasetData(props.file);
        console.log(data);
        const uploadDatasetResponse = await executeRequest("POST", "datasets", data);
        dispatch(addDataSetSuccess(uploadDatasetResponse));

    } catch (e) {
        dispatch(addDataSetError(e));
    }
};


export default function DatasetReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_FILE:
            return {
                ...state,
                file: action.payload
            };

        case ADD_DATASET_PENDING:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case ADD_DATASET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                finished: true
            };
        case ADD_DATASET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };

        default:
            return state;
    }
}
