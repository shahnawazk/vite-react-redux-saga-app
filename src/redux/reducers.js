import { ADD_TO_CART, GET_USERS_SUCCESS } from "./constants";

export const AppState = (state = { cart: [], users: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.info(`${ADD_TO_CART} reducer is called!`, action);
      return { ...state, cart: [...state.cart, action.data] };
    case GET_USERS_SUCCESS:
      console.info(`${GET_USERS_SUCCESS} reducer is called!`, action);
      return { ...state, users: action.users };
    default:
      return state;
  }
};
