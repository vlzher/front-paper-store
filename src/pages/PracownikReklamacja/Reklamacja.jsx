import React from 'react';
import {useNavigate} from "react-router-dom";

const Reklamacja = ({nrReklamacji, statusReklamacji, opisReklamacji}) => {
    const navigate = useNavigate();
    return (
        <div className="my-2 p-10 bg-gray-800 rounded w-3/4 h-48 flex justify-between items-center p-5 cursor-pointer" onClick={()=> navigate(`/pracownik-reklamacja/reklamacja?id=${nrReklamacji}`)}>
            <div className="flex flex-col justify-between items-center w-3/4 h-full">
                <div className="w-full text-xl">Nr. Reklamacji: {nrReklamacji}</div>
                <div className="w-full text-base">Opis: {opisReklamacji}</div>
            </div>
            <div className="w-1/4 h-full flex justify-end items-center">
                Status: {statusReklamacji.toLowerCase()}
            </div>
        </div>
    );
};

export default Reklamacja;