const { User } = require('../models');

module.exports.create = (data, doLogin = false) => {
    return new Promise((resolve, reject) => {
        User.count({
            where: { email: (data.email || '').toLowerCase() }
        }).then(exists => {
            if(exists > 0)
                throw "Usuário já existe";
            return User.create(data)
        }).then(user => {
            if(doLogin) {
                // faz o auth
                resolve(user)
            } else {
                resolve(user)
            }
        }).catch(err => reject(err))
    });
}


module.exports.authenticate = ( data ) => {
    return new Promise((resolve, reject) => {
        User.findOne({
            where: {
                email: data.email,
                password: data.password
            }
        }).then(user => {
            if(!user) reject('Usuário não encontrado');
            resolve(user);
        }).catch(err => reject(err));
    })
}