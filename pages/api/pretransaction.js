const https = require('https');
const PaytmChecksum = require('paytmchecksum');
import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        // Initiate an order correspponding to this order id
        let order = new Order({
            email: req.body.email,
            orderId: req.body.oid,
            address: req.body.address,
            amount: req.body.subTotal,
            products: req.body.cart
        })
        await order.save()

        // Insert an entry in the Orders table with status as Pending
        var paytmParams = {};

        paytmParams.body = {
            "requestType": "Payment",
            "mid": process.env.NEXT_PUBLIC_PAYTM_MID,
            "websiteName": "YOUR_WEBSITE_NAME",
            "orderId": req.body.oid,
            "callbackUrl": `${process.env.NEXT_PUBLIC_HOST}/api/posttransaction`,
            "txnAmount": {
                "value": req.body.subTotal,
                "currency": "INR",
            },
            "userInfo": {
                "custId": req.body.email,
            },
        };

        const checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_MKEY)

        paytmParams.head = {
            "signature": checksum
        };

        var post_data = JSON.stringify(paytmParams);

        const requestAsync = () => {
            return new Promise((resolve, reject) => {
                var options = {

                    /* for Staging */
                    // hostname: 'securestage.paytmpayments.com',

                    /* for Production */
                    hostname: 'secure.paytmpayments.com',

                    port: 443,
                    path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.oid}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };

                var response = "";
                var post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });

                    post_res.on('end', function () {
                        resolve(JSON.parse(response).body)
                    });
                });

                post_req.write(post_data);
                post_req.end();
            })
        }

        let myR = await requestAsync()
        res.status(200).json(myR)

    }
}

export default connectDb(handler);