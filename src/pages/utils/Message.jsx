import React from 'react';

const Message = ({message, toWorker, isPracownik, imageUrl}) => {
    return (
        (imageUrl || message) && <div className={`flex w-full flex-col ${!toWorker&&isPracownik ? "items-start": "items-end"} my-5`}>
            {imageUrl && <img src={imageUrl} className={"rounded w-48 aspect-square my-1"} alt=""/>}
            {message && <div className="bg-gray-300 text-base text-gray-600 rounded p-5">{message}</div>}
        </div>
    );
};

export default Message;