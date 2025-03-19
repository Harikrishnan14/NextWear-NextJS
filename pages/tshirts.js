import Link from 'next/link'
import React from 'react'
import Product from "@/models/Product";
import mongoose from "mongoose";

const Tshirts = ({ products }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 justify-center">
                    {products?.map((item, index) => (
                        <Link passHref={true} href={`/product/${item?.slug}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg mb-8" key={index}>
                            <div>
                                <div className="block relative rounded overflow-hidden">
                                    <img alt="tshirt" className="object-cover w-full object-center md:h-[50vh] block" src={item?.img} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{item?.title}</h2>
                                    <p className="mt-1">₹{item?.price}</p>
                                    <p className="mt-1">S, M, L XL, XXL</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps() {
    if (!mongoose.connection.readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let products = await Product.find({ category: 'tshirt' })

    return {
        props: { products: JSON.parse(JSON.stringify(products)) }
    };
}

export default Tshirts