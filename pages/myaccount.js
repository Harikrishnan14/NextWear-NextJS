import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const MyAccount = () => {

    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('myUser')) {
            router.push('/')
        }
    }, [])

    return (
        <div>myaccount</div>
    )
}

export default MyAccount