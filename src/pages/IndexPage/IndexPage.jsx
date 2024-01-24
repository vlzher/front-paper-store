import React, {useEffect} from 'react';
import {Link} from "react-router-dom";


const IndexPage = () => {

    return (
        <div className="w-full h-full bg-white flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col justify-center items-center py-10">
                <div className="rounded w-full h-40 p-5 bg-gray-900 my-5 flex justify-center items-center">
                    <Link className="w-full h-full flex justify-center items-center text-zinc-50 hover:text-gray-400" to="/kierownik-katalog">Kierownik - Zarzadzanie katalogiem</Link>
                </div>
                <div className="rounded w-full h-40 p-5 bg-gray-900 my-5 flex justify-center items-center">
                    <Link className="w-full h-full flex justify-center  items-center text-zinc-50 hover:text-gray-400" to="/pracownik-reklamacja">Pracownik - Obsluga reklamacji</Link>
                </div>
                <div className="rounded w-full h-40 p-5 bg-gray-900 my-5 flex justify-center items-center">
                    <Link className="w-full h-full flex justify-center  items-center text-zinc-50 hover:text-gray-400" to="/klient-koszyk">Klient - Przegląd oferty</Link>
                </div>
                <div className="rounded w-full h-40 p-5 bg-gray-900 my-5 flex justify-center items-center">
                    <Link className="w-full h-full flex justify-center items-center text-zinc-50 hover:text-gray-400" to="/klient-reklamacja">Klient- Zlozenie reklamacji</Link>
                </div>

            </div>
        </div>
    );
};

export default IndexPage;