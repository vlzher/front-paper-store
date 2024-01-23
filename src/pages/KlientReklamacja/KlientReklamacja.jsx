import React from 'react';
import Zamowienie from "./Zamowienie.jsx";
import {useNavigate} from "react-router-dom";

const KlientReklamacja = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full bg-white flex flex-col items-center px-10 pt-10">
            <div className="flex justify-between h-12 w-full mb-10 ">
                <div className={'font-semibold text-3xl pl-5 pt-5 text-black flex items-center justify-center'}>Moje zamówienia</div>
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Powrót
                </button>
            </div>
            <div className={"w-3/4"}>
                <Zamowienie status={"Odebrane"} nrZamowienia={"nr-zamowienia"} dataZamowienia={"data"} cenaZamowienia={"cena"} isReklamacja={true}/>
                <Zamowienie status={"Odebrane"} nrZamowienia={"nr-zamowienia"} dataZamowienia={"data"} cenaZamowienia={"cena"} isReklamacja={false}/>
                <Zamowienie status={"Odebrane"} nrZamowienia={"nr-zamowienia"} dataZamowienia={"data"} cenaZamowienia={"cena"} isReklamacja={true}/>
                <Zamowienie status={"Odebrane"} nrZamowienia={"nr-zamowienia"} dataZamowienia={"data"} cenaZamowienia={"cena"} isReklamacja={true}/>
                <Zamowienie status={"Odebrane"} nrZamowienia={"nr-zamowienia"} dataZamowienia={"data"} cenaZamowienia={"cena"} isReklamacja={true}/>
                <Zamowienie status={"Odebrane"} nrZamowienia={"nr-zamowienia"} dataZamowienia={"data"} cenaZamowienia={"cena"} isReklamacja={true}/>
                <Zamowienie status={"Odebrane"} nrZamowienia={"nr-zamowienia"} dataZamowienia={"data"} cenaZamowienia={"cena"} isReklamacja={true}/>

            </div>

        </div>
    );
};

export default  KlientReklamacja;