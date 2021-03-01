const router = require('koa-router')()
// const articleController  = require('../controllers/website');

router.prefix('/api')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })
// router.get('/getArticle', articleController.getArticle);

module.exports = router

