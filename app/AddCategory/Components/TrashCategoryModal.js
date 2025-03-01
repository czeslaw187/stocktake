import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"

export default function TrashCategoryModal() {

    const [modal,setModal] = useState(false)
    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)

    function toggle() {
        setModal(!modal)
    }

    return(
        <div>
            <button onClick={toggle}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <Modal isOpen={modal} toggle={toggle} backdrop={false}>
                <ModalHeader close={closeBtn}>
                    Delete Category ?
                </ModalHeader>
                <ModalBody>
                    <div>Confirm your decision</div>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" size="lg" className="w-[10rem]">Confirm</Button>
                    <Button color="danger" size="lg" className="w-[10rem]" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}