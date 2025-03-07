import React from 'react'
import { IoBagCheck } from "react-icons/io5";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Link from 'next/link';

const Checkout = ({ cart, clearCart, addToCart, removeFromCart, subTotal }) => {
  return (
    <div className='container px-2 sm:m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>

      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
      <div className='mx-auto flex my-2'>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className="px-2 w-f">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea id="address" name="address" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"></textarea>
        </div>
      </div>

      <div className='mx-auto flex my-2'>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className='mx-auto flex my-2'>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pin Code</label>
            <input type="email" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <h2 className='font-semibold text-xl'>2. Review Cart Items & Pay</h2>
      <div className="sideCart p-6 my-4 bg-blue-100">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && (
            <div className="my-4 font-semibold">Your cart is Empty!</div>
          )}
          {Object.keys(cart)?.map((item, index) => (
            <li key={index}>
              <div className="item flex m-2">
                <div className="font-semibold">{cart[item].name}</div>
                <div className="flex items-center justify-center w-1/3 font-semibold text-lg">
                  <AiOutlineMinusCircle className="cursor-pointer" onClick={() => removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)} />
                  <span className="mx-2 text-sm">{cart[item].qty}</span>
                  <AiOutlinePlusCircle className="cursor-pointer" onClick={() => addToCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)} />
                </div>
              </div>
            </li>
          ))}
        </ol>
        <span className="font-bold">Subtoal: ₹{subTotal}</span>
      </div>
      <div className="mx-4">
        <Link href={'/checkout'}>
          <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            <IoBagCheck className='m-1' />Pay ₹{subTotal}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Checkout