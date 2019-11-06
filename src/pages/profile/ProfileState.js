import {get, post} from "../../utils/ApiUtilities";
import { toast } from "react-toastify";

export const initialState = {
    isLoading: false,
    error: null,
    address: "",
    user: {
        name: "",
        email: "",
        address: ""
    }
};


export const FETCHING_PROFILE_PENDING = "Profile/FETCHING_PROFILE_PENDING";
export const FETCHING_PROFILE_SUCCESS = "Profile/FETCHING_PROFILE_SUCCESS";
export const FETCHING_PROFILE_ERROR = "Profile/FETCHING_PROFILE_ERROR";


export const UPDATE_ADDRESS_INPUT = "Profile/UPDATE_ADDRESS_INPUT";

export const UPDATE_ADDRESS_PENDING = "Profile/UPDATE_ADDRESS_PENDING";
export const UPDATE_ADDRESS_SUCCESS = "Profile/UPDATE_ADDRESS_SUCCESS";
export const UPDATE_ADDRESS_ERROR = "Profile/UPDATE_ADDRESS_ERROR";


export const dispatchProfileDataPending = () => ({
    type: FETCHING_PROFILE_PENDING
});

export const dispatchProfileDataSuccess = (user) => ({
    type: FETCHING_PROFILE_SUCCESS,
    payload: user
});

export const dispatchProfileDataError = (error) => ({
    type: FETCHING_PROFILE_ERROR,
    error: error
});


export const dispatchUpdateAddressSuccess = (error) => ({
    type: UPDATE_ADDRESS_SUCCESS,
    error: error
});

export const dispatchUpdateAddressError = (error) => ({
    type: UPDATE_ADDRESS_ERROR,
    error: error
});


export const setInputAddress = (value) => dispatch => {
    dispatch({
        type: UPDATE_ADDRESS_INPUT,
        payload: value
    })

};


export const fetchingProfileData = (props) => async dispatch => {

    dispatch(dispatchProfileDataPending());
    try {
        const userId = localStorage.getItem("model_buyer_user_id");
        const url = `users/${userId}`;
        const profileData = await get(url);
        dispatch(dispatchProfileDataSuccess(profileData));
    } catch (e) {
        console.log(e);
        props.history.push(`/app/home`);
        dispatch(dispatchProfileDataError(e));

    }
};


export const updateAddress = (props, address) => async dispatch => {
    console.log("Confirm address update");
    try {
        const data = {
            address: address
        };
        const userId = localStorage.getItem("model_buyer_user_id");
        const url = `users/${userId}/address`;
        const userUpdateAddressResponse = await post(url, data);
        console.log(userUpdateAddressResponse)
        toast.success("Address updated");
        dispatch(dispatchUpdateAddressSuccess());

    } catch (e) {
        toast.error("Error updating address");
        dispatch(dispatchUpdateAddressError());
    }


};


export default function ProfileReducer(state = initialState, action) {
    switch (action.type) {

        case FETCHING_PROFILE_PENDING:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case FETCHING_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                user: {
                    ...action.payload
                },
                address: action.payload.address
            };
        case FETCHING_PROFILE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                user: null
            };
        case UPDATE_ADDRESS_INPUT:
            return {
                ...state,
                address: action.payload


            };
        case UPDATE_ADDRESS_PENDING:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case UPDATE_ADDRESS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
            };
        case UPDATE_ADDRESS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };

        default:
            return state;
    }
}
