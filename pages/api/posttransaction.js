import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";

const handler = async (req, res) => {
    let order;
    // TODO : Validate paytm checksum

    // Update status into Orders table after checking the transaction status
    if (req.body.STATUS === 'TXN_SUCCESS') {
        order = Order.findOneAndUpdate({ orderId: req.body.ORDERID }, { status: 'Paid', paymentInfo: JSON.stringify(req.body) })
    } else if (req.body.STATUS === 'PENDING') {
        order = Order.findOneAndUpdate({ orderId: req.body.ORDERID }, { status: 'Pending', paymentInfo: JSON.stringify(req.body) })
    }

    /// Initiate Shipping

    // Redirect user to the order confirmation page
    res.redirect('/order?id=' + order._id, 200)


    // res.status(200).json({ body: req.body });
}

export default connectDb(handler);
