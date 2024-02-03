import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

import { UserContext } from "./hooks/UserContext";
import Favourite from "./pages/Favourite";

export default function App() {

  const { user } = useContext(UserContext)
  console.log(user.auth)

  const logged = () => {
    return (
      < Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourite />} />
      </ Routes >
    )
  }
  const log = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    )
  }

  return (
    <BrowserRouter>
      {user.auth ? logged() : log()}
    </BrowserRouter >
  )
}

