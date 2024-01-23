import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "flowbite-react";
import ApproveReklamacja from "./ApproveReklamacja.jsx";

const CreateReklamacja = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    function makeReklamacja(){
        navigate("/klient-reklamacja/reklamacja")
    }
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log('Selected file:', selectedFile);
        }
    };
    return (
            <div className="w-full h-full min-h-screen bg-white flex flex-col px-10 pt-10">
                <div className="flex justify-between h-12 w-full mb-10 ">
                    <div className={'font-semibold text-3xl pt-5 text-black flex items-center justify-center'}>Reklamacja</div>
                    <button
                        type="button"
                        onClick={() => navigate('/klient-reklamacja')}
                        className="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Powrót
                    </button>
                </div>
                <label htmlFor="default-input"
                       className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Nr Zamówienia
                </label>
                <h3 className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400">
                    FDSFAFDAFDSFADSFAS
                </h3>
                <label htmlFor="default-input"
                       className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Opis problemu/reklamacji
                </label>
                <input type="text" id="large-input"
                       className="block w-1/2 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <div className="mt-10 w-32"><Button onClick={() => {handleButtonClick()}}>Dodaj zdjęcie</Button></div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <ApproveReklamacja openModal={openModal} setOpenModal={setOpenModal} approveFunc={makeReklamacja}/>

                <div className="h-[200px] flex items-end"><Button color={"success"} onClick={() => setOpenModal(true)} size={"xl"} >Wyślij reklamacje</Button></div>
            </div>
    );
};

export default CreateReklamacja;