import {compose, lifecycle, withHandlers} from "recompose";
import {withRouter} from "react-router-dom";
import ProfileView from "./Profile";
import {connect} from "react-redux";
import {fetchingProfileData, updateAddress, setInputAddress} from "./ProfileState";


export default compose(
    connect(
        state => ({
            name: state.profile.user.name,
            email: state.profile.user.email,
            address: state.profile.address
        }),
        {fetchingProfileData, updateAddress, setInputAddress}
    ),
    withRouter,
    withHandlers({
        handleNameInput: props => (event) => {
            console.log("Not defined")
        },
        handleEmailInput: props => (event) => {
            console.log("Not defined")
        },
        handleAddressInput: props => (event) => {
           props.setInputAddress(event.target.value)
        },
        handleUpdateAddress: props => () => {
            props.updateAddress(props, props.address);
        }
    }),
    lifecycle({
        componentWillMount() {
            this.props.fetchingProfileData(this.props)
        }
    })

)(ProfileView);
