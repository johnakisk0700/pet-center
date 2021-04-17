import asyncHandler from 'express-async-handler'
import tokenGenerator from '../utils/tokenGenerator.js'

const authAdmin = asyncHandler(async (req, res) => {
    const {username, password} = req.body
    console.log(req.body)
    if(username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS){
        res.json({
            token: tokenGenerator(password)
        })
    } else {
        res.status(401)
        throw new Error ('Δεν είναι αυτός ο κωδικός')
    }
})

export {authAdmin}