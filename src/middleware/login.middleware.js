const { PHONE_IS_NONE, PHONE_IS_NO_VERIFY } = require("../config/error")

const verifyLogin = async (ctx, next) => {
    const { phone } = ctx.request.body
    let reg = /^1[3|5|7|8|9]\d{9}$/
    if (!phone) {
        return ctx.app.emit("error", PHONE_IS_NONE, ctx)
    }
    if (!reg.test(phone)) {
        return ctx.app.emit("error", PHONE_IS_NO_VERIFY, ctx)
    }
    await next()
}

module.exports = {
    verifyLogin
}