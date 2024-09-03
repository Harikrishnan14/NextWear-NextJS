import React from 'react'

const Tshirts = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <Link href=''>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover w-full object-center md:h-[50vh] block" src="https://c.media-amazon.com/images/I/71Z49bHbAiL._SY741_.jpg" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Wear The Code</h2>
                                <p className="mt-1">₹399</p>
                                <p className="mt-1">S, M, L XL, XXL</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Tshirts