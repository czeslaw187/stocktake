import { addFoodItem } from "@/app/lib/features/countSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Form, FormGroup, Input, Modal, ModalBody, ModalHeader, Label, ModalFooter, Button } from "reactstrap"

export default function CreateItemModal({slug}) {

    const [modal,setModal] = useState(false)
    const [item,setItem] = useState({})
    const dispatch = useDispatch()

    function toggle() {
        setModal(!modal)
        setItem({})
    }

    function handleChange(e) {
        setItem({...item,[e.target.name]:e.target.value})
    }

    function handleAddItem(e) {
        e.preventDefault()
        dispatch(addFoodItem(item))
        toggle()
    }

    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)
    return(
        <>
            <button className="w-[15rem] h-[4rem] rounded-md mx-auto bg-gradient-to-br from-slate-300 to-cyan-300 hover:to-cyan-500 active:shadow-slate-600 active:shadow-inner"
                    onClick={toggle}>
                Add new {slug}
            </button>
            <Modal isOpen={modal} toggle={toggle} backdrop={false}>
                <ModalHeader close={closeBtn}>
                    <div>Describe New {slug}</div>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for='name'>Name</Label>
                            <Input name='name' onChange={(e)=>{handleChange(e)}} value={item.name || ''}/>
                            <Label for='unit'>Unit</Label>
                            <Input name='unit' onChange={(e)=>{handleChange(e)}} value={item.unit || ''} />
                            <Label for='qnt'>Quantity</Label>
                            <Input name='qnt' type='number' onChange={(e)=>{handleChange(e)}} value={item.qnt || ''} />
                            <Label for='cat'>Category</Label>
                            <Input name='cat' onChange={(e)=>{handleChange(e)}} value={item.cat || ''} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button size="lg" color="success" onClick={(e)=>{handleAddItem(e)}}>Add Item</Button>{' '}
                    <Button size="lg" color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}