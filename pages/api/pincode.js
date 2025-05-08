export default function handler(req, res) {
    let pinCodes = {
        "110001": ["Central Delhi", "Delhi"],
        "560001": ["Bangalore", "Karnataka"],
        "400001": ["Mumbai", "Maharashtra"],
        "700001": ["West Bengal", "Kolkata"],
        "600001": ["Tamil Nadu", "Chennai"]
    }
    res.status(200).json(pinCodes);
}
