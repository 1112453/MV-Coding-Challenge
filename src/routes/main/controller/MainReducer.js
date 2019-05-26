import { 
} from './ActionTypes';

const initialState = {
}

const ACTION_HANDLES = {
}

export function MainReducer(state = initialState, action){
    const handler = ACTION_HANDLES[action.type];

    return handler ? handler(state, action) : state;
}