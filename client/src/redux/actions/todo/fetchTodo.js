import * as actionTypes from "../actionType";
import { data } from "../../../utilities/shared/utility";
import axios from "axios";
export const todoFetchSuccess = (payload) => {
  return {
    type: actionTypes.TODO_INIT_FETCH_SUCCESS,
    payload: payload,
  };
};
export const todoFetchFail = (error) => {
  return {
    type: actionTypes.TODO_INIT_FETCH_FAIL,
    error: error,
  };
};
export function todo() {
  //const options = {};
  return (dispatch) => {
    console.log(data);
    axios
      .get(`http://192.168.56.1:5000/api/genres`)
      .then((res) => {
        console.log(res);
        dispatch(todoFetchSuccess(data));
      })
      .catch((err) => {
        dispatch(todoFetchFail(err));
      });
  };
}
