import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap"
import { useDispatch } from "react-redux"
import { removeFoodItem } from "@/app/lib/features/countSlice"

export default function TrashButtonModal({id}) {

    const [modal,setModal] = useState(false)
    const dispatch = useDispatch()
    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)

    function toggle() {
        setModal(!modal)
    }

    function handleDeleteItem(id) {
        console.log(id,'id')
        dispatch(removeFoodItem({id:id}))
        toggle()
    }

    return(
        <div>
            <button onClick={toggle}>
                <FontAwesomeIcon icon={faTrash} size="md" />
            </button>
            <Modal isOpen={modal} toggle={toggle} backdrop={false}>
                <ModalHeader close={closeBtn}></ModalHeader>
                <ModalBody>
                    <div>Confirm your decision</div>
                </ModalBody>
                <ModalFooter>
                    <Button size="lg" color="success" onClick={(e)=>{handleDeleteItem(id)}}>Remove Item</Button>{' '}
                    <Button size="lg" color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}