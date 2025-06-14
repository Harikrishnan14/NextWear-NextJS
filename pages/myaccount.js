import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Bounce, ToastContainer } from 'react-toastify';

const MyAccount = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [pincode, setPincode] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [nPassword, setNPassword] = useState('')
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
        } else if (e.target.name === "npassword") {
            setNPassword(e.target.value)
        }
    }

    const fetchData = async (token) => {
        let data = { token: token }
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let res = await a.json()
        setName(res.name)
        setAddress(res.address)
        setPincode(res.pincode)
        setPhone(res.phone)
    }

    const handleUserSubmit = async () => {
        let data = { token: user.token, name, address, phone, pincode }
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let res = await a.json()
        if (res.success) {
            toast.success("Details Successfully Updated", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    const handlePassSubmit = async () => {
        if (nPassword == cPassword) {
            let data = { token: user.token, password, cPassword, nPassword }
            let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            let res = await a.json()
            if (res.success) {
                toast.success("Password Successfully Updated", {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            } else {
                toast.error("Oops, something went wrong!", {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
        } else {
            toast.error("New password and Confirm password must be the same", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        setPassword('')
        setCPassword('')
        setNPassword('')
    }

    useEffect(() => {
        const myUser = JSON.parse(localStorage.getItem('myUser'))
        if (!myUser) {
            router.push('/')
        }
        if (myUser) {
            setUser(myUser)
            setEmail(myUser?.email)
            fetchData(myUser.token)
        }
    }, [])

    return (
        <div className='container mx-auto my-9'>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
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
            <button onClick={handleUserSubmit} className="m-2 flex mb-5 text-white bg-indigo-500 disabled:bg-indigo-300 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">Submit</button>

            <h2 className='font-semibold text-xl'>2. Change Password</h2>
            <div className='mx-auto flex my-2'>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="npassword" className="leading-7 text-sm text-gray-600">New Password</label>
                        <input type="password" id="npassword" name="npassword" value={nPassword} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">Confirm New Password</label>
                        <input type="password" id="cpassword" name="cpassword" value={cPassword} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <button className="m-2 flex text-white bg-indigo-500 disabled:bg-indigo-300 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm" onClick={handlePassSubmit}>Submit</button>

        </div>
    )
}

export default MyAccount