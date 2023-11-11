const jwt = require("jsonwebtoken");


const accessValidation = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({
            message: 'token diperlukan'
        })
    }
    const token = authorization.split(' ')[1]
    const secretKey = process.env.SECRET_KEY
    try {
        const jwtDecode = jwt.verify(token, secretKey)
        req.userData = jwtDecode
    } catch (error) {
        return res.status(401).json({
            message: 'unauthorized'
        })
    }
    next()
}

module.exports = accessValidation