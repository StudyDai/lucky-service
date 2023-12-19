const { TOKEN_IS_NO_EXIST, TOKEN_IS_LOSS } = require("../config/error")
const jwt = require('jsonwebtoken')
const { PUBLIC_KEY } = require("../config/screct")
const { login } = require("../routerHandle/user.control")
const verifyToken = async (ctx, next) => {
    const authorization = ctx.request.headers.authorization
    if (!authorization) {
        return ctx.app.emit("error", TOKEN_IS_NO_EXIST, ctx)
    }
    // 如果存在,判断有效期
    token = authorization.replace('Bearer ', '')
    try {
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
        ctx.user = result
        await next()
    } catch (err) {
        ctx.app.emit("error", TOKEN_IS_LOSS, ctx)
    }
}

module.exports = {
    verifyToken
}