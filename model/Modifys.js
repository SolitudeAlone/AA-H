const { insert } = require("../mysql/index.js");
const { Modifys } = require("../mysql/sql.js")
module.exports = (req, res, next) => {
    let { oldlisid, newlistname } = req.query;
    insert(Modifys, [newlistname, oldlisid]).then((data) => {
        res.send({ "msg": "ok", code: 1 })
    })
}