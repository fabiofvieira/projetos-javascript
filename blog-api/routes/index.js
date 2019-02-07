const express = require('express');
const router = express.Router();

const PostCtrl = require('../controllers/post');
const UserCtrl = require('../controllers/user');
const CategoryCtrl = require('../controllers/category');
const AuthService = require('../services/auth');


const AuthMiddleware = (req, res, next) => {
    console.log('middleware');
    AuthService.authorize(req, res, next);
}

// No Auth
router.get('/', PostCtrl.get);
router.get('/posts/:page?', PostCtrl.posts);
router.get('/post/:slug', PostCtrl.getBySlug);
router.get('/categorias', CategoryCtrl.getList);
router.post('/usuario/novo', UserCtrl.create);


// Auth
router.post('/posts', AuthMiddleware, PostCtrl.create);

module.exports = router