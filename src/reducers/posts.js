import {
    POST_SUCCESS,
    POST_FAIL,
    POST_MESSAGE,
  } from "../actions/types";
  
const post = [];

const initialState = post;
  
export default function  posts(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      
      case POST_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          post: payload,
        };
      case POST_FAIL:
        return {
          ...state,
          post: null,
        };
      case POST_MESSAGE:
          return {
            ...state,
            post: "No Data Found",
          };  
      default:
        return state;
    }
  }

  