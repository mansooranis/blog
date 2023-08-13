import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TimedModal(props){
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 5000);
    },[])
    return (
        <Modal show={show} onHide={handleClose} className=" modal-timer">
            <Modal.Header closeButton>
                <Modal.Title>Join my mailing list</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>If you like my content consider joining my mailing list!</div>
                <input type="text" placeholder="Email" className="w-full border-2 border-gray-300 rounded-xl p-2 my-2"/>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={async () => {
                    await axios.get("mailto:mansooranis60@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'")
                    handleClose()
                }}>Submit</button>
            </Modal.Footer>
        </Modal>
    )
}