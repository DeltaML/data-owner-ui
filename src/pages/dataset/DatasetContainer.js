import {compose, withHandlers} from "recompose";
import {withRouter} from "react-router-dom";
import DatasetView from "./Dataset";
import {connect} from "react-redux";
import {uploadFile, saveDataSet} from "../dataset/DatasetState";



export default compose(
    connect(
        state => ({
            error: state.dataset.error,
            file: state.dataset.file,
            fileName: state.dataset.fileName,
        }),
        {saveDataSet, uploadFile}
    ),
    withRouter,
    withHandlers({

        handleSaveDataSet: props => (event) => {
            props.saveDataSet(props)
        },
        handleUploadFile: props => (event) => {
            props.uploadFile(event.target.files)
        }
    }),

)(DatasetView);
