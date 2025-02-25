import { useState } from "react"
import { Form, FormGroup, Input, Modal, ModalBody, ModalHeader, Label } from "reactstrap"

export default function CreateItemModal({slug}) {

    const [modal,setModal] = useState(false)

    function toggle() {
        setModal(!modal)
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
                            <Input id='name' name='name' />
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}