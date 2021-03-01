const router = require('koa-router')()
const websiteController  = require('../controllers/website');

router.prefix('/website')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.get('/getwebsite', websiteController.getWebsiteList);
router.post('/savewebsiteconfig', websiteController.savewebsiteconfig);

module.exports = router
