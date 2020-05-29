//json.js
//封装接送模块
var json = function(res, result) {
    if (typeof result === 'undefined') {
        res.json({
            code: '201',
            msg: '错误'
        });
    } else if (result === 'add') {
        res.json({
            code: '200',
            msg: '添加成功'
        });
    } else if (result === 'delete') {
        res.json({
            code: '200',
            msg: '删除成功'
        });
    } else if (result === 'update') {
        res.json({
            code: '200',
            msg: '更改成功'
        });
    } else if (result.result != 'undefined' && result.result === 'select') {
        res.json({
            code: '200',
            msg: '查找成功',
            data: result.data[0]
        });
    } else if (result.result != 'undefined' && result.result === 'selectall') {
        res.json({
            code: '200',
            msg: '全部查找成功',
            data: result.data
        });
    } else {
        res.json(result);
    }
};
module.exports = json;