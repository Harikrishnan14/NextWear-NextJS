import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

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
        <div className='flex flex-col md:flex-row justify-between md:justify-between items-center px-2 shadow-md'>
            <div className="logo mx-5">
                <Link href='/'>
                    <Image src='/Logo.png' alt='' height={60} width={60} />
                </Link>
            </div>
            <div className="nav">
                <ul className='flex item-center space-x-6 font-bold md:text-md'>
                    <Link href='/tshirts'>
                        <li>Tshirts</li>
                    </Link>
                    <Link href='/hoodies'>
                        <li>Hoodies</li>
                    </Link>
                    <Link href='/stickers'>
                        <li>Stickers</li>
                    </Link>
                    <Link href='/mugs'>
                        <li>Mugs</li>
                    </Link>
                </ul>
            </div>
            <div>
                <div className="cart">
                    <button onClick={toggleCart}>
                        <MdShoppingCart className='text-xl md:text-3xl' />
                    </button>
                </div>
            </div>
            <div ref={ref} className="sideCart absolute top-0 right-0 bg-blue-100 p-10 transform transition-transform translate-x-full">
                <h2 className="font-bold text-xl">Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute right-3 top-5 text-3xl text-blue-500 cursor-pointer">
                    <IoClose />
                </span>
                <ol>
                    <li>
                        <span>TShirts - Wear the code</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Navbar