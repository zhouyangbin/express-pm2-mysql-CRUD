//userData.js
/*
    数据增删改查模块封装
    req.query 解析GET请求中的参数 包含在路由中每个查询字符串参数属性的对象，如果没有则为{}
    req.params 包含映射到指定的路线“参数”属性的对象,如果有route/user/：name，那么“name”属性可作为req.params.name
    req.body通常用来解析POST请求中的数据
     +req.query.id 可以将id转为整数
 */
// 引入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var mysqlconfig = require('./mysqlConfig');
// 引入连接池配置
var poolextend = require('./poolextend');
// 引入SQL模块
var user = require('./userSql');
// 引入json模块
var json = require('./json');
// 使用连接池，提升性能
var pool = mysql.createPool(poolextend({}, mysqlconfig));
var userData = {
    login: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            console.log(param)
            connection.query(user.login, [param.name, param.password], function(err, result) {
                if (err) {
                    res.json({
                        code: '201',
                        msg: err
                    });
                    return;
                }
                if (!result.length) {
                    res.json({
                        code: '201',
                        msg: result
                    });
                    return;
                }
                res.json({
                    code: '200',
                    data: result[0],
                    msg: '登录成功'
                });
                // 释放连接 
                connection.release();
            });
        });
    },
    regist: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            console.log(param)
            connection.query(user.checkName, [param.name], function(err, result) {
                if (err) {
                    res.json({
                        code: '201',
                        msg: err
                    });
                    return;
                }
                if (result.length) {
                    res.json({
                        code: '201',
                        data: result,
                        msg: "已注册"
                    });
                    connection.release();
                    return;
                } else {
                    connection.query(user.regist, [param.name, param.password, param.email], function(err, result) {
                        if (err) {
                            res.json({
                                code: '201',
                                msg: err
                            });
                            return;
                        }
                        res.json({
                            code: '200',
                            data: result[0],
                            msg: '登录成功'
                        });
                        // 释放连接 
                        connection.release();
                    });
                }
            });
        });
    },
    delete: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            if (err) {
                throw err;
                return;
            }
            var id = req.query.id;
            const sql = `DELETE FROM users WHERE id IN (${id})`
            connection.query(sql, id, function(err, result) {
                if (err) {
                    res.json({
                        code: '201',
                        msg: err
                    });
                    return;
                } else {
                    if (result.affectedRows > 0) {
                        result = 'delete';
                        json(res, result);
                    } else {
                        res.json({
                            code: '201',
                            msg: result
                        });
                    }
                    // json(res, result);
                    connection.release();
                }
            });
        });
    },
    update: function(req, res, next) {
        var param = req.body;
        if (param.name == null || param.age == null || param.id == null) {
            json(res, undefined);
            return;
        }
        pool.getConnection(function(err, connection) {
            connection.query(user.update, [param.name, param.age, +param.id], function(err, result) {
                if (result.affectedRows > 0) {
                    result = 'update'
                } else {
                    result = undefined;
                }
                json(res, result);
                connection.release();
            });
        });
    },
    queryById: function(req, res, next) {
        let id = +req.query.id;
        pool.getConnection(function(err, connection) {
            connection.query(user.queryById, id, function(err, result) {
                if (err) {
                    res.json({
                        code: '500',
                        msg: err.sqlMessage
                    });
                    connection.release();
                    return;
                } else if (result != '') {
                    var _result = result;
                    res.json({
                        result: 'select',
                        code: '200',
                        data: _result[0]
                    });
                } else {
                    res.json({
                        code: '204',
                        msg: "错误"
                    });
                }
                connection.release();
            });
        });
    },
    queryAll: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query(user.queryAll, function(err, result) {
                if (result != '') {
                    var _result = result;
                    result = {
                        result: 'selectall',
                        data: _result
                    }
                } else {
                    result = undefined;
                }
                json(res, result);
                connection.release();
            });
        });
    }
};
module.exports = userData;