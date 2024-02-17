import { ADD_TO_CART, GET_USERS_REQUEST } from "./constants";

export const addToCart = (data) => {
  console.info(`${ADD_TO_CART} action is called!`, data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});
