import {
    USERS_SUCCESS,
    USERS_FAIL,
    USERS_MESSAGE,
  } from "../actions/types";
  
const user = [];

const initialState = user;
  
export default function  users(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      
      case USERS_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          users: payload,
        };
      case USERS_FAIL:
        return {
          ...state,
          users: null,
        };
      case USERS_MESSAGE:
          return {
            ...state,
            users: "No Data Found",
          };  
      default:
        return state;
    }
  }

  