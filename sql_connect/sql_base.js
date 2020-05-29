var Connection = require('./Connection');//引用Mysql
var connection = Connection.link();
    connection.connect(function(err){
        if(err){
          console.log('[query] - :'+err);
          return;
        }
        console.log('[connection connect] succeed!');
     });
    var addSql = 'INSERT INTO users (name,age) VALUES(?,?)';
    var addSqlParams = ['无敌强',22];
    connection.query(addSql,addSqlParams, function(err, results, fields) {
        if (err) {
                console.log(err);
        }else{
        }
    })
    connection.end();//断开连接