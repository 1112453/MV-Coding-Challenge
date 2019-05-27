import {
    CREATE_POST,
    VOTE_POST_UP,
    VOTE_POST_DOWN
} from './ActionTypes';
import update from 'immutability-helper';

const initialState = {
    id: 1,
    list: [],
}

function handleCreatePost(state, action) {
    let item = Object.assign({ id: state.id }, action.payload);
    let listTemp = state.list.slice();
    listTemp = listTemp.concat(item);
    listTemp.sort((a, b) => (a.vote < b.vote) ? 1 : ((b.vote < a.vote) ? -1 : 0));
    return update(state, {
        list: { $set: listTemp },
        id: { $set: state.id + 1 }
    });
}

function handleVotePostUp(state, action) {
    let listTemp = state.list.slice();
    let index = listTemp.findIndex(item => item.id === action.payload)
    listTemp[index].vote = listTemp[index].vote + 1;
    listTemp.sort((a, b) => (a.vote < b.vote) ? 1 : ((b.vote < a.vote) ? -1 : 0));
    return update(state, {
        list: { $set: listTemp }
    });
}
function handleVotePostDown(state, action) {
    let listTemp = state.list.slice();
    let index = listTemp.findIndex(item => item.id === action.payload)
    listTemp[index].vote = listTemp[index].vote - 1;
    listTemp.sort((a, b) => (a.vote < b.vote) ? 1 : ((b.vote < a.vote) ? -1 : 0));
    return update(state, {
        list: { $set: listTemp }
    });
}

const ACTION_HANDLES = {
    CREATE_POST: handleCreatePost,
    VOTE_POST_UP: handleVotePostUp,
    VOTE_POST_DOWN: handleVotePostDown
}

export function HomeReducer(state = initialState, action) {
    const handler = ACTION_HANDLES[action.type];

    return handler ? handler(state, action) : state;
}