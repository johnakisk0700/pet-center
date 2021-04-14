import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // edw to zwo einai array giati merika pragmata einai gia polla zwa
    animal: {
        type: [String],
        required: true 
    },
    pid: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: false,
        default: undefined
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: false
    },
    marka: {
        type: String,
        required: false,
        default: undefined
    },
    colors: {
        type: [String],
        required: false,
        default: undefined
    },
    size: {
        type: [String],
        required: false,
        default: undefined        
    }
})

const Product = mongoose.model('Product', productSchema)
export default Product