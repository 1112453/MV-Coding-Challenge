import { 
    CREATE_POST,
    VOTE_POST_UP,
    VOTE_POST_DOWN
} from './ActionTypes';

const initialState = {
    id: 1,
    list: [],
}

function handleCreatePost(state, action){
    let item = Object.assign({ id: state.id }, action.payload);
    return {
        ...state,
        list: state.list.concat(item),
        id: state.id + 1
    }
}

function handleVotePostUp(state, action){
    let listTemp = state.list.slice();
    let index = listTemp.findIndex(item => item.id === action.payload)
    listTemp[index].vote = listTemp[index].vote + 1;
    if(index > 0 && listTemp[index - 1].vote < listTemp[index].vote){
        let itemTemp = listTemp[index - 1];
        listTemp[index - 1] = listTemp[index];
        listTemp[index] = itemTemp;
    }
    return {
        ...state,
        list: listTemp
    }
}
function handleVotePostDown(state, action){
    let listTemp = state.list.slice();
    let index = listTemp.findIndex(item => item.id === action.payload)
    listTemp[index].vote = listTemp[index].vote - 1;
    if(index != (listTemp.length -1) && listTemp[index + 1].vote > listTemp[index].vote){
        let itemTemp = listTemp[index + 1];
        listTemp[index + 1] = listTemp[index];
        listTemp[index] = itemTemp;
    }
    return {
        ...state,
        list: listTemp
    }
}

const ACTION_HANDLES = {
    CREATE_POST: handleCreatePost,
    VOTE_POST_UP: handleVotePostUp,
    VOTE_POST_DOWN: handleVotePostDown
}

export function HomeReducer(state = initialState, action){
    const handler = ACTION_HANDLES[action.type];

    return handler ? handler(state, action) : state;
}