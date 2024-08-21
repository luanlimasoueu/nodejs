const sqlite3 = require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message)
});

sql = "CREATE TABLE users(id integer primary key, first_name, last_name,username, password, email)";
db.run(sql);