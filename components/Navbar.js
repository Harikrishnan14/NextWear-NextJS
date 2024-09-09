import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { IoClose, IoBagCheck } from "react-icons/io5";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

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
            <div ref={ref} className="sideCart absolute top-0 right-0 bg-blue-100 px-8 py-10 transform transition-transform translate-x-full w-72 h-full">
                <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute right-3 top-5 text-3xl text-blue-500 cursor-pointer">
                    <IoClose />
                </span>
                <ol className="list-decimal font-semibold">
                    <li>
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">TShirts - Wear the code</div>
                            <div className="flex items-center justify-center w-1/3 font-semibold text-lg">
                                <AiOutlineMinusCircle className="cursor-pointer" />
                                <span className="mx-2 text-sm">1</span>
                                <AiOutlinePlusCircle className="cursor-pointer" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">TShirts - Wear the code</div>
                            <div className="flex items-center justify-center w-1/3 font-semibold text-lg">
                                <AiOutlineMinusCircle className="cursor-pointer" />
                                <span className="mx-2 text-sm">1</span>
                                <AiOutlinePlusCircle className="cursor-pointer" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">TShirts - Wear the code</div>
                            <div className="flex items-center justify-center w-1/3 font-semibold text-lg">
                                <AiOutlineMinusCircle className="cursor-pointer" />
                                <span className="mx-2 text-sm">1</span>
                                <AiOutlinePlusCircle className="cursor-pointer" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">TShirts - Wear the code</div>
                            <div className="flex items-center justify-center w-1/3 font-semibold text-lg">
                                <AiOutlineMinusCircle className="cursor-pointer" />
                                <span className="mx-2 text-sm">1</span>
                                <AiOutlinePlusCircle className="cursor-pointer" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">TShirts - Wear the code</div>
                            <div className="flex items-center justify-center w-1/3 font-semibold text-lg">
                                <AiOutlineMinusCircle className="cursor-pointer" />
                                <span className="mx-2 text-sm">1</span>
                                <AiOutlinePlusCircle className="cursor-pointer" />
                            </div>
                        </div>
                    </li>
                </ol>
                <div className="flex">
                    <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                        <IoBagCheck className='m-1' />Checkout
                    </button>
                    <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm text-nowrap">
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar