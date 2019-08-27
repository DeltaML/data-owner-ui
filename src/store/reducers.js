import { combineReducers } from 'redux';

import layout from '../components/Layout/LayoutState';
import login from '../pages/login/LoginState';
import home from '../pages/home/HomeState';
import dataset from '../pages/dataset/DatasetState';
import model from '../pages/model/ModelState';

export default combineReducers({
  layout,
  login,
  home,
  dataset,
  model
});