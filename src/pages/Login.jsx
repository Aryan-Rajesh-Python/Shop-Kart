import React, {useState, useContext} from "react";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../hooks/UserContext";

const Login = () => {
  const [failLogin, setfailLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(UserContext);

  const userLogIn = () => {
    axios({
      method: "post",
      url: " http://localhost:5000/login",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        login(email);
      })
      .catch((err) => {
        console.log(err);
        setfailLogin(true);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white w-[450px] m-auto mt-[20vh] p-10">
        <h1 className="text-[30px] font-semibold mb-5">Login</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="bg-[#e4ecf8] w-full h-[40px] rounded-full px-4 my-4"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-[#e4ecf8] w-full h-[40px] rounded-full px-4 mt-2"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="flex justify-between items-center mt-5">
          <div className="flex-1 text-[#0379ed] text-[18px] ">
            <Link to="/signin">New User? Create an Account.</Link>
          </div>
          <button
            onClick={userLogIn}
            className="w-[150px] bg-[#0379ed] rounded-full text-[18px] px-1 py-2 ml-[50px] text-white"
          >
            Login
          </button>
        </div>
        {failLogin && (
          <h2 className="text-[#FF0000] text-[18px] mt-4 flex justify-center items-center">
            Please Enter correct email or password
          </h2>
        )}
      </div>
    </div>
  );
};

export default Login;
