import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let token = req.body.token
        let user = jwt.verify(token, process.env.JWT_SECRET)
        // let user = await User.find({ email: req.body.email })
        res.status(200).json({ user });
    } else {
        res.status(400).json({ error: "error" });
    }
}

export default connectDb(handler);
