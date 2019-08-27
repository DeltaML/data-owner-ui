import dataRequirements from "./mock"
import payment_requirements from "./mock"
import {post} from "../../utils/ApiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    finished: false,
    fileName: null,
    file: null
};


export const LOAD_FILE = "Dataset/LOAD_FILE";
export const LOAD_FILE_NAME = "Dataset/LOAD_FILE_NAME";
export const SELECT_DATA_SET = "Dataset/SELECT_DATA_SET";
export const ADD_DATASET_PENDING = "Dataset/ADD_DATASET_PENDING";
export const ADD_DATASET_SUCCESS = "Dataset/ADD_DATASET_SUCCESS";
export const ADD_DATASET_ERROR = "Dataset/ADD_DATASET_ERROR";



export const selectDataSet= () => ({
    type: SELECT_DATA_SET
});


export const addDataSetPending = () => ({
    type: ADD_DATASET_PENDING
});

export const addDataSetSuccess = (file) => ({
    type: ADD_DATASET_SUCCESS
});

export const addDataSetError = (error) => ({
    type: ADD_DATASET_ERROR,
    error: error
});

export const updateFile = (file) => ({
    type: LOAD_FILE,
    payload: file
});

export const updateFileName = (fileName) => ({
    type: LOAD_FILE_NAME,
    payload: fileName
});


export const uploadFile = (files) => dispatch => {
    let file = files[0];
    if (file) {
        console.log(file)
        dispatch(updateFileName(file.name))
        dispatch(updateFile(file))
    }
}

export const saveDataSet = (props) => async dispatch => {
    console.log("Create Model");
    /*try {
        const data = buildModelFormData(name, selectedModelType, features, target, payment_requirements);
        console.log(data);
        const modelCreateResponse = await post("models", data);
        props.history.push(`/app/model/${modelCreateResponse.model.id}`)

    } catch (e) {
        dispatch(createModelError());
    }
*/

};



export default function DatasetReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_FILE:
            return {
                ...state,
                file: action.payload
            };
        case LOAD_FILE_NAME:
            return {
                ...state,
                fileName: action.payload
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
