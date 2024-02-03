/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import Cards from "./Cards";
import axios from "axios";
import ProductModal from "./ProductModal";

const Homepage = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-[1350px] mx-auto h-full py-5 grid grid-cols-5 gap-5">
      {products.map((product) => (
        <Cards
          product={product}
          setModal={setModal}
          setModalProduct={setModalProduct}
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

export default Homepage;
