'use strict'
const salt = "123456789";
const jwt = require('jsonwebtoken');

module.exports.generateToken = async ( data ) => {
    return jwt.sign(data, salt, { expiresIn: '1d' });
}
const decodeToken = async ( token ) => {
    const data = await jwt.verify(token, salt);
    return data;
 }
module.exports.decodeToken = decodeToken;

module.exports.authorize = (req, res, next) => {
    const token = (req.body.token || req.query.token ||req.headers['x-access-token'] || req.headers['authorization'] || '').replace('Bearer ','');
    if(!token) {
        res.status(401).send({
            message: 'Usuário não autenticado'
        });
    } else {
        jwt.verify(token, salt, async (err, decoded) => {
            if(err) {
                res.status(401).send({
                    message: 'Token Inválido'
                });
            } else {
                const tokenData = await decodeToken(token);
                req.user = tokenData;
                next();
            }
        })
    }
}