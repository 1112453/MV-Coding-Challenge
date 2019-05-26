import {
    CREATE_POST,
    VOTE_POST_UP,
    VOTE_POST_DOWN
} from './ActionTypes';

export function createPost(data){
    return dispatch =>{
        dispatch({
          type: CREATE_POST,
          payload: data
        });
      }
}
export function votePostUp(id){
  return dispatch =>{
      dispatch({
        type: VOTE_POST_UP,
        payload: id
      });
    }
}
export function votePostDown(id){
  return dispatch =>{
      dispatch({
        type: VOTE_POST_DOWN,
        payload: id
      });
    }
}