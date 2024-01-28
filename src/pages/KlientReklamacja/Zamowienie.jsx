import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import ApproveReklamacja from "./ApproveReklamacja.jsx";
import {statusToColor, statusToText} from "../utils/utils.js";

const Zamowienie = ({status,nrZamowienia, dataZamowienia, cenaZamowienia, idReklamacji}) => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    function navigateToCreateReklamacja(){
        navigate(`/klient-reklamacja/create-reklamacja?id=${nrZamowienia}`);
    }

    function navigateToReklamacja(){
        idReklamacji ? navigate(`/klient-reklamacja/reklamacja?id=${idReklamacji}`) : setOpenModal(true);
    }
    return (
        <>
            <ApproveReklamacja openModal={openModal} setOpenModal={setOpenModal} approveFunc={navigateToCreateReklamacja}/>
        <div className="my-5 p-8 bg-gray-600 rounded w-full h-48 flex justify-between items-center p-5">
            <div className="flex flex-col justify-between items-center w-1/4 h-full">
                <div className="w-full text-l"><span>Status: </span><span className={`${statusToColor(status)}`}>{statusToText(status)}</span></div>
                <div className="w-full text-base">{`Zamowienie nr. ${nrZamowienia}`}</div>
            </div>
            <div className="flex flex-col justify-between items-center w-1/4 h-full">
                <div className="w-full text-xl">{dataZamowienia}</div>
                <div className="w-full text-base">{cenaZamowienia} zl</div>
            </div>
            {status === "WAITING_FOR_REVIEW" || status==="COMPLAINT_APPROVED" || status=== "COMPLAINT_REJECTED" ?
                <div className="flex flex-col justify-between items-center w-1/4 h-full cursor-pointer" onClick={(() => {navigateToReklamacja()})}>
                    <div className="w-full h-full flex items-center justify-center text-center text-xl">{idReklamacji ? "Szczegóły reklamacji" : "Złóż reklamacje"}</div>
                </div>
                :
                <div className={"w-1/4"}></div>}

        </div>

        </>
    );
};

export default Zamowienie;