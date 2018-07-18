const { select, insert } = require("../mysql/index.js");
const { USERS_SELECT_USERID, USERS_SELECT_USERNAME, USERS_INSERT } = require("../mysql/sql.js")

async function submiss(id, name, price, res) {
    let userid_info = await select(USERS_SELECT_USERID, [id]);
    if (userid_info.length === 0) {
        let username_info = await select(USERS_SELECT_USERNAME, [name]);
        if (username_info.length === 0) {
            let reg = /^[1-9]\d{0,4}$/;
            let ref = /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,6}$/;
            if (reg.test(id) && ref.test(name)) {
                if (id !== "" && name !== "") {
                    let insert_info = await insert(USERS_INSERT, [id, name, price]);
                    res.send({ "msg": "ok", code: 1 })
                    return
                }
            } else {
                res.send({ "msg": "失败", code: 0 })
                return
            }

        }
    } else {
        res.send({ "msg": "失败", code: 0 })
        return
    }
    res.send({ "msg": "ok" })
}
module.exports = (req, res, next) => {
    let { id, name, price } = req.query;
    if (id === "" || name === "" || price === "") {
        res.send({ msg: "id或name或price有误", code: 0 });
        return
    }
    submiss(id, name, price, res)
}