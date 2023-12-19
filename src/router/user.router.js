// 因URkoa的router第三方包
const koaRouter = require('@koa/router')
// 拿到路由, 添加/user前缀
const userRouter = new koaRouter({ prefix: '/user' })
// 导入处理的逻辑
const userController = require('../routerHandle/user.control')
// 导入中间件
const { verifyLogin } = require('../middleware/login.middleware')
const { verifyToken } = require('../middleware/user.middleware')
// 为用户提供数据 测试
userRouter.get('/', userController.create)
// 发送验证码
userRouter.post('/getcode', verifyLogin, userController.getcode)
// 登录
userRouter.post('/login', verifyLogin, userController.login)
// 获取用户信息
userRouter.get('/userInfo', verifyToken, userController.getUserInfo)
// 更新用户信息
userRouter.post('/updateInfo', verifyToken, userController.updateInfo)
// 更改用户的手机号
userRouter.post('/updatePhone', verifyToken, userController.updatephone)

module.exports = userRouter