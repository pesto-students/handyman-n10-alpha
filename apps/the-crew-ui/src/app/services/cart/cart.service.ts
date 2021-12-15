enum CartDetails {
  CART_ITEMS = 'cart_items',
}

/**
 * Get cart items from local storage
 * @returns cart items
 */
function getCartItems() {
  return localStorage.getItem(CartDetails.CART_ITEMS);
}

/**
 * Set cart items into local storage
 * @param sessionId
 */
function setCartItems(sessionObject: string) {
  localStorage.setItem(CartDetails.CART_ITEMS, sessionObject);
}

/**
 * Removes cart items object from local storage
 */
function removeCartItems() {
  localStorage.removeItem(CartDetails.CART_ITEMS);
}

export { getCartItems, setCartItems, removeCartItems };

export const CartSessionService = {
  getCartItems,
  setCartItems,
  removeCartItems,
};
