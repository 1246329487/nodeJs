var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '065010',
    database: 'runoob'
});

connection.connect();


//查
/*
var  sql = 'SELECT * FROM runoob_tbl';
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();
*/

//增
/*
var  addSql = 'INSERT INTO runoob_tbl(runoob_id,runoob_title,runoob_author,submission_date) VALUES(0,?,?,?)';
var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com',new Date()];
connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end(); 
*/

//改

/*var modSql = 'UPDATE  runoob_tbl SET runoob_title = ?,runoob_author = ? WHERE runoob_id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 3];
connection.query(modSql, modSqlParams, function (err, result) {
    if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();*/

//删
/*
var delSql = 'DELETE FROM runoob_tbl where runoob_id=1';
connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();
*/

var  sql = 'SELECT * FROM runoob_tbl';
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();