import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk'

import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(ReduxThunk)
);

export default store;