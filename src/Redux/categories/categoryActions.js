import axios from "axios";
import {
  FETCH_CATEGORYS_REQUEST,
  FETCH_CATEGORYS_SUCCESS,
  FETCH_CATEGORYS_FAILURE,
} from "./categoryTypes";

const fetchCategorysRequest = () => {
  return {
    type: FETCH_CATEGORYS_REQUEST,
  };
};

const fetchCaterorysSuccess = (categories) => {
  return {
    type: FETCH_CATEGORYS_SUCCESS,
    payload: categories,
  };
};

const fetchCategorysFailure = (error) => {
  return {
    type: FETCH_CATEGORYS_FAILURE,
    payload: error,
  };
};

const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategorysRequest);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const categories = response.data;
        dispatch(fetchCaterorysSuccess(categories));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCategorysFailure(error));
      });
  };
};

export default {
  fetchCategorysRequest,
  fetchCaterorysSuccess,
  fetchCategorysFailure,
  fetchCategories,
};
