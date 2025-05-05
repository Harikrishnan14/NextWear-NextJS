import Order from '@/models/Order'
import mongoose from 'mongoose'
import React, { useEffect } from 'react'

const MyOrder = ({ order }) => {

  const products = order.products

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/')
    }
  }, [])

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">NEXTWEAR</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">Order ID: #{order.orderId}</h1>
            <span className="text-sm title-font text-gray-500 tracking-widest">Your order has been successfully placed. Your payment status is: {order.status}</span>
            <div className="overflow-hidden my-5">
              <table
                className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead
                  className="border-b border-neutral-200 font-medium dark:border-black/10 text-black">
                  <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className="px-6 py-4">Item Desc</th>
                    <th scope="col" className="px-6 py-4">Qty</th>
                    <th scope="col" className="px-6 py-4">Total</th>
                  </tr>
                </thead>
                <tbody className='text-black'>

                  {Object.keys(products).map((item, index) => (
                    <tr className="border-b border-neutral-200 dark:border-black/10" key={index}>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                      <td className="whitespace-nowrap px-6 py-4">{products[index].name} ({products[index].size}/{products[index].variant})</td>
                      <td className="whitespace-nowrap px-6 py-4">{products[index].qty}</td>
                      <td className="whitespace-nowrap px-6 py-4">₹{products[index].price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium my-5">SubTotal: ₹{order.amount}</h1>
            <button className="flex text-white bg-indigo-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let order = await Order.findById(context.query.id)
  // let colorSizeSlug = {}
  // for (let item of variants) {
  //   if (Object.keys(colorSizeSlug).includes(item.color)) {
  //     colorSizeSlug[item.color][item.size] = { slug: item.slug }
  //   } else {
  //     colorSizeSlug[item.color] = {}
  //     colorSizeSlug[item.color][item.size] = { slug: item.slug }
  //   }
  // }
  return {
    props: {
      order: JSON.parse(JSON.stringify(order))
    }
  };
}

export default MyOrder