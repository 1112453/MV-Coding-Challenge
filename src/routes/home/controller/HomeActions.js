import {
    CREATE_POST
} from './ActionTypes';

export function createPost(data){
    return dispatch =>{
        dispatch({
          type: CREATE_POST,
          payload: data
        });
      }
}
