import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function NotificationModal({openModal, setOpenModal, notificationText}) {
    return (
        <>
            <Modal show={openModal} size={'sm'} onClose={() => setOpenModal(false)}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <div className="space-y-6 p-6">
                        <p className="text-center text-xl leading-relaxed text-gray-500 dark:text-gray-400">
                            {notificationText}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="w-full flex flex-row justify-end">
                        <Button  onClick={() => setOpenModal(false)}>Okay</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
