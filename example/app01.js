const Koa = require('koa')

const app = new Koa();

// 发送http Koa，接收http
//中间件 就是一个函数  定义一个中间件，就是定义一个函数
// 一个函数要想真正变成中间键，需要注册到应用程序对象上面
function test () {
  console.log('hello world')
}

//中间件
app.use(test)
//客户端发送一个http，调用test函数
//通过url地址访问 127.0.0.1 实现访问应用程序

app.listen(3000)