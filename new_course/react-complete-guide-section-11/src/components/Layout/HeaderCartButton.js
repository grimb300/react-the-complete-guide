import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((prevTotal, item) => {
    return prevTotal + item.amount;
  }, 0);

  const btnClasses = `${classes.button}  ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  const { items: cartItems } = cartCtx;
  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    // Reset the state after 250ms
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 250);

    // Return the cleanup function which clears the timer
    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
