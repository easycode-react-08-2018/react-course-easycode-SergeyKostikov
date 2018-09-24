
import {applyMiddleware as dispatch} from "redux";

export const LOGIN_ACTION_TYPE = "LOGIN_ACTION"

export const loginAction = (data) =>{
    dispatch(
      {
        type: LOGIN_ACTION_TYPE,
        payload: data
      }
    )
}