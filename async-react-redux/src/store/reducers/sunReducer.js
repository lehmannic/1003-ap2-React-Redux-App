import * as ACT from "../actions";

const initialState = {
  data: {},
  isFetching: false,
  error: "",
};

export const sunReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT.FETCH_SUN_START:
      return {
        ...state,
        isFetching: true,
      };
    case ACT.FETCH_SUN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        data: action.payload,
      };
    default:
      return state;
  }
};
