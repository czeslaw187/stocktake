import { removeUser } from "@/app/lib/features/passSlice"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"

export default function TrashUserModal({el}) {

    const [modal,setModal] = useState(false)
    const dispatch = useDispatch()
    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)

    function toggle() {
        setModal(!modal)
    }

    function handleSubmit() {
        dispatch(removeUser({id: el.id}))
        toggle()
    }

    return(
        <div>
            <button onClick={toggle}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <Modal isOpen={modal} toggle={toggle} backdrop={false}>
                <ModalHeader close={closeBtn}>
                    Delete User ?
                </ModalHeader>
                <ModalBody>
                    <div>Confirm your decision</div>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" size="lg" className="w-[10rem]" onClick={()=>{handleSubmit()}}>Confirm</Button>
                    <Button color="danger" size="lg" className="w-[10rem]" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}