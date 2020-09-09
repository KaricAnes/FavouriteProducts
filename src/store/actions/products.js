export const TOGGLE_FAV = "TOGGLE_FAV";
export const DELETE = "DELETE";

export const toggleFav = (id) => {
  return { type: TOGGLE_FAV, productId: id };
};

export const deleteHandlerAction = (id) => {
  return { type: DELETE, productId: id };
};
