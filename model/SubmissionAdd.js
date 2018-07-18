const { select } = require("../mysql/index.js");
const { USERS_SELECT, GETDATA_SELECT } = require("../mysql/sql.js")
module.exports = (req, res, next) => {

    select(USERS_SELECT, []).then((data) => {
        select(GETDATA_SELECT, []).then((datas) => {
            res.send({ "msg": "ok", code: 1, data: data, datas: datas })
        })
    })

}