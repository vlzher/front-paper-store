import React, {useEffect, useState} from 'react';
import PozycjaKoszyk from "./PozycjaKoszyk.jsx";
import {useNavigate} from "react-router-dom";
import {Button} from "flowbite-react";
const PRODUCTS_KEY = "products-key";

const Koszyk = () => {
    const navigate = useNavigate();
    const [products,setProducts] = useState(JSON.parse(localStorage.getItem(PRODUCTS_KEY) || "[]"));
    const [priceOverall, setPriceOverall] = useState(0);

    useEffect(() => {
        let price = 0;
        products.forEach((product) => {
            price += product.price * (product.counter || 1);
        })
        setPriceOverall(price);
    }, [products])

    useEffect(() => {
        console.log(products)
    }, [])

    function zlozZamowienie() {
        localStorage.setItem(PRODUCTS_KEY, "")
        setProducts([])
        navigate("/klient-koszyk/");
    }

    const increaseCounter = (id) => {
        const newProducts = [...products];
        const product = newProducts.find((product) => product.id === id);
        product.counter ? product.counter++ : product.counter = 2;
        setProducts(newProducts);
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products))
    }


    const decreaseCounter = (id) => {
        const newProducts = [...products];
        const product = newProducts.find((product) => product.id === id);
        product.counter ? product.counter-- : product.counter = 1;
        setProducts(newProducts);
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products))
    }

    const removePosition = (id) => {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts)
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(newProducts))
    }


    return (

        <div className="w-full min-h-screen bg-white flex flex-col items-center px-10 pt-10">
            <div className={"w-full flex justify-between"}>
                <div className={'font-semibold text-3xl pt-5 text-black flex items-center justify-center'}>Koszyk</div>
                <button
                    type="button"
                    onClick={() => navigate('/klient-koszyk')}
                    className="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Powrót
                </button>
            </div>
            <div className={"w-full flex flex-row mt-10"}>
            <div className={"w-1/2 flex flex-col items-center"}>
                {products.map((product) => (
                    <PozycjaKoszyk key={product.id} id={product.id} imageSrc={product.imageURL}
                                      positionName={product.name}
                                   cena={product.price}
                                   counter={product.counter ? product.counter : 1}
                                   funcIncrease={() => increaseCounter(product.id)}
                                   funcDecrease={() => decreaseCounter(product.id)}
                                   onDelete={() => removePosition(product.id)}
                    />

                ))}
            </div>
            <div className={"w-1/2 flex flex-col m-5 bg-gray-300 p-5 rounded h-64"}>
                <div className={"text-black text-2xl mb-10"}>PODSUMOWANIE</div>
                <div className={"flex justify-between items-center"}>
                    <div className={"text-md text-black"}>Wartosc koszyka</div>
                    <div className={"text-md text-black"}>{priceOverall} zl</div>
                </div>
                <div className={"flex justify-between items-center"}>
                    <div className={"text-md text-black"}>Dostawa</div>
                    <div className={"text-l text-black"} >Jeszcze nie obliczona</div>
                </div>
                <div className={"w-full flex items-end justify-center h-80"}>
                    <Button color={"failure"} onClick={zlozZamowienie}>Złóż zamówienie</Button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Koszyk;