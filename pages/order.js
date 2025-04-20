import React from 'react'

const Order = () => {
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
                    <th scope="col" className="px-6 py-4">First</th>
                    <th scope="col" className="px-6 py-4">Last</th>
                    <th scope="col" className="px-6 py-4">Handle</th>
                  </tr>
                </thead>
                <tbody className='text-black'>
                  <tr className="border-b border-neutral-200 dark:border-black/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-black/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-black/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium my-5">SubTotal: ₹1158.00</h1>
            <button className="flex text-white bg-indigo-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </div>
    </section>
  )
}

export default Order