'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, FormGroup, Input, Label } from "reactstrap"
import { checkSignIn } from "./lib/features/passSlice"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {

    const router = useRouter()
    const user = useSelector(state=>state.pass)
    const dispatch = useDispatch()
    const [newUser,setNewUser] = useState({})
    const [post,setPost] = useState({})
    const [signError,setSignError] = useState('')
    const [regError,setRegError] = useState('')
    const validName = new RegExp('[A-Za-z].{2,}')
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-z0-9.-]+.[a-zA-z]$')
    const validPwd = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[._:$!%-]).{6,}$')
    
    useEffect(()=>{
        if (user.isLogged) {
            router.push('/Main')
        }
    },[])

    useEffect(()=>{
        if (post.signemail && post.signpass) {
            dispatch(checkSignIn(post))
        }
    },[post])
    // console.log((new Date(Date.now())).toTimeString(), 'date')
    function handleChange(e) {
        setNewUser({...newUser, [e.target.name]:e.target.value})
    }

    function handleSign(e) {
        e.preventDefault()
        setPost(newUser)

        if (!newUser.signemail || !validName.test(newUser.signemail)) {
            setSignError('Type valid email')
        } else if (!newUser.signpass || !validPwd.test(newUser.signpass)) {
            setSignError('Type valid password')
        } else {
            setSignError('Success')
            setNewUser({})
        }
        setTimeout(()=>{
            setSignError('')
        },1500)
    }

    function handleReg(e) {
        e.preventDefault()
        setPost(newUser)
        if (!newUser.regname || !validName.test(newUser.regname)) {
            setRegError('Type valid name')
        } else if (!newUser.regemail || !validEmail.test(newUser.regemail)) {
            setRegError('Type valid email')
        } else if (!newUser.regpass || !validPwd.test(newUser.regpass)) {
            setRegError('A-z0-9._:$!%-')
        } else if (!newUser.regpass2) {
            setRegError('Confirm your password')
        } else if (newUser.regpass !== newUser.regpass2) {
            setRegError('Passwords don\'t match')
        } else {
            setRegError('Success')
            setNewUser({})
        }
        setTimeout(()=>{
            setRegError('')
        },1500)
    }
    console.log(user, 'store')
    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <Form>
                <FormGroup className="flex flex-col rounder-md shadow-lg shadow-slate-500 p-7 mx-2">
                    <Label className="text-center text-3xl mb-2">Sign In</Label>
                    <Label className={`text-center ${signError === 'Success' ? 'text-lime-700' : 'text-red-400'}`}>{signError}</Label>
                    <Label for="signemai">Email</Label>
                    <Input id='signemail' name='signemail' type='email' autoComplete="username" className="h-8 px-1" onChange={(e)=>{handleChange(e)}} value={newUser.signemail || ''}/>
                    <Label for='signpass'>Password</Label> 
                    <Input id='signpass' name='signpass' type='password' autoComplete="current-password" className="h-8 px-1" onChange={(e)=>{handleChange(e)}} value={newUser.signpass || ''}/>
                    <button className="w-[10rem] h-[3rem] rounded-md bg-amber-300 mx-auto mt-2 hover:bg-amber-400 active:shadow-inner active:shadow-black" onClick={(e)=>{handleSign(e)}}>Submit</button>
                </FormGroup>
            </Form>
            <Form>
                <FormGroup className="flex flex-col rounder-md shadow-lg shadow-slate-500 p-7 mx-2">
                    <Label className="text-center text-3xl mb-2">Register</Label>
                    <Label className={`text-center w-full h-auto ${regError === 'Success' ? 'text-lime-700' : 'text-red-400'}`}>{regError}</Label>
                    <Label for='regname'>Name</Label>
                    <Input id='regname' name='regname' className="h-8 px-1" autoComplete="username" onChange={(e)=>{handleChange(e)}} value={newUser.regname || ''}/>
                    <Label for='regemail'>Email</Label>
                    <Input id='regemail' name='regemail' type='email' className="h-8 px-1" onChange={(e)=>{handleChange(e)}} value={newUser.regemail || ''} />
                    <Label for='regpass'>Password</Label>
                    <Input id='regpass' name='regpass' type='password' autoComplete="new-password" className="h-8 px-1" onChange={(e)=>{handleChange(e)}} value={newUser.regpass || ''} />
                    <Label for='regpass2'>Repeat Password</Label>
                    <Input id='regpass2' name="regpass2" type='password' autoComplete="new-password" className="h-8 px-1" onChange={(e)=>{handleChange(e)}} value={newUser.regpass2 || ''} disabled={newUser.regpass && validPwd.test(newUser.regpass) ? false : true} />
                    <button className="w-[10rem] h-[3rem] rounded-md bg-amber-300 mx-auto mt-2 hover:bg-amber-400 active:shadow-inner active:shadow-black" onClick={(e)=>{handleReg(e)}}>Submit</button>
                </FormGroup>
            </Form>
        </div>
    )
}