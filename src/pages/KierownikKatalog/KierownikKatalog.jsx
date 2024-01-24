import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Product from "../utils/Product.jsx";
import ShowProductModal from "./ShowProductModal.jsx";
import AddingPositionModal from "./AddingPositionModal.jsx";
import {getAllProducts} from "../api/api.js";

const KierownikKatalog = () => {
  const navigate = useNavigate();
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [idProduct, setIdProduct] = useState(null);


  async function updateProducts(){
    const data = await getAllProducts();
    setProducts(data.data);
  }

  useEffect(() => {
    updateProducts().then((res) => setProducts(res.data));
  },[])

  return (
    <div className="w-full h-full bg-white flex flex-col p-5">
      <div className="flex justify-between h-12 w-full">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Powrot
        </button>
        <button
          type="button"
          onClick={() => setOpenAddModal(true)}
          className="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Dodaj pozycje
        </button>
      </div>
      <div className="p-5 w-full h-full grid grid-cols-4 grid-rows-3 gap-20 ">
        {products.map((product) => (

        <Product key={ product.id }
          imageUrl={product.imageUrl}
          positionName={product.name}
          positionPrice={product.price}
          onClickFunc={() => {setIdProduct(product.id); setOpenModalProduct(true); }}
        />))}
      </div>
        <ShowProductModal setOpenModal={setOpenModalProduct} openModal={openModalProduct} idProduct={idProduct} updateProducts={updateProducts}/>
      <AddingPositionModal openModal={openAddModal} setOpenModal={setOpenAddModal} updateProducts={updateProducts}/>
    </div>
  );
};

export default KierownikKatalog;
