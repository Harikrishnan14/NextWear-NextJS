import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className="logo">
                <Image src='/Logo.png' alt='' height={60} width={60} />
            </div>
            <div className="nav">
                <ul className='flex item-center'>
                    <li>Tshirts</li>
                    <li>Hoodies</li>
                    <li>Stickers</li>
                    <li>Mugs</li>
                </ul>
            </div>
            <div>
                <div className="cart">
                    <button>Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar