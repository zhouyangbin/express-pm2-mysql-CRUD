var express = require("express");
//加载body-parser,用来处理post提交过来的数据
var bodyParser = require('body-parser');
//加载cookie模块
var Cookies = require('cookie-parser');
var path = require('path'); /* 重要：目录设置时，可使用其方法引用根目录， 不可少 */
var app = express();
var router = require("./router")
    //创建application/json解析
var jsonParser = bodyParser.json();
//创建application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
//app.use(bodyParser.json({type: 'text/plain'}));
app.use(bodyParser.json({
    type: 'application/*+json'
}))
app.use(express.static(path.join(__dirname, '/app/dist'))); //定义首页路径
app.use('/static', express.static(__dirname + '/app/dist')); //设置静态文件路径
app.use(router);
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('error', {
        message: "请求错误",
        error: {}
    });
    next(err);
});
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: "请求错误",
        error: {}
    });
});
// app.use(nuxt.render);//自己定义的路由写它上边
var port = 8085;
app.listen(port, function() {
    console.log('Example app listening on port ' + port + ' !')
})