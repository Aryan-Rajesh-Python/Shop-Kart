import React, {useContext} from "react";
import {AiFillHeart} from "react-icons/ai";
import {HiShoppingCart} from "react-icons/hi";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../hooks/UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {user, logout} = useContext(UserContext);
  return (
    <div className="bg-[#0379ed] h-[10vh]">
      <div className="w-[900px] flex justify-between mx-auto items-center cursor-pointer">
        <div
          className="text-[36px] text-white mt-2 font-semibold italic"
          onClick={() => {
            navigate("/");
          }}
        >
          ShopKart
        </div>
        <div className="flex justify-center items-center">
          <div
            className="text-[20px] text-white mx-4 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Products
          </div>
          {user.auth ? (
            <div
              className="text-[20px] text-white mx-4 cursor-pointer"
              onClick={logout}
            >
              Logout
            </div>
          ) : (
            <div
              className="text-[20px] text-white mx-4 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Login
            </div>
          )}
          <div
            className="text-[24px] mt-2 ml-4 cursor-pointer"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <HiShoppingCart />
          </div>
          <div
            className="text-[24px] mt-2 ml-4 cursor-pointer"
            onClick={() => {
              navigate("/favourites");
            }}
          >
            <AiFillHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
