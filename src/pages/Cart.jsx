import React from "react";
import CartPage from "../components/CartPage";
import Navbar from "../components/Navbar";

const Cart = ({setLoggedIn, loggedIn}) => {
  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <CartPage />
    </div>
  );
};

export default Cart;
