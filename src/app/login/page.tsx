"use client"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"


export default function LoginPage(){
    const [user,setUser]=useState({
        email:"",
        password:"",
    })

    const onLogin = async()=>{

    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold text-center mb-4">Sign up</h1>
            <form className="flex flex-col w-96 p-4 bg-neutral-500 rounded-lg shadow-md
            space-y-4">
                
                <label htmlFor="email">Email</label>
                <input type="email" value={user.email} onChange={(e)=>setUser({...user
                ,email:e.target.value})} placeholder="Email" className="p-2 rounded-lg border
                border-gray-3 focus:outline-none focus:ring-2 text-black focus:ring-blue
                -500" />

                <label htmlFor="password">Password</label>
                <input type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password" className="p-2 rounded-lg border border-gray-3 focus:outline-none focus:ring-2 text-black focus:ring-blue-500" />

                <button type="button" onClick={onLogin} className="bg-blue-500 hover:bg
                -blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                <p className="text-black-500  text-sm">Dont have  account? <Link className="text-green-600 font-bold" href="/signup">Signup</Link></p>


            </form>
           

        </div>
    )
}