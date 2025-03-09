import { clearHours } from "@/app/lib/features/hoursSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"

export default function ClearHoursModal({bangers}) {

    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)
    const [modal,setModal] = useState(false)
    const dispatch = useDispatch()

    function toggle() {
        setModal(!modal)
    }

    function handleSubmit() {
        dispatch(clearHours())
        toggle()
    }

    return(
        <div className={`w-[15rem] h-[4rem] flex justify-center place-content-center rounded-md bg-gradient-to-br from-slate-300 to-cyan-300 hover:to-cyan-500 active:shadow-slate-600 active:shadow-inner ${bangers.className}`}>
            <button onClick={toggle}>
                Clear User Hours
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