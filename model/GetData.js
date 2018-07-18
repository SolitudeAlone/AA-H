const { select, insert } = require("../mysql/index.js");
const { GETDATA_INSERT } = require("../mysql/sql.js")
const { GETDATA_SELECT } = require("../mysql/sql.js")
module.exports = (req, res, next) => {
    let { money, asyncValue, Remarks, date } = req.query;
    insert(GETDATA_INSERT, [money, asyncValue, Remarks, date]).then((aa) => {
        select(GETDATA_SELECT, []).then((datas) => {
            res.send({ "msg": "ok", code: 1, data: datas })
        })

    })

}