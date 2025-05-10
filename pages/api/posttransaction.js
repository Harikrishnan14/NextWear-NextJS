import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";
import Product from "@/models/Product";

const handler = async (req, res) => {
    let order;
    // TODO : Validate paytm checksum

    // Update status into Orders table after checking the transaction status
    if (req.body.STATUS === 'TXN_SUCCESS') {
        order = Order.findOneAndUpdate({ orderId: req.body.ORDERID }, { status: 'Paid', paymentInfo: JSON.stringify(req.body) })
        let products = order.products
        for (let slug in products) {
            await Product.findOneAndUpdate({ slug: slug }, { $inc: { "availableQty": -products[slug].qty } })
        }
    } else if (req.body.STATUS === 'PENDING') {
        order = Order.findOneAndUpdate({ orderId: req.body.ORDERID }, { status: 'Pending', paymentInfo: JSON.stringify(req.body) })
    }

    /// Initiate Shipping

    // Redirect user to the order confirmation page
    res.redirect('/order?id=&clearCart=1' + order._id, 200)


    // res.status(200).json({ body: req.body });
}

export default connectDb(handler);
