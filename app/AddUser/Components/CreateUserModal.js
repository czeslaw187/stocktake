import { useState } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { addUser, setRegError } from "@/app/lib/features/passSlice";


export default function CreateUserModal() {

    const error = useSelector(state=>state.pass.regerror)
    const [modal,setModal] = useState(false)
    const [creds,setCreds] = useState({})
    const dispatch = useDispatch()
    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)

    function toggle() {
        setModal(!modal)
    }

    function handleChange(e) {
        setCreds({...creds,[e.target.name]:e.target.value, isadmin: false, clock: '', hours: 0, isin: false})
    }

    function handleSubmit() {
        if (!creds.name || !creds.email || !creds.password || !creds.password2) {
            dispatch(setRegError('Type valid credentials'))
        } else if (creds.password !== creds.password2) {
            dispatch(setRegError('Password don\'t match'))
        } else {
            dispatch(addUser(creds))
            toggle()
        }
    }
    console.log(creds, 'creds')
    return(
        <div className="w-full text-center my-3">
            <button className="w-[15rem] h-[4rem] rounded-md ml-auto bg-gradient-to-br from-slate-300 to-cyan-300 hover:to-cyan-500 active:shadow-slate-600 active:shadow-inner"
                    onClick={toggle}>
                Create New User
            </button>
            <Modal isOpen={modal} toggle={toggle} backdrop={false}>
                <ModalHeader close={closeBtn}>
                    {error ? error : 'Add New Category'}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input name="name" onChange={(e)=>{handleChange(e)}} value={creds.name || ''} required/>
                            <Label for="email">Email</Label>
                            <Input name="email" type="email" onChange={(e)=>{handleChange(e)}} value={creds.email || ''} required/>
                            <Label for="password">Password</Label>
                            <Input name="password" type="password" onChange={(e)=>{handleChange(e)}} value={creds.password || ''} required/>
                            <Label for="password2">Repeat Password</Label>
                            <Input name="password2" type="password" onChange={(e)=>{handleChange(e)}} value={creds.password2 || ''} required/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" size="lg" className="w-[10rem]" onClick={()=>{handleSubmit()}}>Add User</Button>
                    <Button color="danger" size="lg" className="w-[10rem]" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}