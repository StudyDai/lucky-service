// 因URkoa的router第三方包
const koaRouter = require('@koa/router')
// 拿到路由, 添加/user前缀
const userRouter = new koaRouter({ prefix: '/user' })
// 导入处理的逻辑
const userController = require('../routerHandle/user.control')
// 导入中间件
const { verifyLogin } = require('../middleware/login.middleware')
// 为用户提供数据 测试
userRouter.get('/', userController.create)
userRouter.get('/login', verifyLogin, userController.login)

module.exports = userRouter