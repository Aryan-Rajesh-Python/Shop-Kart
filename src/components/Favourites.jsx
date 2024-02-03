/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import axios from "axios";
import ProductModal from "./ProductModal";
import Favouritescard from "./FavouritesCard";

const Favourites = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:5000/favourites")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) return <p>Loading...</p>;

  if (products.length === 0)
    return (
      <div className="h-[30vh] flex flex-col justify-center items-center font-bold text-[36px]">
        No Favourites
        <div className="mt-5 font-bold text-[24px] text-black">
          Go Back to home
        </div>
      </div>
    );

  return (
    <div className="w-[1350px] mx-auto h-full py-5 grid grid-cols-5 gap-5">
      {products.map((product) => (
        <Favouritescard
          product={product}
          products={products}
          setProducts={setProducts}
          setModalProduct={setModalProduct}
          setModal={setModal}
        />
      ))}
      {modal && (
        <ProductModal
          product={modalProduct}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Favourites;
