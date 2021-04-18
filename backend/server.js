// EXPRESS
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import asyncHandler from 'express-async-handler'
import * as path from 'path'
import {getProductsByCategory, getProductById, addProduct, updProduct} from './controllers/productController.js'
import {authAdmin} from './controllers/adminController.js'
import { protect } from './middleware/authMiddleware.js'
import connectDB from './config/db.js'
import cors from 'cors'
import multer from 'multer'
import fs from 'fs'
dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use('/images', express.static('images'))
app.use(cors())
// EXPRESS

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = `images/${req.body.pid}`
        if(fs.existsSync(dir)){
            return cb(null, dir)
            
        }else{
            return fs.mkdir(dir, error => cb(error, dir))
        }
            
    },
    filename: function (req, file, cb) {
        cb(null, req.body.pid + '-' + Date.now() + Math.floor(Math.random() * 10000) + path.extname(file.originalname))
    }
  })
var upload = multer({ storage: storage })
//to routing tha ginei topika giati einai mono gia products kai 1 admin
app.get('/api/products/:animal/:category/:subcategory?', getProductsByCategory)
app.get('/api/product/:id', getProductById)

app.post('/api/admin/login', authAdmin)
app.post('/api/admin/add', protect, addProduct)
app.put('/api/admin/upd', protect, updProduct)
app.post('/api/admin/addimg', protect, upload.array('images', 5), (req, res) => {
    const imgUrls = []
    req.files.forEach((file) => imgUrls.push(`${file.destination}/${file.filename}`))
    res.json(imgUrls)
})
app.post('/api/admin/delprev', protect, asyncHandler( async(req, res) => {
    const dir = `images/${req.body.pid}`
    fs.rmSync(dir, {recursive: true, force: true})
    res.json('ok ta esvhsa')
}))







// AYTA EINAI NA TA VALW STO TELOS STO PRODUCTION GIA NA DEIXNEI TO PAYGE
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, 'frontend' , 'build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
})


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))