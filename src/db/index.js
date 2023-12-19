const mysql = require('mysql2')

// 创建连接池
const connectPool = mysql.createPool({
    host: '81.71.147.9',
    port: 3306,
    user: 'root',
    password: 'Sun..123456',
    database: 'my_lucky',
    connectionLimit: 5
})
//是否链接成功
connectPool.getConnection((err, connection) => {
    if (err) return console.log(err, '连接失败')
    // 如果连接成功,name我们就尝试和数据库进行连接
    connection.connect(err => {
        if (err) {
            console.log('与数据库交互失败,原因是', err);
        } else {
            console.log('与数据库交互成功,可以操作');
        }
    })
})
// 获取链接池里面的对象
const connection = connectPool.promise()
module.exports = connection