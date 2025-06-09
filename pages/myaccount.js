import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const MyAccount = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [pincode, setPincode] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [user, setUser] = useState()

    const router = useRouter()

    const handleChange = async (e) => {
        if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "address") {
            setAddress(e.target.value)
        } else if (e.target.name === "phone") {
            setPhone(e.target.value)
        } else if (e.target.name === "pincode") {
            setPincode(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        } else if (e.target.name === "cpassword") {
            setCPassword(e.target.value)
        }
    }

    useEffect(() => {
        const myUser = JSON.parse(localStorage.getItem('myUser'))
        if (!myUser) {
            router.push('/')
        }
        if (myUser) {
            setUser(myUser)
            setEmail(user?.email)
        }
    }, [])

    return (
        <div className='container mx-auto my-9'>
            <h1 className='text-3xl text-center font-bold'>Update your Account</h1>

            <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
            <div className='mx-auto flex my-2'>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" value={name} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email ( Cannot be updated )</label>
                        {user?.token ? (
                            <input type="email" id="email" name="email" value={user?.email} readOnly className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        ) : (
                            <input type="email" id="email" name="email" value={email} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        )}

                    </div>
                </div>
            </div>

            <div className="px-2 w-f">
                <div className="mb-4">
                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                    <textarea id="address" name="address" value={address} onChange={handleChange} rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"></textarea>
                </div>
            </div>

            <div className='mx-auto flex my-2'>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                        <input type="phone" id="phone" name="phone" placeholder='Your 10 digit Phone Number' value={phone} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pin Code</label>
                        <input type="email" id="pincode" name="pincode" value={pincode} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <button className="m-2 flex mb-5 text-white bg-indigo-500 disabled:bg-indigo-300 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">Submit</button>

            <h2 className='font-semibold text-xl'>2. Change Password</h2>
            <div className='mx-auto flex my-2'>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">New Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                        <input type="password" id="cpassword" name="cpassword" value={cPassword} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <button className="m-2 flex text-white bg-indigo-500 disabled:bg-indigo-300 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">Submit</button>

        </div>
    )
}

export default MyAccount