var express = require("express");
//加载body-parser,用来处理post提交过来的数据
var bodyParser = require('body-parser');
//创建application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
//加载cookie模块
var Cookies = require('cookie-parser');
var path = require('path'); /* 重要：目录设置时，可使用其方法引用根目录， 不可少 */
var userData = require('../modules/userData');
var json = require('../modules/json');
let router = express.Router();
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'SQL for MySQL'
    });
});
router.get('/login', function(req, res, next) {
    userData.login(req, res, next);
});
router.post('/adduserData', function(req, res, next) {
    var param = req.query || req.params;
    console.log(param)
    userData.add(req, res, next);
});
router.get('/queryAll', function(req, res, next) {
    userData.queryAll(req, res, next);
});

router.get('/query', function(req, res, next) {
    userData.queryById(req, res, next);
});
router.get('/deleteuserData', function(req, res, next) {
    userData.delete(req, res, next);
});
router.get('/update', function(req, res, next) {
    res.render('update');
});
router.post('/updateuserData', function(req, res, next) {
    userData.update(req, res, next);
});

module.exports = router