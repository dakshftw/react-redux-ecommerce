const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case type.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};
