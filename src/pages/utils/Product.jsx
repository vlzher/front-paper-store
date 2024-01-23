import React from 'react';

const Product = ({ imageUrl, positionName, positionPrice, onClickFunc }) => {
    return (
        <div onClick={() => onClickFunc()} className="rounded bg-gray-300 p-2 w-full aspect-square flex flex-col items-center justify-center">
            <img className="rounded w-3/4 aspect-square" src={imageUrl}/>
            <div className="p-6 w-full flex justify-between h-8">
                <div className="text-xs text-black">
                    {positionName}
                </div>
                <div className="text-xs text-black">
                    {positionPrice}
                </div>
            </div>
        </div>
    );
};

export default Product;