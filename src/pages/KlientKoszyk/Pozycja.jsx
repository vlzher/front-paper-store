import React, {useState} from "react";
import {Button} from "flowbite-react";

const Pozycja = ({id, imageUrl, positionName, description, positionPrice, addPosition, removePosition, isAdded}) => {
  return (
    <div
      className="rounded bg-gray-300 p-2 flex flex-col items-center pt-5"
    >
      <img className="rounded w-3/4 aspect-square" src={imageUrl} />
      <div className="pt-2 w-full flex flex-col items-center h-8">
        <div className="mb-2 font-semibold text-xs text-black">{positionName}</div>
        <div className="text-xl font-semibold text-red-700">{positionPrice} zl</div>
          <div className={"w-full flex items-center justify-center pt-5"}>
              <Button color={`${!isAdded ? 'failure' : 'green'}`} onClick={!isAdded ? () => {addPosition(id, positionName, imageUrl, description, positionPrice)} : () => {removePosition(id)}} >
                  {!isAdded ? "Do koszyka" : "Dodane"}
              </Button>
          </div>
      </div>


    </div>
  );
};

export default Pozycja;
