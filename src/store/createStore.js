import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { MainReducer } from '../routes/main/controller/MainReducer';
import { HomeReducer } from '../routes/home/controller/HomeReducer';
import { CreatePostReducer } from '../routes/createPost/controller/CreatePostReducer';

const reducer = combineReducers({
    main: MainReducer,
    home: HomeReducer,
    createPost: CreatePostReducer,
});

export const store = createStore( 
    reducer,
    applyMiddleware(thunk),
)