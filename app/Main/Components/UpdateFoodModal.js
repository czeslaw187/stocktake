import { useState } from "react"
import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap"

export default function UpdateFoodModal() {

    const [modal,setModal] = useState(false)
    const [amount,setAmount] = useState(0)
    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)

    function toggle() {
        setModal(!modal)
    }

    function handleChange(e) {
        setAmount({...amount,[e.taget.name]:e.taget.value})
    }

    return(
        <div>
            <button className="w-full h-max transition duration-200 ease-out hover:opacity-75"
                    onClick={toggle}>
            UPDATE
            </button>
            <Modal isOpen={modal} toggle={toggle} backdrop={false}>
                <ModalHeader close={closeBtn}>
                    Update stock amount
                </ModalHeader>
                <ModalBody>
                    <Input name='amount' type="number" onChange={(e)=>{handleChange(e)}} value={amount.amount || ''}/>
                    <Button color="success" size="lg">Update</Button>
                    <Button color='danger' size="lg" onClick={toggle}>Cancel</Button>
                </ModalBody>
            </Modal>
        </div>
    )
}