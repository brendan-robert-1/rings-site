const express = require('express')
const app = express()
const port = 3080
let mysql = require('mysql');
var config = require('./config/config.js')


app.get('/', (req, res)=>{
   let connection = mysql.createConnection(config);
    connection.changeUser({database : ''}, function(err) {
        if (err) throw err;
    });
    let sql = 'select name from user_rs';
    connection.query(sql, (error, results, fields)=>{
        if(error){
            return console.error(error.message);
        }
        var output = JSON.stringify(results);
        console.log(results);
        console.log('output: ' + output);
        res.send("Hello from docker!\n'Users in database: " + output);
    });
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
