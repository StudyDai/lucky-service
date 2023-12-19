const koaRouter = require('@koa/router')
const { verifyToken } = require('../middleware/user.middleware')
const goodController = require('../routerHandle/good.control')
const goodRouter = new koaRouter({ prefix: '/good' })

// 调起支付界面
goodRouter.get('/pay/:id', goodController.payment)
// 查询支付状态
goodRouter.post('/pay/:id/result', goodController.verifyPayResult)
// 获取所有的展示商品
goodRouter.get('/goodlist', goodController.getList)

module.exports = goodRouter