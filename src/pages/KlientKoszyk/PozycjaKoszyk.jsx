import React from 'react';
import {Button} from "flowbite-react";

const PozycjaKoszyk = ({id,imageSrc, positionName,cena, funcIncrease, funcDecrease,counter, onDelete}) => {
    return (
        <div className="w-full flex items-center justify-center bg-gray-400 p-5 rounded my-5 ">
            <div className="w-1/2 flex flex-col items-center">
                <img src={imageSrc} className={"aspect-square h-48 mb-10 rounded"} />
                <Button onClick={(id)=>onDelete(id)} color={"failure"}>Usunąć</Button>
            </div>
            <div className="w-1/2 flex h-52 flex-col items-center justify-around">
                <div className="text-xl text-black">{positionName}</div>
                <div className="text-xl text-black">{cena} zl</div>
                <div className={"w-1/3 h-10 bg-gray-600 flex justify-between items-center px-4 rounded"}>
                    <div className={"text-white font-bold cursor-pointer select-none"} onClick={()=> funcDecrease(id)}>-</div>
                    <div className={"text-white font-bold select-none"}>{counter}</div>
                    <div className={"text-white font-bold cursor-pointer select-none"} onClick={()=> funcIncrease(id)}>+</div>
                </div>
            </div>
        </div>
    );
};

export default PozycjaKoszyk;