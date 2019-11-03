import axios from "axios";
import { PRODUCT_SERVER } from "../components/utils/misc";
import {
  GET_PRODUCTS_BY_SELL,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_BRANDS,
  ADD_BRAND,
  GET_WOODS,
  ADD_WOOD,
  GET_PRODUCTS_TO_SHOP,
  ADD_PRODUCT,
  CLEAR_PRODUCT,
  GET_PRODUCT_DETAIL,
  CLEAR_PRODUCT_DETAIL
} from "./types";

export function getProductDetail(id) {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type='single'`)
    .then(res => res.data[0]);
  return {
    type: GET_PRODUCT_DETAIL,
    payload: request
  };
}

export function clearProductDetail() {
  return {
    type: CLEAR_PRODUCT_DETAIL,
    payload: ""
  };
}

export function getProductsByArrival() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then(response => response.data);

  return {
    type: GET_PRODUCTS_BY_SELL,
    payload: request
  };
}

export const getProductsBySell = () => {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data);

  return {
    type: GET_PRODUCTS_BY_ARRIVAL,
    payload: request
  };
};

export const getBrands = () => {
  const request = axios
    .get(`${PRODUCT_SERVER}/brands`)
    .then(response => response.data);

  return {
    type: GET_BRANDS,
    payload: request
  };
};

export const getWoods = () => {
  const request = axios
    .get(`${PRODUCT_SERVER}/woods`)
    .then(response => response.data);

  return {
    type: GET_WOODS,
    payload: request
  };
};

export const getProductsToShop = (
  skip,
  limit,
  filters = [],
  previousState = []
) => {
  const data = {
    skip,
    limit,
    filters
  };

  const request = axios.post(`${PRODUCT_SERVER}/shop`, data).then(response => {
    let newState = [...previousState, ...response.data.articles];
    return {
      size: response.data.size,
      articles: newState
    };
  });

  return {
    type: GET_PRODUCTS_TO_SHOP,
    payload: request
  };
};

export const addProduct = dataToSubmit => {
  const request = axios
    .post(`${PRODUCT_SERVER}/article`, dataToSubmit)
    .then(response => response.data);
  return {
    type: ADD_PRODUCT,
    payload: request
  };
};

export const clearProduct = () => {
  return {
    type: CLEAR_PRODUCT,
    payload: ""
  };
};

export function addBrand(dataToSubmit, existingBrands) {
  const request = axios
    .post(`${PRODUCT_SERVER}/brand`, dataToSubmit)
    .then(response => {
      let brands = [...existingBrands, response.data.brand];
      return {
        success: response.data.success,
        brands
      };
    });
  return {
    type: ADD_BRAND,
    payload: request
  };
}

export function addWood(dataToSubmit, existingWoods) {
  const request = axios
    .post(`${PRODUCT_SERVER}/wood`, dataToSubmit)
    .then(response => {
      let woods = [...existingWoods, response.data.wood];
      return {
        success: response.data.success,
        woods
      };
    });
  return {
    type: ADD_WOOD,
    payload: request
  };
}
