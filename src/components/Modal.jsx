import React from "react";

const Modal = () => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-[400px] h-[300px] flex flex-col justify-center items-center">
        <img
          src="/tick.png"
          alt=""
          className="w-[300px] h-[200px] object-contain"
        />
        <div className="text-[24px] font-bold">Order Placed Successfully</div>
        <div>It will be delivered in 5 days</div>
      </div>
    </div>
  );
};

export default Modal;
