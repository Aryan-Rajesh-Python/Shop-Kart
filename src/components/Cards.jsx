import axios from "axios";
import React from "react";
import {AiFillHeart} from "react-icons/ai";
import {FaCartPlus} from "react-icons/fa";

const Cards = ({product, setModal, setModalProduct}) => {
  const addToCart = () => {
    axios({
      method: "post",
      url: " http://localhost:5000/orders",
      data: product,
    });
  };
  const addToFav = () => {
    axios({
      method: "post",
      url: " http://localhost:5000/favourites",
      data: product,
    });
  };
  return (
    <div className="w-[250px] bg-white shadow-md h-[300px] rounded-md">
      <div
        onClick={() => {
          setModal(true);
          setModalProduct(product);
        }}
      >
        <img
          src={product.image}
          alt=""
          className="h-[125px] w-full object-cover"
        />
        <div className="p-4">
          <h1 className="text-[14px] text-gray-500 font-semibold">
            {product.title}
          </h1>
          <h1 className="text-[14px] text-gray-500 font-semibold">
            {" "}
            Rs. {product.amount}
          </h1>
          <div className="mt-2 bg-green-600 text-[11px] w-6 px-1 text-white">
            {product.rating}
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between px-6">
        <div
          className="text-[24px] text-gray-500 cursor-pointer"
          onClick={addToFav}
        >
          <AiFillHeart />
        </div>
        <div
          className="text-[24px] text-gray-500 cursor-pointer"
          onClick={addToCart}
        >
          <FaCartPlus />
        </div>
      </div>
    </div>
  );
};

export default Cards;
