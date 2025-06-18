import Forgot from "@/models/Forgot";
import User from "@/models/User";

export default async function handler(req, res) {
    // TODO : Check if the user exists in the Database
    // TODO : Send an email to the User
    if (req.body.sendMail) {
        let token = `xczxccccccc`
        let forgot = new Forgot({
            email: req.body.email,
            token: token,
        })
        let email = `We have sent you this email in response to your request to reset your password on NextWear.com

                            To reset your password, please follow the link below:

                            <a href="http://localhost:3000/forgot-password?token=${token}">Click here to reset your password</a>

                            <br/><br/>

                            We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your My Account Page and Change your Password.

                            <br/><br/>`
        // TODO : Check if the user exists in the Database
    } else {
        // TODO : Reset User Password
    }

    res.status(200).json({ success: true });
}
