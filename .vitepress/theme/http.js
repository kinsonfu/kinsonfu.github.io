// // http://nodejs.cn/learn/the-nodejs-http-module
// import http from 'http'
 
// // 定义路由函数
// function handleRequest(request, response) {
//     console.log('handleRequest');
//     if (request.method === 'GET') { // 只处理GET请求
//         const urlParts = request.url.split('/').filter((part) => part !== ''); // 获取URL参数
        
//         switch (urlParts[0]) {
//             case 'api':
//                 // 根据不同的API进行相应操作
                
//                 break;
            
//             default:
//                 // 默认情况下返回404错误页面或其他自定义信息
//                 response.writeHead(404);
//                 response.end();
//                 return;
//         }
        
//         // 设置响应头
//         response.setHeader('Content-Type', 'application/json');
//         response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        
//         // 发送JSON格式的响应数据
//         response.statusCode = 200;
//         response.end(JSON.stringify({ message: "Hello World!" }));
//     } else {
//         // 非GET请求则返回405 Method Not Allowed错误
//         response.writeHead(405);
//         response.end();
//     }
// }
 
// // 创建HTTP服务器
// const server = http.createServer(handleRequest);
// server.listen(3000, () => console.log("Server is running on port 3000"));
