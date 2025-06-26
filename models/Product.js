const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
        default: "https://mrmockup.com/wp-content/uploads/2024/07/Free-Backside-T-Shirt-Mockup-Square-1024x1024.jpg?x25494"
    },
    category: {
        type: String,
        required: true,
    },
    size: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: String,
        required: true,
    },
    availableQty: {
        type: String,
        required: true,
    }
}, { timestamps: true })

// mongoose.models = {}
// export default mongoose.model("Product", ProductSchema)
export default mongoose.models.Product || mongoose.model("Product", ProductSchema)