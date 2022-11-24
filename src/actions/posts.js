import {
    POST_SUCCESS,
    POST_FAIL,
    POST_MESSAGE,
  } from "./types";
  
import UserService from "../services/user.service";

export const posts = () => (dispatch) => {
    return UserService.getPosts().then(
      (data) => {
        console.log("data",data)
        dispatch({
          type: POST_SUCCESS,
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
          type: POST_FAIL,
        });
  
        dispatch({
          type: POST_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };