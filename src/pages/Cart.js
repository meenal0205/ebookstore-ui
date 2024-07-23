import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import CardItem from "../Components/CardItem";
import userServices from "../services/userServices";
import { getToken } from "../utils/global";
import combinedServices from "../services/combinedServices";

const Cart = () => {
  const id = getToken();
  const [cart, setCart] = useState({});

  useEffect(() => {
    const getItems = async (id) => {
      try {
        const response = await userServices.getUserById(id);
        console.log(response.data.basket);
        setCart(response.data.basket);
        // console.log(cart);
      } catch (error) {
        console.log(error);
      }
    };
    getItems(id);
  }, [id]);

  const cartItems = Object.keys(cart).map((key) => (
    <CardItem key={key} id={key} count={cart[key]} />
  ));

  const buyCart = async () => {
    try {
      const response = await combinedServices.purchaseCart(id);
      console.log(response.data);
      alert(response.data);
    } catch (error) {}
  };

  return (
    <>
      <NavBar />
      <div>{cartItems}</div>
      <div className="flex justify-end m-4">
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={buyCart}
        >
          Buy cart
        </button>
      </div>
    </>
  );
};

export default Cart;
