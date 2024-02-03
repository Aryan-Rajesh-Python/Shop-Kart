import React from "react";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";

const Home = ({loggedIn, setLoggedIn}) => {
  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Homepage />
    </div>
  );
};

export default Home;
