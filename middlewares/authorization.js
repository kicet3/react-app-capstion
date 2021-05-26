const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = (req, res, next) => {
    try {
        req.decoded = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        return next();
    } catch (err) {
        if(err.name === 'TokenExpiredError') {
            return res.status(419).json({
                resultCode: 419,
                error: "Token expired"
            });
        }
        return res.status(401).json({
            resultCode: 401,
            error: "Invalid Token"
        })
    }
};
