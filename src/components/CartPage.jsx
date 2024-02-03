/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Cartcards from "./Cartcards";
import Modal from "./Modal";

const CartPage = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [sum, setSum] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products) {
      getPrice(products);
    }
  }, [products]);

  const getProducts = () => {
    axios
      .get("http://localhost:5000/orders")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPrice = (products) => {
    let s = 0;
    products.forEach((product) => {
      s = s + parseInt(product.amount);
    });
    setSum(s);
    setTotal(s - 50 + 100);
  };

  const placeOrder = () => {
    setModal(true);
    setTimeout(() => closeModal(), 3000);
    deleteOrder();
  };

  const closeModal = () => {
    setModal(false);
    navigate("/");
  };

  const deleteOrder = () => {
    const productsIdsArray = products.map((product) => product.id);
    productsIdsArray.forEach((id) => {
      axios.delete(`http://localhost:5000/orders/${id}`);
    });
  };

  if (loading) return <p>Loading...</p>;
  return products.length === 0 ? (
    <div className="h-[30vh] flex flex-col justify-center items-center font-bold text-[36px]">
      Nothing in Cart.
      <div className="mt-5 font-bold text-[24px] text-black">
        Go Back to home.
      </div>
    </div>
  ) : (
    <div className="w-[1200px] mx-auto h-full py-5 ">
      <div className="flex">
        <div className="w-[550px] mx-5 bg-white p-5 shadow-md rounded-md">
          <h1 className="font-bold text-[26px] mb-5">My Cart</h1>
          {products.map((product) => (
            <Cartcards
              product={product}
              products={products}
              setProducts={setProducts}
            />
          ))}
        </div>
        <div className="w-[350px] h-[300px] bg-white p-5 shadow-md rounded-md">
          <h1 className="font-bold text-[26px] text-gray-500">Price Details</h1>
          <div className="border-b-2 border-black">
            <div className="flex justify-between text-[14px] font-semibold my-4">
              <h2>Price</h2>
              <h2>{sum}</h2>
            </div>
            <div className="flex justify-between text-[14px] font-semibold my-4">
              <h2>Discount</h2>
              <h2>100</h2>
            </div>
            <div className="flex justify-between text-[14px] font-semibold my-4">
              <h2>Delivery</h2>
              <h2>50</h2>
            </div>
          </div>
          <div className="flex justify-between text-[20px] font-bold my-8">
            <h2>Total</h2>
            <h2>{total}</h2>
          </div>
        </div>
      </div>
      <button
        className="mx-5 mt-5 px-5 py-2 rounded-md text-white bg-[#0379ed]"
        onClick={placeOrder}
      >
        Place order
      </button>
      {modal && <Modal />}
    </div>
  );
};

export default CartPage;
