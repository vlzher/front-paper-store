import React, {useRef} from 'react';
import {Button} from "flowbite-react";
import Message from "./Message.jsx";
import {useNavigate} from "react-router-dom";

const ReklamacjaScreen = ({isPracownik}) => {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const navigateFunction = () => {
        if(isPracownik){
            navigate("/pracownik-reklamacja/");
        }else{
            navigate("/")
        }
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log('Selected file:', selectedFile);
        }
    };
    return (
        <div className="flex justify-between items-center px-10 min-h-screen w-full bg-white">
            <div className="w-1/2 flex flex-col h-full pl-5">
                <div className="my-10">
                    <Button onClick={()=> navigateFunction()}>Back</Button>
                </div>
                <label htmlFor="default-input"
                       className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Nr Reklamacji
                </label>
                <h3 className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                </h3>
                <label htmlFor="default-input"
                       className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Status
                </label>
                <h3 className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                </h3>
                <label htmlFor="default-input"
                       className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Opis
                </label>
                <div style={{ wordWrap: 'break-word' }}>
                    <p className="h-48 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Opis reklamacji
                    </p>
                </div>
                <label htmlFor="default-input"
                       className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Sprawe prowadzi
                </label>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                </h3>
                {isPracownik && (
                <div className="mt-10 flex w-full gap-16 ">
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                        {"Odrzuć reklamacje"}
                    </Button>
                    <Button color="success" onClick={() => {setOpenModal(false); deleteFunc()}}>
                        {"Akceptuj reklamacje"}
                    </Button>
                </div>
                )}
            </div>
            <div className="w-1/2 h-full">
                <div className="p-10 bg-gray-600 rounded-md my-10">
                    <div className="flex-col w-full" style={{minHeight: "75vh"}}>
                        <Message text={"fdfdffjjjjjjjjjjjjjjd"} isLeft={true}/>
                        <Message text={"fdfjjjjjjjjjjjjjdffd"} isLeft={false}/>
                        <Message text={"fdfdffd"} isLeft={true}/>
                        <Message text={"fdfdffd"} isLeft={false}/>
                        <Message text={"fdfdffd"} isLeft={false}/>
                        <Message text={"fdfdffd"} isLeft={false}/>

                    </div>
                    <div className={"flex flex-row"}>
                        <div className="w-full flex flex-row h-12">
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 mx-2
                                   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            <Button onClick={() => {handleButtonClick()}}>photo</Button>
                            <div className={"w-2"}></div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <Button  >send --></Button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReklamacjaScreen;