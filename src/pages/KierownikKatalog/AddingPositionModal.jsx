import { Button, Modal } from 'flowbite-react';
import React, {useState} from "react";
import NotificationModal from "./NotificationModal.jsx";
import {createProduct} from "../api/api.js";

export default function AddingPositionModal({openModal, setOpenModal, updateProducts}) {
    const [openNotificationModal, setOpenNotificationModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };




    const handleSubmit = () => {
        const formData = new FormData();
        if (selectedFile) {
            formData.append('picture', selectedFile);
        }
        createProduct(name, description, price, formData).then(() => updateProducts());
        setName("");
        setPrice("");
        setDescription("");
        setSelectedFile(null);
    };


    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Dodaj pozycję</Modal.Header>
                <Modal.Body>
                    <div className="flex items-center justify-center w-full py-5">
                        <input
                            className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="small_size" type="file" onChange={handleFileChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="default-input"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wpisz nazwę</label>
                        <input type="text" id="default-input"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="default-input"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wpisz opis</label>
                        <input type="text" id="default-input"
                               value={description}
                               onChange={(e) => setDescription(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="default-input"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wpisz cenę
                            </label>
                        <input type="text" id="default-input"
                               value={price}
                               onChange={(e) => setPrice(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <div className="w-full flex flex-row justify-end">
                     <Button  onClick={() => {setOpenModal(false); setOpenNotificationModal(true); handleSubmit()}}>Dodaj pozycje</Button>
                    </div>
                </Modal.Footer>
            </Modal>
            <NotificationModal openModal={openNotificationModal} setOpenModal={setOpenNotificationModal} notificationText={"Katalog został zaaktualizowany"}/>
        </>
    );
}
