const repository = require('../repositories/category');

module.exports.getList = (req, res, next) => {
    repository
        .getList()
        .then(r => res.status(200).send(r))
        .catch(err => res.status(500).send(err));
}