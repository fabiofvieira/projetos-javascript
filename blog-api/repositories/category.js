const { Category } = require('../models');

module.exports.getList = () => {
    return new Promise((resolve, reject) => {
        Category.findAll({
            order: [ ['name', 'ASC'] ]
        }).then(r => {
            const list = r.map((v, k) => ({ key: v.id, value: v.name }))
            resolve(list);
        }).catch(err => reject(err));
    });
}