import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const getProductsByCategory = asyncHandler(async (req, res) => {
    const products = await Product.find({animal: req.params.animal, category: req.params.category, subcategory: req.params.subcategory}).lean()
    res.json(products)  
})

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findOne({pid: req.params.id}).lean()
    res.json(product)  
})

const addProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.json('Επιτυχία από το backend')
    } catch (error) {
        res.json([error.name, error.code])
    } 
})

const updProduct = asyncHandler(async (req,res) => {
    try {
        let product = await Product.findOneAndUpdate({pid: req.body.pid}, req.body)
        res.json('Επιτυχία στο update της db σύντροφοι')
    } catch (error) {
        console.log(error)
    }
})
export { getProductsByCategory, getProductById, addProduct, updProduct }