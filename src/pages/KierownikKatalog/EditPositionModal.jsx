import { Button, Modal } from 'flowbite-react';
import React, {useState} from "react";
import NotificationModal from "./NotificationModal.jsx";

export default function EditPositionModal({openModal, setOpenModal}) {
    const imageUrl = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    const [openNotificationModal, setOpenNotificationModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        if (selectedFile) {
            formData.append('file', selectedFile, selectedFile.name);
        }
        // Now you can send formData to the server using a fetch or axios

        // Example using fetch:
        /*
        fetch('your-upload-endpoint', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          console.log(data);
        })
        .catch(error => {
          // Handle errors
          console.error('Error uploading file:', error);
        });
        */
    };


    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <div className="flex w-full items-center justify-center">
                        <img className="mb-5 rounded w-3/4 aspect-square" src={imageUrl}/>
                    </div>
                    <input
                        className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="small_size" type="file" onChange={handleFileChange} />
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
                        <Button  onClick={() => {setOpenModal(false); setOpenNotificationModal(true)}}>Dodaj pozycje</Button>
                    </div>
                </Modal.Footer>
            </Modal>
            <NotificationModal openModal={openNotificationModal} setOpenModal={setOpenNotificationModal} notificationText={"Katalog został zaaktualizowany"}/>
        </>
    );
}
