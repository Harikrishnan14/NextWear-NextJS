import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const forgotPassword = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const router = useRouter()

    const sendResetEmail = async () => {
        let data = { email, sendMail: true }
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let res = await a.json()
        if (res.success) {
            alert("Password reset instruction have been sent to your email")
        } else {
            alert("Oops, something went wrong!")
        }
    }

    const resetPassword = async () => {
        if (password == cPassword) {
            let data = { password, sendMail: false }
            let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            let res = await a.json()
            if (res.success) {
                alert("Password has been changed")
            } else {
                alert("Oops, something went wrong!")
            }
        } else {
            alert("Error")
        }
    }

    useEffect(() => {
        if (localStorage.getItem('myUser')) {
            router.push('/')
        }
    }, [])

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <Head>
                <title>Forgot Password - NextWear.com</title>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
            </Head>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="Logo.png" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Forgot Password</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {!router.query.token && <div className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input type="email" name="email" id="email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email} required className="block border border-gray-300 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" onClick={sendResetEmail} disabled={!email} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300">Continue</button>
                    </div>
                </div>}

                {router.query.token && <div className="space-y-6">
                    <div>
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">New Password</label>
                        <div className="mt-2">
                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} autoComplete="password" required className="block border border-gray-300 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="cpassword" className="block text-sm/6 font-medium text-gray-900">Confirm New Password</label>
                        <div className="mt-2">
                            <input type="password" name="cpassword" id="cpassword" onChange={(e) => setCPassword(e.target.value)} value={cPassword} autoComplete="cpassword" required className="block border border-gray-300 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" disabled={!password || !cPassword || password !== cPassword} onClick={resetPassword} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300">Continue</button>
                    </div>
                </div>}

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Already have an account?
                    <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500"> Login</Link>
                </p>
            </div>
        </div>
    )
}

export default forgotPassword