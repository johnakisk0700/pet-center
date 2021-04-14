import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler( async(req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            next()
        } catch (error) {
            console.log('De diabazei swsta to token h einai lathos token')
        }
    }

    if(!token){
        res.status(401)
        throw new Error ('Kati exeis kanei skata me to token')
    }

})

export {protect}