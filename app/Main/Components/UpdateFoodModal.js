import { useState } from "react"
import { Button, ButtonGroup, Label, Modal, ModalBody, ModalHeader } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import { updateFoodItem } from "@/app/lib/features/countSlice"

export default function UpdateFoodModal({el}) {

    const count = useSelector(state=>state.count)
    const [modal,setModal] = useState(false)
    const [amount,setAmount] = useState(el.quantity)
    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)
    const dispatch = useDispatch()
    

    function toggle() {
        setModal(!modal)
    }

    function handleChange(e) {
        setAmount(e.target.value)
    }

    function handleSubmit(qnt, id) {
        dispatch(updateFoodItem({quantity:qnt, id:id}))
        toggle()
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
                <ModalBody className="grid grid-cols-6 text-xl md:text-2xl place-items-center justify-items-center">
                    <div className="flex items-baseline">
                        <Label className="items-center justify-center flex mx-2 md:mx-4">{el.quantity}</Label>
                        <input name='amount' type="number" className="w-[4rem] h-[4rem] text-xl md:text-2xl rounded-sm border-l-2 p-1 md:text-center" placeholder="0" onChange={(e)=>{handleChange(e)}} value={amount || ''}/>
                    </div>
                    <ButtonGroup vertical className="align-top">
                        <Button color="success" size="md" onClick={()=>{handleIncrement()}}>+</Button>
                        <Button color="danger" size="md" onClick={()=>{handleDecrement()}}>-</Button>
                    </ButtonGroup>
                    <ButtonGroup className="col-start-4 col-span-3">
                        <Button color="success" size="lg" onClick={()=>{handleSubmit(amount, el.id)}}>Update</Button>
                        <Button color='danger' size="lg" onClick={toggle}>Cancel</Button>
                    </ButtonGroup>
                </ModalBody>
            </Modal>
        </div>
    )
}
