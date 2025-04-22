const https = require('https');
const PaytmChecksum = require('./PaytmChecksum');

export default function handler(req, res) {
    if (req.method == 'POST') {
        var paytmParams = {};

        paytmParams.body = {
            "requestType": "Payment",
            "mid": process.env.PAYTM_MID,
            "websiteName": "YOUR_WEBSITE_NAME",
            "orderId": "ORDERID_98765",
            "callbackUrl": "https://<callback URL to be used by merchant>",
            "txnAmount": {
                "value": "1.00",
                "currency": "INR",
            },
            "userInfo": {
                "custId": "CUST_001",
            },
        };

        PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), "YOUR_MERCHANT_KEY").then(function (checksum) {

            paytmParams.head = {
                "signature": checksum
            };

            var post_data = JSON.stringify(paytmParams);

            var options = {

                /* for Staging */
                hostname: 'securestage.paytmpayments.com',

                /* for Production */
                // hostname: 'secure.paytmpayments.com',

                port: 443,
                path: '/theia/api/v1/initiateTransaction?mid=YOUR_MID_HERE&orderId=ORDERID_98765',
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
                    console.log('Response: ', response);
                });
            });

            post_req.write(post_data);
            post_req.end();
        });

    }
}