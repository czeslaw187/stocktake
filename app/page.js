'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {

    const router = useRouter()
    
    useEffect(()=>{
        router.push('/Main')
    },[])

    return(
        <div className="w-screen h-screen bg-gradient-to-br from-cyan-400 to-lime-200">

        </div>
    )
}