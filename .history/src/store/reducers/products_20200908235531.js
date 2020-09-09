import { TOGGLE_FAV } from "../actions/products";
import {DELETE}

const initialState = {
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      /*
      The findIndex() method returns the index of the first element in the array that 
      satisfies the provided testing function. Otherwise, it returns -1,
       indicating that no element passed the test.
      */
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        ...state,
        products: updatedProducts,
      };
      case 
    default:
      return state;
  }
};

export default productReducer;
