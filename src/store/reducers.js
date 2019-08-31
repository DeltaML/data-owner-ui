import {combineReducers} from 'redux';

import layout from '../components/Layout/LayoutState';
import login from '../pages/login/LoginState';
import home from '../pages/home/HomeState';
import uploadDataset from '../pages/uploadDataset/UploadDatasetState';
import datasets from '../pages/datasets/DatasetsState';
import models from '../pages/models/ModelsState';

export default combineReducers({
    layout,
    login,
    home,
    datasets,
    uploadDataset,
    models
});