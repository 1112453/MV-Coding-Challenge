import { 
} from './ActionTypes';

const initialState = {
    items: [],
}

const ACTION_HANDLES = {
}

export function HomeReducer(state = initialState, action){
    const handler = ACTION_HANDLES[action.type];

    return handler ? handler(state, action) : state;
}