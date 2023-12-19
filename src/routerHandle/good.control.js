const { default: axios } = require('axios')
const goodService = require('../service/good.service')
// 引入阿里的sdk
const AlipaySdk = require('alipay-sdk').default
// 引入解析的工具
const AlipayFormData = require('alipay-sdk/lib/form').default
// 配置一下公钥
const alipaySdk = new AlipaySdk({
    /* appid */
    appId: '9021000132658453',
    /* 签名算法 是在助手里面的 */
    signType: 'RSA2',
    /* 支付宝网关 是在网站里面的 */
    gateway: 'https://openapi-sandbox.dl.alipaydev.com/gateway.do',
    /* 支付宝公钥 是在网站里面的 */
    alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7eYjf/ul0fbthIFT1ky58DiNvrb2wso4gP2qKIvdLbrM6tuoQ413XKIZ3pGbbhpIaagEqBT4+M9XViYuDe6NLt0olZ9l3AYpfiEJqNZWOq7yg42aZrIK9eLj2WxgMo9gXVWwAkBG0nK/s4Aws/BxNRr499ZNxpAA+fTEgcOYlja23+os7ZVC/xgvZe0GoOP9+YV8l5PpWkObegfHYdyjMbT6AMfUlu/Efr4+aVeQQQB33vmiQCBlesI4peqABL/iUEvsJyTdkpujdJHOMpT2L3DyXgfWxwjTIuKty2Ct/B5rkOFOSbMsJKlIQdlJIpnDWWP1GZwkTTYXg0fbMn7qIQIDAQAB',
    /* 应用私钥 是在助手里面的 */
    privateKey: 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC64/ri95OL+LZcw1QRAHlsPf9Bs7rtkpGoV7MjTQ2Tb7f3sgbnSiSu3ybDxAz4szJEe5XQQA9vj7e5YzgXpJOhPCHFELDTqkO9MDG0azKepE637HLk36fCDJ19vQniGskOJoWuNl/jVqAF+biiQGGtvNVKjog3w4ho0QheHgTedArEdY9Wm331ZS3E3ViMoGSPH1JTeU7vzRFPBuMqai5qElYS8kRpO7spdw6UzwbEtyYfRwQKmLhBRVl+vQJyYQBZOhfFeGHk/SWKJKz7XF50L4b/GUpgRx/y90BmvJe55ohTPKXwo+YuGg5B+CetTCKZK9Smllq+kA0ltETG9RtbAgMBAAECggEBAKdMrGt/KxLS6xSxOlEZ9phCC32aUcyYN1HWaCNCt9Ny3+GY+XsUsS/lzULT/rSnXWlWpG7O2cKJifMn8a+ggROFy8koPtLMCWWTffs/NwoyldEpllRyLi+UsWs8zVsdlTvYmjSwsjfFdOzEdlawgYBQmTLr0t7wZ+1EqlPuVXd4KCQPPcypzEVtfSf/450QgruLvZsKEkALFal5df2xCOuqF6GzvhaxjAMwK6HJHxbyG0VBD/Nr/cZjKvR6/lHKSHZNvKkkodftodTeNFNXm6g67tEQDSqKWqPFaYxoHf4MJiLQUm6QC7WnZliICQgNEmCmHMdp9E3dS+yeekP5C9kCgYEA+9r+wsHJoz91U9aHaVZr/dfJwCr5CkXu8BzOnRjKVHS/PssZIWyUQbwYKWBRaCTNPO/8PVjuPUQUDpM6xdNgJIs89EdMERyGFEg2s+SzmZ7gpmBqjZXql3XgJtVC4mPPru0hJkqU5Y8WCjb93DCzbBuasAnKd7NFe5RO9DDlyicCgYEAvfdNw6z05hcKmh/HkaScvG9HvfKwvghUZvw+6t5jA/+nNzkjBtBE5bLEzcx/iSoETRISZ/d0FBNyfOXfBWnkJjk16wl3j83kMHWkgIUAj3VPeZusGLLaN6yLVhwb28C3xQnVHerYMJ4qD+dKWgIoUmG5mKAiwSlVBlasQkai6a0CgYB/KM3SBUfKLaMOZlVOIP07V/UcGlZNEowWHWVQOhEF3UAl8yNIFesw2UgVs/TGMTaSmtRvIPSAaFv8E+frs9JqAQcQiuLkDNPBb8h2wXTQjj/8oNeLjvK38CLxWGGBrkVQm5dOHv/Ye4r0M1mvD8O3RKSwVvEryI6/W10Vu455pwKBgQCXgGMBmq+ZzWiEMLIt4nWqBqnVwHbap7QAik33bLLVHpASh7v6lCFOe7tfUieokdzqRm5tgjmORVA6ce3i2Ge/YEMzFtLG2nKRf1FZujkPMITYvKGM9R755d8eJr7FDLbDKytPd9tBMvLiyhhPHodf5FZrddMh8D/CFV++X61P5QKBgCFPdtq8cEpwxsdYa36RWL75c9jJE6rxc25+Lj35elNXAKZT1Ne29Q0s0EsVLUFQ8nm/3nZ1McTdpgNdhIKaVkCBlbTSH7Gy2Av1syIlqd5UjtkHGzNOvj+T6RH4NSjTsjJR/gVxXBr1BOSG6frHOizeBpg4LiFrcorAXAHtRwyR'
})
class goodController {
    payment(ctx) {
        const formData = new AlipayFormData()
        // 这个是固定的
        formData.setMethod('get')
        let order = new Date().getTime()
        // 支付时候的信息
        console.log(order)
        formData.addField('bizContent', {
            outTradeNo: order + '', //订单号
            productCode: 'FAST_INSTANT_TRADE_PAY', // 固定的
            totalAmount: 199, // 价格
            subject: "粒粒脑袋" // 商品名称
        })
        /* 支付成功或者失败跳转的链接 */
        formData.addField('returnUrl', 'http://localhost:8080/#/page/index/index')
        /* 返回一个promise */
        const result = alipaySdk.exec(
            'alipay.trade.page.pay',
            {},
            { formData: formData },
        )
        /* 对接支付宝成功， 支付宝会返回数据给我们 */
        result.then(resp => {
            console.log('我来啦')
            /* 这个地方那个路径才生成成功，保存在resp里面 */
            ctx.body = {
                code: 200,
                url: resp
            }
        }).catch(err => {
            console.log(err);
        })
    }
    verifyPayResult(ctx) {
        try {
            const formData = new AlipayFormData()
            /* 调用setMethod并传入get,可以返回一个跳转支付宝页面的url */
            formData.setMethod("get")
            /* 支付时的信息 */
            formData.addField('bizContent', {
                trade_no: '2023121722001469300501459173',
            })
            const result = alipaySdk.exec(
                'alipay.trade.query',
                {},
                { formData: formData },
            )
            result.then(resp => {
                axios({
                    method: 'get',
                    url: resp
                }).then(res => {
                    let responseCode = res.data.alipay_trade_query_response
                    console.log(responseCode)
                    ctx.body = {
                        code: 200,
                        msg: '查询成功'
                    }
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    /**
     * 获取商品菜单
     * @param {object} ctx 提供的实例
     */
    async getList(ctx) {
        let result = await goodService.getMenuList(ctx)
        console.log(result)
        ctx.body = {
            code: 200,
            msg: '请求成功',
            data: result
        }
    }
}

module.exports = new goodController