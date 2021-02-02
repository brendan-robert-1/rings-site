const express = require('express')
const app = express()
const port = 3080
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:'',
    user: '',
    password:'',
});
connection.changeUser({database : ''}, function(err) {
    if (err) throw err;
  });
app.get('/', (req, res)=>{
   
    let sql = '';
    connection.query(sql, (error, results, fields)=>{
        if(error){
            return console.error(error.message);
        }
        console.log(results);
        console.log('output: ' + JSON.stringify(results));
        res.send("Hello from docker!\n'Users in database\n" + JSON.stringify(results));
    });
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})