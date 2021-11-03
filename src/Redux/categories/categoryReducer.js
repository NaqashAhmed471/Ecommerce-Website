import {
  FETCH_CATEGORYS_REQUEST,
  FETCH_CATEGORYS_SUCCESS,
  FETCH_CATEGORYS_FAILURE,
} from "./categoryTypes";

const initialState = {
  loading: false,
  categories: [],
  error: "",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORYS_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
        error: "",
      };
    case FETCH_CATEGORYS_FAILURE:
      return {
        loading: false,
        categories: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default categoryReducer;
