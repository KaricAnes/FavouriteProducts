export const TOGGLE_FAV = "TOGGLE_FAV";
export const DELETE = "DELETE";

export const toggleFav = (id) => {
  return { type: TOGGLE_FAV, productId: id };
};

export const deleteHandler = (id) => {
  return { type: DELETE, productId: id };
};
