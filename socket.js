const WebSocket = require('ws'); // 引入模块
const ws = new WebSocket.Server({ port: 4000 }, () => { // 监听接口
    console.log("socket start" + 4000)
})
let clients = [];
ws.on('connection', (client) => {
    //console.log("client:",client)
    clients.push(client)
    client.send("欢迎光临");
    client.on('message', (msg) => {
        console.log("来自服务器的数据", msg);
        client.send(msg); // 通过send方法来给前端发送消息
        //sendall();
    })
    client.on('close', (msg) => {
        console.log("关闭服务器连接")
    })
})