import asyncHandler from 'express-async-handler'
import tokenGenerator from '../utils/tokenGenerator.js'

const authAdmin = asyncHandler(async (req, res) => {
    const {username, password} = req.body
    console.log(req.body)
    if(username === 'peostifths' && password === 'peos'){
        res.json({
            token: tokenGenerator(password)
        })
    } else {
        res.status(401)
        throw new Error ('Δεν είναι αυτός ο κωδικός')
    }
})

export {authAdmin}