 const mysql = require('mysql');

 let getConnection = () => {
     let connection = mysql.createConnection({
         host: 'localhost',
         user: 'root',
         password: 'root',
         database: 'aasystem'
     });
     return connection;
 }
 let select = (sql, query) => {
     let connection = getConnection();
     return new Promise((reslove, reject) => {
         connection.query(sql, query, (err, info) => {
             if (!err) {
                 reslove(info);
             }
             connection.end();
         });
     });
 }
 let insert = (sql, query) => {
     let connection = getConnection();
     return new Promise((reslove, reject) => {
         connection.query(sql, query, (err) => {
             if (!err) {
                 reslove({ msg: 'ok' });
             }
             connection.end();
         })
     })

 }
 module.exports = {
     select,
     insert
 };