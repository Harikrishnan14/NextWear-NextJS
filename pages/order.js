import Order from '@/models/Order'
import mongoose from 'mongoose'
import React from 'react'

const MyOrder = ({ order }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">NEXTWEAR</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">Order ID: #8977</h1>
            <span className="text-sm title-font text-gray-500 tracking-widest">Your order has been successfully placed</span>
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
                  <tr className="border-b border-neutral-200 dark:border-black/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td className="whitespace-nowrap px-6 py-4">Hoodie</td>
                    <td className="whitespace-nowrap px-6 py-4">2</td>
                    <td className="whitespace-nowrap px-6 py-4">₹1,998</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-black/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <td className="whitespace-nowrap px-6 py-4">Tshirt</td>
                    <td className="whitespace-nowrap px-6 py-4">1</td>
                    <td className="whitespace-nowrap px-6 py-4">₹699</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-black/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                    <td className="whitespace-nowrap px-6 py-4">Stickers</td>
                    <td className="whitespace-nowrap px-6 py-4">5</td>
                    <td className="whitespace-nowrap px-6 py-4">₹125</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium my-5">SubTotal: ₹2,822.00</h1>
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