const USERS_SELECT_USERID = "USERS_SELECT_USERID";
const USERS_SELECT_USERNAME = "USERS_SELECT_USERNAME";
const USERS_INSERT = "USERS_INSERT";
const USERS_SELECT = "USERS_SELECT";
const Delete = "Delete";
const Modifys = "Modifys";
const GETDATA_INSERT = "GETDATA_INSERT";
const GETDATA_SELECT = "GETDATA_SELECT";
module.exports = {
    [USERS_SELECT_USERID]: "select id from data where id=?",
    [USERS_SELECT_USERNAME]: "select name from data where name=?",
    [USERS_INSERT]: "insert into data (id,name,price) values (?,?,?)",
    [USERS_SELECT]: "select * from data",
    [Delete]: "delete from data WHERE id = ?",
    [Modifys]: "update data set name=? where id=?",
    [GETDATA_INSERT]: "insert into datas (money, asyncValue, Remarks, date ) values (?,?,?,?)",
    [GETDATA_SELECT]: "select * from datas"
}