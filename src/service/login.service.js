const db = require('../db/index')

class loginService {
    async createToken(phone) {
        // 通过phone去查找数据库内容
        // 拼接sql语句
        let starement = 'SELECT username,gender,birthday,address,phone FROM user where phone=?'
        const [values] = await db.execute(starement, [phone])
        // 返回给用户的数据
        let userInfo = null
        let time = new Date().getTime()
        console.log(values.length)
        if (!values.length) {
            userInfo = {
                username: `小鹿${time}`,
                phone,
                gender: null,
                user_avatar: "http://81.71.147.9:8080/coffee/default_img.jpg",
                birthday: null,
                address: null
            }
            let keys = Object.keys(userInfo)
            let values = Object.values(userInfo)
            let keystr = ''
            keys.forEach((key, index) => keystr += `${key},`)
            keystr = keystr.substring(0, keystr.length - 1)
            starement = `INSERT INTO user (${keystr}) VALUES(?,?,?,?,?,?)`
            const [result] = await db.execute(starement, values)
            if (result.affectedRows == 1) {
                console.log("插入成功")
            } else {
                console.log("插入失败");
            }
        } else {
            userInfo = values[0]
        }
        return userInfo
    }
    async updateData(ctx) {
        let info = ctx.request.body
        let userInfo = ctx.user
        let keys = Object.keys(info)
        let values = Object.values(info)
        let keystr = ''
        keys.forEach((key, index) => keystr += `${key}=?,`)
        keystr = keystr.substring(0, keystr.length - 1)
        // 拼接我们要传递的内容
        let queryValues = [...values, userInfo.phone]
        // 拼接sql语句
        try {
            const statement = `UPDATE user SET ${keystr} WHERE phone = ?`
            const [result] = await db.execute(statement, queryValues)
            return result.affectedRows
        } catch (err) {
            console.log(err);
        }
    }
    async updatephone(ctx) {
        let info = ctx.request.body
        let userInfo = ctx.user
        try {
            const statement = 'UPDATE user SET phone=? where phone=?'
            const [result] = await db.execute(statement, [info.phone, userInfo.phone])
            return result.affectedRows
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new loginService