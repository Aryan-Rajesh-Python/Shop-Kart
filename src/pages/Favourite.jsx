import React from "react";
import Favourites from "../components/Favourites";
import Navbar from "../components/Navbar";

const Favourite = ({loggedIn, setLoggedIn}) => {
  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Favourites />
    </div>
  );
};

export default Favourite;
