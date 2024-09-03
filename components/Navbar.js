import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
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
                    <button>
                        <MdShoppingCart className='text-xl md:text-3xl' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar