import {
    USERS_SUCCESS,
    USERS_FAIL,
    USERS_MESSAGE,
  } from "./types";
  
import UserService from "../services/user.service";

export const users = () => (dispatch) => {
    return UserService.getPosts().then(
      (data) => {
        console.log("data",data)
        dispatch({
          type: USERS_SUCCESS,
          payload: data.data,
        });
  
        return Promise.resolve();
      },
      (error) => {
         console.log("error",error)
        const message = error.response.data
          // (error.response &&
          //   error.response.data &&
          //   error.response.data.message) ||
          // error.message ||
          // error.toString();
  
        dispatch({
          type: USERS_FAIL,
        });
  
        dispatch({
          type: USERS_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };