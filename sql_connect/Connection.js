var mysql = require('mysql');//引用Mysql
class Connection{
    constructor(){
        this.host= '122.51.31.223';//数据库地址
        this.user = "root";//数据库用户
        this.password = "hB123456_";//数据库密码
        this.database = "blog";//需要连接的数据库
    }
    link(){
        return mysql.createConnection({//配置连接
            host: this.host,
            user : this.user,
            password:this.password,
            database : this.database
        });
    }
}

module.exports = new Connection();
