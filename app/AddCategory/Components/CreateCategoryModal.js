import { useState } from "react"
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CreateCategoryModal() {

    const [modal,setModal] = useState(false)
    const [name,setName] = useState('')
    const closeBtn = (<button className="ml-auto font-bold" onClick={toggle}>X</button>)

    function toggle() {
        setModal(!modal)
    }

    function handleChange(e) {
        setName({...name,[e.target.name]:e.target.value})
    }
    console.log(name)
    return(
        <div className="w-full text-center my-3">
            <button className="w-[15rem] h-[4rem] rounded-md ml-auto bg-gradient-to-br from-slate-300 to-cyan-300 hover:to-cyan-500 active:shadow-slate-600 active:shadow-inner"
                    onClick={toggle}>
                New Category
            </button>
            <Modal isOpen={modal} toggle={toggle} backdrop={false}>
                <ModalHeader close={closeBtn}>
                    Add New Category
                </ModalHeader>
                <ModalBody>
                    <Input name='category' placeholder="new category..." onChange={(e)=>{handleChange(e)}} value={name.category || ''} />
                </ModalBody>
                <ModalFooter>
                    <Button color="success" size="lg" className="w-[10rem]">Add</Button>
                    <Button color="danger" size="lg" className="w-[10rem]" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}