import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import ApproveReklamacja from "./ApproveReklamacja.jsx";

const Zamowienie = ({status,nrZamowienia, dataZamowienia, cenaZamowienia, isReklamacja}) => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    function navigateToCreateReklamacja(){
        navigate("/klient-reklamacja/create-reklamacja")
    }

    function navigateToReklamacja(){
        isReklamacja ? navigate(`/klient-reklamacja/reklamacja?${nrZamowienia}`) : setOpenModal(true);
    }
    return (
        <>
            <ApproveReklamacja openModal={openModal} setOpenModal={setOpenModal} approveFunc={navigateToCreateReklamacja}/>
        <div className="my-5 p-8 bg-gray-600 rounded w-full h-48 flex justify-between items-center p-5">
            <div className="flex flex-col justify-between items-center w-1/4 h-full">
                <div className="w-full text-xl">{`Status ${status}`}</div>
                <div className="w-full text-base">{`Zamowienie ${nrZamowienia}`}</div>
            </div>
            <div className="flex flex-col justify-between items-center w-1/4 h-full">
                <div className="w-full text-xl">{dataZamowienia}</div>
                <div className="w-full text-base">{cenaZamowienia}</div>
            </div>
            <div className="flex flex-col justify-between items-center w-1/4 h-full cursor-pointer" onClick={(() => {navigateToReklamacja()})}>
                <div className="w-full h-full flex items-center justify-center text-center text-xl">{isReklamacja ? "Szczegóły reklamacji" : "Złóż reklamacje"}</div>
            </div>
        </div>

        </>
    );
};

export default Zamowienie;