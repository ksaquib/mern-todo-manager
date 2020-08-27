import * as actionTypes from "../../actions/actionType";
import { updateObject } from "../../../utilities/shared/utility";
const initialState = {
  data: null,
  error: null,
};

const todoFetchSuccess = (state, action) => {
  return updateObject(state, {
    data: action.payload,
  });
};
const todoFetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_INIT_FETCH_SUCCESS:
      return todoFetchSuccess(state, action);
    case actionTypes.TODO_ADD_ITEM_POST_FAIL:
      return todoFetchFail(state, action);
    default:
      return state;
  }
};

export default reducer;
