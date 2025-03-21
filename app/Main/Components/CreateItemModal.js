import { addFoodItem, fetchAllFood, fetchFood, set_error } from "@/app/lib/features/countSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, FormGroup, Input, Modal, ModalBody, ModalHeader, Label, ModalFooter, Button } from "reactstrap"

export default function CreateItemModal({slug}) {

    const [modal,setModal] = useState(false)
    const [item,setItem] = useState({})
    const dispatch = useDispatch()
    const store = useSelector(state=>state.count)
    const user = useSelector(state=>state.pass)
    const {food, error} = store
    const places = [...new Set(user.users.map(el=>el.workplace))]

    function toggle() {
        setModal(!modal)
        setItem({})
    }

    function handleChange(e) {
        setItem({...item,[e.target.name]:e.target.value,category: slug, quantity:0})
    }

    function handleAddItem(e) {
        e.preventDefault()
        dispatch(addFoodItem(item))
        toggle()
        setTimeout(() => {
            dispatch(set_error(''))
        }, 3000);
    }

    console.log(store)
    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)
    return(
        <div className="w-full text-center">
            <button className="w-[15rem] h-[4rem] rounded-md ml-auto bg-gradient-to-br from-slate-300 to-cyan-300 hover:to-cyan-500 active:shadow-slate-600 active:shadow-inner"
                    onClick={toggle}>
                Add new {slug}
            </button>
            <Label className="w-full text-center text-red">{error}</Label>
            <Modal isOpen={modal} toggle={toggle} backdrop={false}>
                <ModalHeader close={closeBtn}>
                    <div>Describe New {slug}</div>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for='name'>Name</Label>
                            <Input name='name' onChange={(e)=>{handleChange(e)}} value={item.name || ''} required/>
                            <Label for='workplace' onChange={(e)=>{handleChange(e)}} value={item.workplace || ''}>Workplace</Label>
                            <Input name="workplace" type="select" onChange={(e)=>{handleChange(e)}} value={item.workplace || ''}>
                                {
                                    places && places.map((el,id)=>{
                                        return(
                                            <option key={id}>{el}</option>
                                        )
                                    })
                                }
                            </Input>
                            <Label for='unit'>Unit</Label>
                            <Input name='unit' onChange={(e)=>{handleChange(e)}} value={item.unit || ''} required/>
                            <Label for='qantity'>Quantity</Label>
                            <Input name='quantity' type='number' onChange={(e)=>{handleChange(e)}} value={0} disabled/>
                            <Label for='category'>Category</Label>
                            <Input name='category' value={slug} disabled required/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button size="lg" color="success" onClick={(e)=>{handleAddItem(e)}}>Add Item</Button>{' '}
                    <Button size="lg" color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}