export const addDecimals = (num) => {
  return Math.round((num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Items Price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  // Shipping price
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100);
  // Tax price
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
  // Total price
  state.totalPrice =
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice);

  localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  return state;
};
