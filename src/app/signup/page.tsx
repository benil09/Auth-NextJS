"use client"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"


export default function SignupPage(){
    const [user,setUser]=useState({
        email:"",
        password:"",
        username:""
    })

    const onSignup = async()=>{

    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold text-center mb-4">Sign up</h1>
            <form className="flex flex-col w-96 p-4 bg-neutral-500 rounded-lg shadow-md
            space-y-4">
                <label htmlFor="username">Username</label>
                <input type="text" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="Username" className="p-2 rounded-lg border border-gray-3 focus:outline-none focus:ring-2 text-black focus:ring-blue-500" />
                <label htmlFor="password">Password</label>
                <input type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password" className="p-2 rounded-lg border border-gray-3 focus:outline-none focus:ring-2 text-black focus:ring-blue-500" />
                <label htmlFor="email">Email</label>
                <input type="email" value={user.email} onChange={(e)=>setUser({...user
                ,email:e.target.value})} placeholder="Email" className="p-2 rounded-lg border
                border-gray-3 focus:outline-none focus:ring-2 text-black focus:ring-blue
                -500" />
                <button type="button" onClick={onSignup} className="bg-blue-500 hover:bg
                -blue-700 text-white font-bold py-2 px-4 rounded">Sign up</button>
                <p className="text-black-500  text-sm">Already have an account? <Link className="text-green-600 font-bold" href="/login">Login</Link></p>


            </form>
           

        </div>
    )
}