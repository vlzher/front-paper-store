import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import DeleteModal from "./DeleteModal.jsx";
import NotificationModal from "./NotificationModal.jsx";
import EditPositionModal from "./EditPositionModal.jsx";

function ShowProductModal({ openModal, setOpenModal }) {
    const [editProductModal, setEditProductModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openNotificationModal, setOpenNotificationModal] = useState(false);

  const url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
  const positionName = "fdfdfddff";
  const positionPrice = "10 zl";
  const positionDescription = "dfffffffffffffffffdfffffffffffffffffffffdffffffffffffffffffffffffffffdffffffffffffffffffffffffffffdfffffffffffffffffffff";
  function deleteProduct() {
    setOpenModal(false);
    setOpenNotificationModal(true);
  }
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <button
              onClick={() => {setOpenModal(false); setEditProductModal(true)}}
            type="button"
            className="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Edytuj
          </button>
        </Modal.Header>
        <Modal.Body>
            <div className="flex flex-col justify-center items-center">
                <img className="rounded w-1/2 aspect-square" src={url} />
                <div className="space-y-6 w-full p-5">
                    <p className="text-center text-wrap w-full text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {positionName}
                    </p>
                    <p className="text-center text-wrap text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {positionPrice}
                    </p>
                    <div style={{ wordWrap: 'break-word' }}>
                        <p className="h-24 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {positionDescription}
                        </p>
                    </div>
                </div>
            </div>

        </Modal.Body>
        <Modal.Footer>
          <div className="flex w-full items-center justify-center">
            <button
                onClick={() => setOpenDeleteModal(true)}
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Usuń
            </button>
          </div>
        </Modal.Footer>
      </Modal>
        <DeleteModal openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} deleteFunc={deleteProduct}/>
        <NotificationModal openModal={openNotificationModal} setOpenModal={setOpenNotificationModal} notificationText={"Pozycja została usunięta"} />
        <EditPositionModal openModal={editProductModal} setOpenModal={setEditProductModal} />
    </>
  );
}

export default ShowProductModal;
