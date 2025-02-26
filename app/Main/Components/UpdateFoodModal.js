import { useState } from "react"
import { Button, ButtonGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap"

export default function UpdateFoodModal({el}) {

    const [modal,setModal] = useState(false)
    const [amount,setAmount] = useState(0)
    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)

    function toggle() {
        setModal(!modal)
    }

    function handleChange(e) {
        setAmount({...amount,[e.target.name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return(
        <div>
            <button className="w-full h-max transition duration-200 ease-out hover:opacity-75"
                    onClick={toggle}>
            UPDATE
            </button>
            <Modal isOpen={modal} toggle={toggle} backdrop={false} className="">
                <ModalHeader close={closeBtn}>
                    Update stock amount
                </ModalHeader>
                <ModalBody className="grid grid-cols-6 text-2xl md:text-4xl">
                    <Label className="items-center justify-center flex">{el.quantity}</Label>
                    <Input name='amount' type="number" className="w-[4rem] h-[3rem]" onChange={(e)=>{handleChange(e)}} value={amount.amount || ''}/>
                    <ButtonGroup className="col-start-4 col-span-3">
                        <Button color="success" size="lg" onClick={(e)=>{handleSubmit(e)}}>Update</Button>
                        <Button color='danger' size="lg" onClick={toggle}>Cancel</Button>
                    </ButtonGroup>
                </ModalBody>
            </Modal>
        </div>
    )
}