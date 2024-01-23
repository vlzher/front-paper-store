import { Button, Modal } from 'flowbite-react';
import {useState} from "react";
import NotificationModal from "./NotificationModal.jsx";

export default function AddingPositionModal({openModal, setOpenModal}) {
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
                    <div className="flex items-center justify-center w-full py-5">
                        <label htmlFor="dropzone-file"
                               className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                    className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.
                                    800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" onChange={handleFileChange} className="hidden"/>
                        </label>
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
                     <Button  onClick={() => {setOpenModal(false); setOpenNotificationModal(true)}}>Dodaj pozycje</Button>
                    </div>
                </Modal.Footer>
            </Modal>
            <NotificationModal openModal={openNotificationModal} setOpenModal={setOpenNotificationModal} notificationText={"Katalog został zaaktualizowany"}/>
        </>
    );
}
