import React, {useEffect, useState} from 'react';
import Zamowienie from "./Zamowienie.jsx";
import {useNavigate} from "react-router-dom";
import {getAllOrders} from "../api/api.js";

const KlientReklamacja = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders().then((response) => {
            setOrders(response.data);
        })
    }, [])
    return (
        <div className="w-full h-full bg-white flex flex-col items-center px-10 pt-10">
            <div className="flex justify-between h-12 w-full mb-10 ">
                <div className={'font-semibold text-3xl pl-5 pt-5 text-black flex items-center justify-center'}>Moje zamówienia</div>
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Powrót
                </button>
            </div>
            <div className={"w-3/4"}>
                {orders.map((order) =>
                    <Zamowienie key={order.id} status={order.status} nrZamowienia={order.orderId}
                                dataZamowienia={`${order.orderDate[2]}.${order.orderDate[1]}.${order.orderDate[0]}`}
                                cenaZamowienia={order.price} idReklamacji={order.complaintId} />
                )}
            </div>

        </div>
    );
};

export default  KlientReklamacja;