import React, {useState} from 'react';
import  ShoppingCartIcon from '../../assets/cart.svg';
import {Button, RangeSlider} from "flowbite-react";
import {useNavigate} from "react-router-dom";
import Pozycja from "./Pozycja.jsx";
const KlientKoszyk = () => {
    const [rangeValues, setRangeValues] = useState(0);
    const navigate = useNavigate();
    const handleRangeChange = (value) => {
        setRangeValues(value.target.value);
    };
    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center px-10 pt-10">
            <div className="w-full flex justify-around mb-5">
                <Button  onClick={() => navigate('/')}>Back</Button>
                <form className={"w-1/2"}>
                    <label htmlFor="default-search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Czego szukasz" required/>
                            <button type="submit"
                                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Wyszukaj
                            </button>
                    </div>
                </form>
                <div style={{ cursor: 'pointer' }} className={"w-10"} onClick={()=> navigate("/klient-koszyk/koszyk")}>
                    <img src={ShoppingCartIcon} alt="cart" />
                </div>
            </div>
            <div className="relative mb-6 w-1/2">
                <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
               <RangeSlider id="default-range" onChange={handleRangeChange} />
                <span
                    className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min (10 zł)</span>
                <span
                    className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">35 zł</span>
                <span
                    className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">65 zł</span>
                <span
                    className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Wszystkie</span>
            </div>

            <div className="p-5 w-full h-full grid grid-cols-4 grid-rows-3 gap-20" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'repeat(3, 400px)', // Adjust the row heights as needed
                gap: '20px',
            }}>
                <Pozycja  imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                          positionName={"Nazwa pozycji"}
                          positionPrice={"Cena pozycji"} />
                <Pozycja  imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                          positionName={"Nazwa pozycji"}
                          positionPrice={"Cena pozycji"} />
                <Pozycja  imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                          positionName={"Nazwa pozycji"}
                          positionPrice={"Cena pozycji"} />
                <Pozycja  imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                          positionName={"Nazwa pozycji"}
                          positionPrice={"Cena pozycji"} />
                <Pozycja  imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                          positionName={"Nazwa pozycji"}
                          positionPrice={"Cena pozycji"} />
                <Pozycja  imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                          positionName={"Nazwa pozycji"}
                          positionPrice={"Cena pozycji"} />


            </div>
        </div>
    );
};

export default KlientKoszyk;