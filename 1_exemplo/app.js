const sqlite3 = require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message)
});

//Create table
//sql = "CREATE TABLE users(id integer primary key, first_name, last_name,username, password, email)";
//db.run(sql);

//Drop Table
//db.run("DROP TABLE users")

//Insert data into table
//sql = "INSERT INTO users(first_name, last_name, username, password, email) VALUES (?,?,?,?,?)";
//db.run(sql, ["mike", "michel", "mike_user", "test", "mike@gmail.com"], (err) =>{
//   if (err) return console.error(err.message);

//})

//Select all
//sql = "select * from users";
//db.all(sql, [], (err, rows) => {
//    if (err) return console.error(err.message);
//    rows.forEach((row) => {
//        console.log(row)
//    });
//})

//Update data
