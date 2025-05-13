import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { IoClose, IoBagCheck } from "react-icons/io5";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ user, cart, addToCart, removeFromCart, clearCart, subTotal, logout }) => {

    const [dropdown, setDropdown] = useState(false)
    const ref = useRef()

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    return (
        <div className='flex flex-col md:flex-row justify-between md:justify-between items-center px-2 shadow-md sticky top-0 bg-white z-10'>
            <div className="logo mr-auto md:mx-5">
                <Link href='/'>
                    <Image src='/Logo.png' alt='' height={60} width={60} />
                </Link>
            </div>
            <div className="nav">
                <ul className='flex item-center space-x-6 font-bold md:text-md'>
                    <Link href='/tshirts' className='hover:text-indigo-600'>
                        <li>Tshirts</li>
                    </Link>
                    <Link href='/hoodies' className='hover:text-indigo-600'>
                        <li>Hoodies</li>
                    </Link>
                    <Link href='/stickers' className='hover:text-indigo-600'>
                        <li>Stickers</li>
                    </Link>
                    <Link href='/mugs' className='hover:text-indigo-600'>
                        <li>Mugs</li>
                    </Link>
                </ul>
            </div>
            <div>
                <div className="cursor-pointer cart absolute right-0 top-4 mx-5 flex items-center">
                    <span onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                        {dropdown && <div className="absolute right-5 top-6 py-2 w-32 bg-white shadow-lg border rounded-md px-5" onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                            <ul>
                                <Link href='/myaccount'>
                                    <li className='py-1 text-sm font-bold hover:text-indigo-700'>My Account</li>
                                </Link>
                                <Link href='/orders'>
                                    <li className='py-1 text-sm font-bold hover:text-indigo-700'>Orders</li>
                                </Link>
                                <li className='py-1 text-sm font-bold hover:text-indigo-700' onClick={logout}>Logout</li>
                            </ul>
                        </div>}
                        {user.value && <MdAccountCircle className='text-xl md:text-3xl me-3' />}
                    </span>
                    {!user.value && (
                        <Link href='/login'>
                            <button className='bg-indigo-600 px-2 py-1 rounded-md text-sm text-white mx-2'>Login</button>
                        </Link>
                    )}
                    <MdShoppingCart className='text-xl md:text-3xl' onClick={toggleCart} />
                </div>
            </div>
            <div ref={ref} className={`sideCart absolute top-0 right-0 bg-blue-100 px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'} w-72 h-[100vh] overflow-y-auto`}>
                <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute right-3 top-5 text-3xl text-blue-500 cursor-pointer">
                    <IoClose />
                </span>
                <ol className="list-decimal font-semibold">
                    {Object.keys(cart).length === 0 && (
                        <div className="my-4 font-semibold">Your cart is Empty!</div>
                    )}
                    {Object.keys(cart)?.map((item, index) => (
                        <li key={index}>
                            <div className="item flex my-5">
                                <div className="w-2/3 font-semibold">{cart[item].name}({cart[item].size}/{cart[item].variant})</div>
                                <div className="flex items-center justify-center w-1/3 font-semibold text-lg">
                                    <AiOutlineMinusCircle className="cursor-pointer" onClick={() => removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)} />
                                    <span className="mx-2 text-sm">{cart[item].qty}</span>
                                    <AiOutlinePlusCircle className="cursor-pointer" onClick={() => addToCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
                <div className="font-bold my-2">Subtoal: ₹{subTotal}</div>
                <div className="flex">
                    <Link href={'/checkout'}>
                        <button
                            className="flex mr-2 text-white bg-indigo-500 disabled:bg-indigo-300 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm"
                            disabled={Object.keys(cart).length === 0}
                        >
                            <IoBagCheck className='m-1' />Checkout
                        </button>
                    </Link>
                    <button
                        className="flex mr-2 text-white bg-indigo-500 disabled:bg-indigo-300 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm text-nowrap"
                        onClick={clearCart}
                        disabled={Object.keys(cart).length === 0}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar