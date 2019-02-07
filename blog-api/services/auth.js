'use strict'
const salt = "123456789";
const jwt = require('jsonwebtoken');

module.exports.generateToken = async ( data ) => {
    return jwt.sign(data, salt, { expiresIn: '1d' });
}

module.exports.decodeToken = async ( token ) => {
   return await jwt.verify(token, salt);
}

module.exports.authorize = (req, res, next) => {
    const token = req.body.token || req.query.token ||req.headers['x-access-token'];

    if(!token) {
        res.status(401).send({
            message: 'Usuário não autenticado'
        });
    } else {
        jwt.verify(token, salt, (err, decoded) => {
            if(err) {
                res.status(401).send({
                    message: 'Token Inválido'
                });
            } else {
                next();
            }
        })
    }
}