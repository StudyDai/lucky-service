// 导入数据库操作
// const UserService = require()
const fs = require('fs')
// 引入生成token的中间件
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../config/screct')
const loginService = require('../service/login.service')
class UserController {
    /**
     * 测试接口
     * @param {object} ctx 提供的实例
     */
    create(ctx) {
        // const user = ctx.requet.body
        ctx.body = {
            status: 200,
            msg: "响应成功"
        }
    }
    /**
     * 获取验证码
     * @param {object} ctx 提供的实例
     */
    getcode(ctx) {
        let randomCode = ''
        randomCode = Math.floor(Math.random() * 9999)
        ctx.body = {
            code: 200,
            msg: `验证码是${randomCode}`
        }
        // 产生个随机数,然后返回给用户
    }
    /**
     * 确定登录
     * @param {object} ctx 提供的实例
     */
    async login(ctx) {
        const { phone } = ctx.request.body
        // 先去查询一下数据库是否有我这个账号的内容
        const result = await loginService.createToken(phone)
        let time = new Date().getTime()
        const token = jwt.sign(result, PRIVATE_KEY, {
            expiresIn: 30 * 60,
            algorithm: 'RS256'
        })
        ctx.body = {
            code: 200,
            token: `Bearer ${token}`
        }
    }
    /**
     * 获取用户的个人信息
     * @param {object} ctx 提供的实例
     */
    getUserInfo(ctx) {
        const { username, gender, birthday, address, phone, user_avatar } = ctx.user
        let data = {
            username,
            gender,
            birthday,
            address,
            phone,
            user_avatar
        }
        ctx.body = {
            code: 200,
            msg: '获取成功',
            data
        }
    }
    /**
     * 更新用户个人信息
     * @param {object} ctx 提供的实例
     */
    async updateInfo(ctx) {
        const result = await loginService.updateData(ctx)
        if (result) {
            ctx.body = {
                code: 200,
                msg: "更新个人信息成功"
            }
        } else {
            ctx.body = {
                code: 201,
                msg: "更新个人信息失败"
            }
        }
    }
    /**
     * 更新用户个人手机号码
     * @param {object} ctx 提供的实例
     */
    async updatePhone(ctx) {
        const result = await loginService.updatePhone(ctx)
        if (result) {
            ctx.body = {
                code: 200,
                msg: "更新用户手机成功"
            }
        } else {
            ctx.body = {
                code: 201,
                msg: "更新用户手机失败"
            }
        }
    }
}

module.exports = new UserController()