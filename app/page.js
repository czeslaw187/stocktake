'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

export default function Page() {

    const router = useRouter()
    const user = useSelector(state=>state.pass.users)
    const [newUser,setNewUser] = useState({})
    const [post,setPost] = useState({})
    const [signError,setSignError] = useState('')
    const [regError,setRegError] = useState('')
    
    // useEffect(()=>{
        
    // },[])

    function handleChange(e) {
        setNewUser({...newUser, [e.target.name]:e.target.value})
    }

    function handleSign(e) {
        e.preventDefault()
        setPost(newUser)

        if (newUser.signemail && newUser.signpass) {
            setSignError('Success')
        } else {
            setSignError('Error')
        }

        setNewUser({})
    }

    function handleReg(e) {
        e.preventDefault()
        setPost(newUser)
    }

    console.log(newUser, 'user')
    return(
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <Form>
                <FormGroup className="flex flex-col rounder-md shadow-lg shadow-slate-500 p-7">
                    <Label className="text-center text-3xl mb-5">Sign In</Label>
                    <Label className="text-center text-red-600">{signError}</Label>
                    <Label for="signemai">Email</Label>
                    <Input id='signemail' name='signemail' type='email' autoComplete="username" className="h-8 px-1" onChange={(e)=>{handleChange(e)}} value={newUser.signemail || ''}/>
                    <Label for='signpass'>Password</Label> 
                    <Input id='signpass' name='signpass' type='password' autoComplete="current-password" className="h-8 px-1" onChange={(e)=>{handleChange(e)}} value={newUser.signpass || ''}/>
                    <button className="w-[10rem] h-[3rem] rounded-md bg-amber-300 mx-auto mt-5 hover:bg-amber-400 active:shadow-inner active:shadow-black" onClick={(e)=>{handleSign(e)}}>Submit</button>
                </FormGroup>
            </Form>
            <Form>
                <FormGroup className="flex flex-col rounder-md shadow-lg shadow-slate-500 p-7">
                    <Label className="text-center text-3xl mb-5">Register</Label>
                    <Label for='regname'>Name</Label>
                    <Input id='regname' name='regname' className="h-8 px-1" autoComplete="username" onChange={(e)=>{handleChange(e)}} value={newUser.regname || ''}/>
                    <Label for='regemail'>Email</Label>
                    <Input id='regemail' name='regemail' type='email' className="h-8 px-1" onChange={(e)=>{handleChange(e)}} value={newUser.regemail || ''} />
                    <Label for='regpass'>Password</Label>
                    <Input id='regpass' name='regpass' type='password' autoComplete="new-password" className="h-8 px-1" onChange={(e)=>{handleChange(e)}} value={newUser.regpass || ''} />
                    <Label for='regpass2'>Repeat Password</Label>
                    <Input id='regpass2' name="regpass2" type='password' autoComplete="new-password" className="h-8 px-1" onChange={(e)=>{handleChange(e)}} value={newUser.regpass2 || ''} />
                    <button className="w-[10rem] h-[3rem] rounded-md bg-amber-300 mx-auto mt-5 hover:bg-amber-400 active:shadow-inner active:shadow-black" onClick={(e)=>{handleReg(e)}}>Submit</button>
                </FormGroup>
            </Form>
        </div>
    )
}