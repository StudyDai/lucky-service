// 导入数据库操作
// const UserService = require()
const fs = require('fs')
class UserController {
    create(ctx) {
        // const user = ctx.requet.body
        ctx.body = {
            status: 200,
            msg: "响应成功"
        }
    }
    login(ctx) {
        let randomCode = ''
        randomCode = Math.floor(Math.random() * 9999)
        ctx.body = {
            code: 200,
            msg: `验证码是${randomCode}`
        }
        // 产生个随机数,然后返回给用户
    }
}

module.exports = new UserController()