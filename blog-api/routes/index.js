const express = require('express');
const router = express.Router();

const PostCtrl = require('../controllers/post');
const UserCtrl = require('../controllers/user');

const AuthMiddleware = (req, res, next) => {
    console.log('middleware');
    if(!!!req.headers.authorization) {
        res.sendStatus(401);
    } else { 
        next();
    }
}

// No Auth
router.get('/', PostCtrl.get);
router.get('/posts/:page?', PostCtrl.posts);
router.get('/post/:slug', PostCtrl.getBySlug);
router.get('/categorias', PostCtrl.categories);
router.post('/usuario/novo', UserCtrl.create);

// Auth
router.post('/posts', AuthMiddleware, PostCtrl.create);

module.exports = router