import React from 'react';
import {Button} from "flowbite-react";

const PozycjaKoszyk = ({imageSrc, positionName,cena, funcIncrease, funcDecrease,counter}) => {
    return (
        <div className="w-full flex items-center justify-center bg-gray-400 p-5 rounded">
            <div className="w-1/2 flex flex-col items-center">
                <img src={imageSrc} className={"aspect-square h-48 mb-10 rounded"} />
                <Button color={"failure"}>Usunąć</Button>
            </div>
            <div className="w-1/2 flex h-52 flex-col items-center justify-around">
                <div className="text-xl text-black">{positionName}</div>
                <div className="text-xl text-black">{cena}</div>
                <div className={"w-1/3 h-10 bg-gray-600 flex justify-between items-center px-4 rounded"}>
                    <div className={"text-white font-bold cursor-pointer"}>-</div>
                    <div className={"text-white font-bold"}>{counter}</div>
                    <div className={"text-white font-bold cursor-pointer"}>+</div>
                </div>

            </div>
        </div>
    );
};

export default PozycjaKoszyk;