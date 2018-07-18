const { insert } = require("../mysql/index.js");
const { Delete } = require("../mysql/sql.js")
module.exports = (req, res, next) => {
    let { id } = req.query;
    insert(Delete, [id]).then((data) => {
        res.send({ "msg": "ok", code: 1 })
    })
}