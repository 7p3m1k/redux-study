import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_REQUEST,
} from './types';

const fetchCommentSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

const fetchCommentFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

const fetchCommentRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentRequest());
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((comments) => dispatch(fetchCommentSuccess(comments)))
      .catch((error) => dispatch(fetchCommentFailure(error)));
  };
};

//react thunk를 사용했기 때문에 return으로 dispatch를 인자로 받은 함수를 사용가능
