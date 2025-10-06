import { PLACED_ORDER } from "./order.types.js";

export const addToOrder = (product) => {
  return {
    type: PLACED_ORDER,
    payload: product,
  };
};
