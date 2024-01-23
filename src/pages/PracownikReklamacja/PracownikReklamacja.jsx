import React from 'react';
import {useNavigate} from "react-router-dom";
import Reklamacja from "./Reklamacja.jsx";

const PracownikReklamacja = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full bg-white flex flex-col p-5 items-center">
            <div className="flex justify-between h-12 w-full mb-10 ">
                <div className={'font-semibold text-3xl pl-5 pt-5 text-black flex items-center justify-center'}>Dostepne Reklamacje</div>
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Powrót
                </button>
            </div>
            <Reklamacja nrReklamacji="Nr Reklamcji" opisReklamacji={"Opis Reklamacji"} statusReklamacji={"Status Reklamacji"}/>
            <Reklamacja nrReklamacji="Nr Reklamcji" opisReklamacji={"Opis Reklamacji"} statusReklamacji={"Status Reklamacji"}/>
            <Reklamacja nrReklamacji="Nr Reklamcji" opisReklamacji={"Opis Reklamacji"} statusReklamacji={"Status Reklamacji"}/>
            <Reklamacja nrReklamacji="Nr Reklamcji" opisReklamacji={"Opis Reklamacji"} statusReklamacji={"Status Reklamacji"}/>
            <Reklamacja nrReklamacji="Nr Reklamcji" opisReklamacji={"Opis Reklamacji"} statusReklamacji={"Status Reklamacji"}/>
            <Reklamacja nrReklamacji="Nr Reklamcji" opisReklamacji={"Opis Reklamacji"} statusReklamacji={"Status Reklamacji"}/>

        </div>

    );
};

export default PracownikReklamacja;