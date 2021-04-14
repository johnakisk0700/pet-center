import jwt from 'jsonwebtoken'

const generateToken = (username) => {
    return jwt.sign({username}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

export default generateToken