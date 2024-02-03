import axios from "axios";
import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import {UserContext} from "../hooks/UserContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(UserContext);
  const navigate = useNavigate();
  const userSignIn = () => {
    axios({
      method: "post",
      url: " http://localhost:5000/users",
      data: {
        email,
        password,
      },
    }).then((res) => {
      // setLoggedIn(true);
      login(email);
      navigate("/");
    });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white w-[450px] m-auto mt-[20vh] p-10">
        <h1 className="text-[30px] font-semibold mb-5">Signin</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="bg-[rgb(228,236,248)] w-full h-[40px] rounded-full px-4 my-4"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-[#e4ecf8] w-full h-[40px] rounded-full px-4 mt-2"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="flex justify-between items-center mt-7">
          <div className="flex-1 text-[#0379ed] text-[18px] cursor-pointer"></div>
          <button
            className="w-[150px] bg-[#0379ed] rounded-full text-[18px] px-1 py-2 ml-[50px] text-white"
            onClick={userSignIn}
          >
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
