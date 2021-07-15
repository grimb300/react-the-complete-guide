import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // This will run only once
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // This will run on every cart update
  useEffect(() => {
    // Do not run until initialized
    if (isInitial) {
      isInitial = false;
      return;
    }

    // Don't send the data if the cart hasn't changed
    if (!cart.changed) {
      return;
    }

    dispatch(
      sendCartData({
        items: cart.items,
        totalQuantity: cart.totalQuantity,
      })
    );
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
