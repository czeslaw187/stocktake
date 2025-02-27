import { useState } from "react"
import { Button, ButtonGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap"
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function UpdateFoodModal({el}) {

    const [modal,setModal] = useState(false)
    const [amount,setAmount] = useState(0)
    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)

    function toggle() {
        setModal(!modal)
    }

    function handleChange(e) {
        setAmount(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleIncrement() {
        setAmount(parseInt(amount)+1)
    }

    function handleDecrement() {
        if (amount > 0) {
            setAmount(parseInt(amount)-1)
        }
    }

    console.log(amount,'amount')
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
                <ModalBody className="grid grid-cols-6 text-2xl md:text-4xl place-items-center justify-items-center">
                    <Label className="items-center justify-center flex">{el.quantity}</Label>
                    <input name='amount' type="number" className="w-[4rem] h-[3rem] text-2xl md:text-4xl rounded-sm border-l-2 p-1 md:text-center" placeholder="0" onChange={(e)=>{handleChange(e)}} value={amount || ''}/>
                    <ButtonGroup vertical className="align-top">
                        <Button color="success" size="md" onClick={()=>{handleIncrement()}}>+</Button>
                        <Button color="danger" size="md" onClick={()=>{handleDecrement()}}>-</Button>
                    </ButtonGroup>
                    <ButtonGroup className="col-start-4 col-span-3">
                        <Button color="success" size="lg" onClick={(e)=>{handleSubmit(e)}}>Update</Button>
                        <Button color='danger' size="lg" onClick={toggle}>Cancel</Button>
                    </ButtonGroup>
                </ModalBody>
            </Modal>
        </div>
    )
}

{/* <div className="flex flex-col justify-center w-3 mr-auto">
    <button className="h-4" onClick={()=>{setAmount(parseInt(amount)+1)}}>
        <FontAwesomeIcon icon={faCaretUp} />
    </button>
    <button className="h-4" onClick={()=>{setAmount(parseInt(amount)-1)}}>
        <FontAwesomeIcon icon={faCaretDown} />
    </button>
</div> */}