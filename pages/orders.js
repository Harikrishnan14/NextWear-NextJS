import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const orders = () => {
    const router = useRouter()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            let a = fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem("token") })
            })
            let res = await a.json()
            setOrders(res.orders);
        }

        if (!localStorage.getItem('token')) {
            router.push('/')
        } else {
            fetchOrders()
        }
    }, [])

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <h1 className='text-center font-semibold text-2xl p-8'>My Orders</h1>
                                <table
                                    className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                    <thead
                                        className="border-b border-neutral-200 font-medium dark:border-black/10 text-black">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">OID</th>
                                            <th scope="col" className="px-6 py-4">Email</th>
                                            <th scope="col" className="px-6 py-4">Amount</th>
                                            <th scope="col" className="px-6 py-4">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-black'>
                                        {orders.map((item, index) => (
                                            <tr className="border-b border-neutral-200 dark:border-black/10" key={index}>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{item.orderId}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{item.amount}</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <Link href={'/order?id=' + item._id}>Details</Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default orders