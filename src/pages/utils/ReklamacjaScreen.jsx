import React, {useEffect, useRef, useState} from 'react';
import {Button} from "flowbite-react";
import Message from "./Message.jsx";
import {useNavigate} from "react-router-dom";
import {getChatMessages, getComplaintById, manageComplaint, sendMessageToWorker} from "../api/api.js";
import {statusToColor, statusToText} from "./utils.js";

const ReklamacjaScreen = ({isPracownik}) => {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");
    const [orderId, setOrderId] = useState("");
    const [complaintId, setComplaintId] = useState("");
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        getComplaintById(id).then((res) => {
            const {status, complaintText, complaintId, orderId} = res.data;
            setStatus(status);
            setDescription(complaintText);
            setComplaintId(complaintId);
            setOrderId(orderId);
        })
        getChatMessages(id).then((res) => {
            setMessages(res.data);
        });
    }, [])

    function updateMessages(){
        getChatMessages(id).then((res) => {
            setMessages(res.data);
        });
    }


    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const navigateFunction = () => {
        if(isPracownik){
            navigate("/pracownik-reklamacja/");
        }else{
            navigate("/klient-reklamacja/");
        }
    }

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const sendMessage = () => {
        const formData = new FormData();
        if (selectedFile) {
            formData.append('picture', selectedFile);
        }
        sendMessageToWorker(complaintId,isPracownik, inputText, formData).then(() => {
            setSelectedFile(null);
            setInputText("");
            updateMessages();
        });
    }

    function manageReklamacja(status){
        manageComplaint(complaintId, status).then(() => {
            navigate("/pracownik-reklamacja/");
        });
    }
    return (
        <div className="flex justify-between px-10 min-h-screen w-full bg-white">
            <div className="w-1/2 flex flex-col h-full pl-5 pt-16 items-start h-screen">
                <div className="my-10">
                    <Button onClick={()=> navigateFunction()}>Powrót</Button>
                </div>
                <label htmlFor="default-input"
                       className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Nr Zamowienia
                </label>
                <h3 className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400">
                    {orderId}
                </h3>
                <label htmlFor="default-input"
                       className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Nr Reklamacji
                </label>
                <h3 className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400">
                    {complaintId}
                </h3>
                <label htmlFor="default-input"
                       className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Status
                </label>
                <h3 className={`mb-5 text-base font-normal text-gray-500 dark:text-gray-400 ${statusToColor(status)}`}>
                    {statusToText(status)}
                </h3>
                <label htmlFor="default-input"
                       className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Opis
                </label>
                <div style={{ wordWrap: 'break-word' }}>
                    <p className="h-48 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {description}
                    </p>
                </div>
                {isPracownik && status!=="COMPLAINT_APPROVED" && status!=="COMPLAINT_REJECTED"&&
                    <div className="mt-10 flex w-full gap-16 ">
                        <Button color="failure" onClick={() => manageReklamacja("REJECT")}>
                            {"Odrzuć reklamacje"}
                        </Button>
                        <Button color="success" onClick={() => manageReklamacja("APPROVE")}>
                            {"Akceptuj reklamacje"}
                        </Button>
                    </div>

                }
            </div>
            <div className="w-1/2 h-full">
                <div className="p-10 bg-gray-600 rounded-md my-10">
                    <div className="flex-col w-full" style={{minHeight: "75vh"}}>
                        {messages.map((message) => <Message isPracownik={isPracownik} key={message.id} message={message.message}
                                                            imageUrl={message.imageUrl}
                                                            toWorker={message.toWorker}/>)}


                    </div>
                    {status!=="COMPLAINT_APPROVED" && status!=="COMPLAINT_REJECTED"&&<div className={"flex flex-row"}>
                        <div className="w-full flex flex-row h-12">
                            <input type="text"
                                   value={inputText}
                                   onChange={(e) => setInputText(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 mx-2
                                   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            <Button onClick={() => {handleButtonClick()}}>{selectedFile ? "ok" : "zdjęcie"}</Button>
                            <div className={"w-2"}></div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <Button onClick={sendMessage}>wyślij</Button>

                        </div>

                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ReklamacjaScreen;