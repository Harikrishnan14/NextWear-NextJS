import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between md:justify-between items-center px-2'>
            <div className="logo mx-5">
                <Image src='/Logo.png' alt='' height={60} width={60} />
            </div>
            <div className="nav">
                <ul className='flex item-center space-x-2 font-bold md:text-xl'>
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