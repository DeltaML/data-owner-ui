import {combineReducers} from 'redux';

import layout from '../components/Layout/LayoutState';
import login from '../pages/login/LoginState';
import home from '../pages/home/HomeState';
import uploadDataset from '../pages/uploadDataset/UploadDatasetState';
import datasets from '../pages/datasets/DatasetsState';
import models from '../pages/models/ModelsState';
import model from '../pages/model/ModelState';
import profile from '../pages/profile/ProfileState';

export default combineReducers({
    layout,
    login,
    home,
    datasets,
    uploadDataset,
    models,
    model,
    profile
});