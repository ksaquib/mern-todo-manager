import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  EDIT_ITEM,
  ITEM_DELETED_STATUS,
} from "../actions/actionType";

const initialState = {
  task_items: [],
  loading: false,
  deleteStatus: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        task_items: action.payload,
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        task_items: state.task_items.filter(
          (item) => item._id !== action.payload
        ),
        deleteLoading: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        task_items: [action.payload, ...state.task_items],
      };
    case EDIT_ITEM:
      const { id, updatedData } = action.payload;
      let data = [...state.task_items];
      data[data.findIndex((val) => val._id === id)] = updatedData;
      return {
        ...state,
        task_items: data,
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ITEM_DELETED_STATUS:
      return {
        ...state,
        deleteStatus: true,
      };
    default:
      return state;
  }
}
