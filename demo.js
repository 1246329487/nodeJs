//express
var express = require('express');
var app = express();

var obj;
//sql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '065010',
    database: 'runoob'
});
connection.connect();
var sql = 'SELECT * FROM runoob_tbl';
connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
    obj = result;
});
connection.end();
// var  addSql = 'INSERT INTO runoob_tbl(runoob_id,runoob_title,runoob_author,submission_date) VALUES(0,?,?,?)';
// var  addSqlParams = ['菜鸟工具10', 'https://c.runoob.com',new Date()];
// connection.query(addSql,addSqlParams,function (err, result) {
//         if(err){
//          console.log('[INSERT ERROR] - ',err.message);
//          return;
//         }        
 
//        console.log('--------------------------INSERT----------------------------');
//        //console.log('INSERT ID:',result.insertId);        
//        console.log('INSERT ID:',result);        
//        console.log('-----------------------------------------------------------------\n\n');  
// });
// connection.end();  





//express
app.get('/test', function (req, res) {

    res.send({
        'success': true,
        'data': obj,
        'message': '查询成功'
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})