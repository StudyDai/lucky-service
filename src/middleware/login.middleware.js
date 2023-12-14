const verifyLogin = async (ctx, next) => {
    const { phone } = ctx.request.body
    let reg = /^1[3|5|7|9]\d{9}$/
    if (!phone) {
        return ctx.app.emit("error", "没有传递手机号给我", ctx)
    }
    if (!reg.test(phone)) {
        return ctx.app.emit("error", "手机号的格式不正确", ctx)
    }
    ctx.body = {
        code: 200,
        msg: "验证通过"
    }
    await next()
}

module.exports = {
    verifyLogin
}