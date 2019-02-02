const express = require('express');
const router = express.Router();

const PostCtrl = require('../controllers/post');

router.get('/', PostCtrl.get);
router.get('/posts', PostCtrl.posts);
router.post('/posts', PostCtrl.create);
router.get('/post/:slug', PostCtrl.getBySlug);
router.get('/categorias', PostCtrl.categories);

module.exports = router