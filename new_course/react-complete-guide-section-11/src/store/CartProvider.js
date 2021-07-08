import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // I'm deviating from how the instructor is doing things here.
  // I find he's repeating code a little too much for my taste.

  // If it is not a recognized action type, return the default state
  const isAdd = action.type === "ADD";
  const isRemove = action.type === "REMOVE";
  if (!(isAdd || isRemove)) {
    return defaultCartState;
  }

  // Make a copy of the current cart items and total amount to be updated
  let updatedCartItems = [...state.items];
  let updatedTotalAmount = state.totalAmount;

  // The item ID to update depends on the action type
  const updatedCartItemId = isAdd ? action.item.id : action.id;

  // Find the existing item index by the ID
  const cartItemIndex = state.items.findIndex(
    (item) => item.id === updatedCartItemId
  );
  const existingCartItem = state.items[cartItemIndex];

  // If it is an ADD action
  if (isAdd) {
    // Check if there is an existing item
    if (existingCartItem) {
      // Update the existing item total
      updatedCartItems[cartItemIndex] = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
    } else {
      // Add the new item to the list
      updatedCartItems = state.items.concat(action.item);
    }

    // Update the total amount
    updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
  }

  // If it is a REMOVE action
  if (isRemove) {
    // Check if there is an existing item
    if (existingCartItem) {
      // Check if the existing item amount is 1
      if (existingCartItem.amount === 1) {
        // Completely remove the item from the list
        updatedCartItems = state.items.filter(
          (item) => item.id !== updatedCartItemId
        );
      } else {
        // Reduce the item amount by 1
        updatedCartItems[cartItemIndex] = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
      }

      // Update the total amount
      updatedTotalAmount = state.totalAmount - existingCartItem.price;
    }
    // If there is no existing item, do nothing
  }

  // Return the updated state
  return { items: updatedCartItems, totalAmount: updatedTotalAmount };
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    console.log(`Saw removeItemFromCartHandler(${id})`);
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
