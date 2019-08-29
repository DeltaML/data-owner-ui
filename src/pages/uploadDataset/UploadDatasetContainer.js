import {compose, withHandlers} from "recompose";
import {withRouter} from "react-router-dom";
import UploadDatasetView from "./UploadDataset";
import {connect} from "react-redux";
import {uploadFile, saveDataSet} from "../uploadDataset/UploadDatasetState";
import uploadDataset from "./UploadDatasetState";



export default compose(
    connect(
        state => ({
            error: state.uploadDataset.error,
            file: state.uploadDataset.file
        }),
        {saveDataSet, uploadFile}
    ),
    withRouter,
    withHandlers({

        handleSaveDataSet: props => () => {
            props.saveDataSet(props)
        },
        handleUploadFile: props => (event) => {
            props.uploadFile(event.target.files)
        }
    })

)(UploadDatasetView);
