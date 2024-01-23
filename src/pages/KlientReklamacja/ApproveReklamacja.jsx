import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function ApproveReklamacja({openModal, setOpenModal, approveFunc}) {
    return (
        <>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Czy na pewno chcesz złożyć reklamacje?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="success" onClick={() => {setOpenModal(false); approveFunc()}}>
                                {"Tak"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                {"Nie"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
