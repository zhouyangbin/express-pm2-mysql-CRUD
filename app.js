// var express = require('express');    /* 重要： 不可少 */ 
// var path = require('path');  /* 重要：目录设置时，可使用其方法引用根目录， 不可少 */
// // var favicon = require('serve-favicon');
// // var logger = require('morgan');
// // var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');


// /* 声明要访问的路由(该路由指定路由文件--html/ejs/...)， 该路由可自定义 */
// // var index = require('./routes/index');
// // var users = require('./routes/users');

// var app = express();  /* 重要： 不可少 */

// // view engine setup
// app.set('views', path.join(__dirname, 'views')); //定义模板（views ）搜索路径，在根目录的 views 文件夹下,可自定义
// // app.set('view engine', 'ejs');  //设置模板引擎 为： EJS, 可自定义

// // app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(cookieParser());
// app.use(express.static(path.join(__dirname, './.nuxt/dist/server'),{index:"index.spa.html"}));  //指定静态文件名称是 public, 文件夹名可自定义
// // app.use(myexpress.static(__dirname+"/public",{index:"login.html"}));

// /* 访问已定义的路由文件 */
// // app.use('/', index);
// // app.use('/users', users);

// // 404 处理: catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // 错误处理：error handler
// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.status(err.status || 500);
//   res.render('error');
// });
// var port=8085;
// app.listen(port, function () { 
//   console.log('Example app listening on port ' + port + ' !')
// })


var express = require("express");
let app = express();

let { Nuxt, Builder } = require('nuxt');

let config = require('./nuxt.config.js');//nuxt的配置文件
let nuxt = new Nuxt(config);

app.get("/a",function(req,res){  //自己的路由
    res.send({a:1});
});


if (config.dev) {// 是否启用开发模式
    let builder = new Builder(nuxt);
    builder.build();
}

app.use(nuxt.render);//自己定义的路由写它上边
var port=8085;
app.listen(port, function () { 
  console.log('Example app listening on port ' + port + ' !')
})