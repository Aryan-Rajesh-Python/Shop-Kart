import axios from "axios";
import React, {useRef, useEffect} from "react";
import {AiFillHeart} from "react-icons/ai";

const ProductModal = ({product, modal, setModal}) => {
  const modalRef = useRef();
  useEffect(() => {
    const getClickOutside = (e) => {
      if (modal && e.target === modalRef.current) {
        setModal(false);
      }
    };
    window.addEventListener("click", getClickOutside);

    return () => {
      window.removeEventListener("click", getClickOutside);
    };
  }, [modal, setModal]);

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
    <div
      className="fixed top-0 bottom-0 right-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
      ref={modalRef}
    >
      <div className="bg-white w-[1100px] h-[600px] flex justify-center items-center">
        <div className="flex-1 pl-20 border-r-2">
          <img
            src={product.image}
            alt=""
            className="w-[400px] h-[500px] object-fill"
          />
        </div>
        <div className="flex-1 p-5">
          <div className="flex justify-between items-center">
            <div className="font-extrabold text-[24px] w-[400px] pr-10">
              {product.title}
            </div>
            <div className="cursor-pointer" onClick={addToFav}>
              <AiFillHeart color="red" className="text-[32px] mr-10" />
            </div>
          </div>
          <div className="text-[14px] mt-2 ">{product.description}</div>
          <div className="text-[24px] mt-5 font-semibold">
            Rs. {product.amount}
          </div>
          <div className="flex items-center mt-20 mx-10">
            <div className="p-2 px-5 border-2 border-black text-[20px] mr-20 cursor-pointer">
              Buy Now
            </div>
            <div
              className="p-2 px-3 border-2 bg-black text-white border-black text-[20px] cursor-pointer"
              onClick={addToCart}
            >
              Add to Basket
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
