// 实现js文件自动化加载
const fs = require('fs')
function registerRouter(app) {
    // 读取当前文件夹下所有的文件
    const fileList = fs.readdirSync(__dirname)
    for (let key of fileList) {
        if (key.endsWith('.router.js')) {
            // 导入文件
            const router = require(`./${key}`)
            app.use(router.routes())
            app.use(router.allowedMethods())
        }
    }
}
module.exports = registerRouter