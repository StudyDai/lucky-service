const db = require('../db/index')
class goodService {
    async getMenuList(ctx) {
        try {
            let statement = `SELECT 
            gtt.good_type,
            (JSON_ARRAYAGG(JSON_OBJECT(
            'goodId', g.good_id, 'good_name', g.good_name,'good_image', g.good_image, 'old_price', g.old_price, 'current_price', g.current_price, 'good_details',g.good_details, 'good_spec', g.good_spec
            )))
            goodLists
            FROM good_to_type gtt 
            LEFT JOIN goods g 
            ON gtt.userId = g.good_id
            GROUP BY gtt.good_type`
            const [result] = await db.execute(statement)
            return result
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new goodService()