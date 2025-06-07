import React, { useEffect, useState } from 'react'
import { IoBagCheck } from "react-icons/io5";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { Bounce, ToastContainer } from 'react-toastify';

const Checkout = ({ cart, clearCart, addToCart, removeFromCart, subTotal }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [user, setUser] = useState()

  const handleChange = async (e) => {
    if (e.target.name === "name") {
      setName(e.target.value)
    } else if (e.target.name === "email") {
      setEmail(e.target.value)
    } else if (e.target.name === "address") {
      setAddress(e.target.value)
    } else if (e.target.name === "phone") {
      setPhone(e.target.value)
    } else if (e.target.name === "city") {
      setCity(e.target.value)
    } else if (e.target.name === "state") {
      setState(e.target.value)
    } else if (e.target.name === "pincode") {
      setPincode(e.target.value)
      if (e.target.value.length === 6) {
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
        let pinJson = await pins.json()
        if (Object.keys(pinJson).includes(e.target.value)) {
          setCity(pinJson[e.target.value][0])
          setState(pinJson[e.target.value][1])
        } else {
          setCity('')
          setState('')
        }
      } else {
        setCity('')
        setState('')
      }
    }
  }

  const InitiatePayment = async () => {
    let oid = Math.floor(Math.random() * Date.now())

    // Get a transaction token
    const data = { cart, subTotal, oid, email: email, name, address, pincode, phone }
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    let txnRes = await a.json()
    if (txnRes.succes) {
      let txnToken = txnRes.txnToken

      var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
          "orderId": oid, /* update order id */
          "token": txnToken, /* update token value */
          "tokenType": "TXN_TOKEN",
          "amount": subTotal /* update amount */
        },
        "handler": {
          "notifyMerchant": function (eventName, data) {
            console.log("notifyMerchant handler function called");
            console.log("eventName => ", eventName);
            console.log("data => ", data);
          }
        }
      };
      window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
        // after successfully updating configuration, invoke JS Checkout
        window.Paytm.CheckoutJS.invoke();
      }).catch(function onError(error) {
        console.error("error => ", error);
      });
    } else {
      clearCart()
      toast.error(txnRes.error, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  useEffect(() => {
    if (name.length > 3 && email.length > 3 && address.length > 3 && phone.length > 3 && city.length > 3 && state.length > 3 && pincode.length > 3) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [name, email, address, phone, city, state, pincode])

  useEffect(() => {
    const myUser = JSON.parse(localStorage.getItem('myUser'))
    if (myUser) {
      setUser(myUser)
      setEmail(user?.email)
    }
  }, [])

  return (
    <div className='container px-2 sm:m-auto'>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <Script type='application/javascript' crossOrigin='anonymous' src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} />
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>

      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
      <div className='mx-auto flex my-2'>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            {user?.token ? (
              <input type="email" id="email" name="email" value={user?.email} readOnly className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            ) : (
              <input type="email" id="email" name="email" value={email} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            )}

          </div>
        </div>
      </div>

      <div className="px-2 w-f">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea id="address" name="address" value={address} onChange={handleChange} rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"></textarea>
        </div>
      </div>

      <div className='mx-auto flex my-2'>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="phone" id="phone" name="phone" placeholder='Your 10 digit Phone Number' value={phone} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pin Code</label>
            <input type="email" id="pincode" name="pincode" value={pincode} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className='mx-auto flex my-2'>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" value={state} readOnly onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">District</label>
            <input type="text" id="city" name="city" value={city} readOnly onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                <div className="font-semibold">{cart[item].name}({cart[item].size}/{cart[item].variant})</div>
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
          <button onClick={InitiatePayment} disabled={isDisabled} className="flex mr-2 text-white bg-indigo-500 disabled:bg-indigo-300 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            <IoBagCheck className='m-1' />Pay ₹{subTotal}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Checkout