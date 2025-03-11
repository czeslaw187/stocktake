import { clearHours } from "@/app/lib/features/hoursSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"

export default function ClearHoursModal({el, faStopwatch, FontAwesomeIcon}) {

    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)
    const [modal,setModal] = useState(false)
    const dispatch = useDispatch()

    function toggle() {
        setModal(!modal)
    }
    
    function handleSubmit() {
        dispatch(clearHours({userId: el.id}))
        toggle()
    }
    
    return(
        <div>
            <button onClick={toggle}>
                <FontAwesomeIcon icon={faStopwatch} />
            </button>
            <Modal isOpen={modal} toggle={toggle} backdrop={false}>
                <ModalHeader close={closeBtn}>Confirm your decision</ModalHeader>
                <ModalBody className="w-full text-center flex justify-between">
                    <Button color="success" size="lg" className="w-[10rem]" onClick={()=>{handleSubmit()}}>Confirm</Button>
                    <Button color="danger" size="lg" className="w-[10rem]" onClick={toggle}>Cancel</Button>
                </ModalBody>
            </Modal>
        </div>
    )
}