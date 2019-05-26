import { 
    CREATE_POST
} from './ActionTypes';

const initialState = {
    list: [],
}

function handleCreatePost(state, action){
    return {
        ...state,
        list: state.list.concat(action.payload)
    }
}

const ACTION_HANDLES = {
    CREATE_POST: handleCreatePost 
}

export function HomeReducer(state = initialState, action){
    const handler = ACTION_HANDLES[action.type];

    return handler ? handler(state, action) : state;
}