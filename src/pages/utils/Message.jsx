import React from 'react';

const Message = ({text, isLeft}) => {
    return (
        <div className={`w-full flex ${isLeft ? "justify-start": "justify-end my-5"}`}>
            <div className="bg-gray-300 text-base text-gray-600 rounded p-5">{text}</div>
        </div>
    );
};

export default Message;