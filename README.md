

### 安装koa

```bash
npm i koa
```

### 特性

Node 对import支持不好  
[TC39](https://github.com/tc39)

### KOA 中间件

```javascript
const Koa = require('koa')
const app = new Koa()
/**
 * 通常我们不会直接定义一个中间件（函数），然后app.use注册
 * 而是，直接在app.use里面写上匿名的箭头函数
 * 
 */

/**
 * 可以注册多个中间件,
 * 但是，Koa只能自动执行第一个中间件,其他的中间件需要自己去注册
 * 解决方法：Koa在执行中间件的时候，默认传递两个参数 (ctx,next)
 * ctx:上下文(context)
 * next:下一个中间件函数
 **/

app.use((ctx, next) => {
    console.log('hellow ')
    next()
})

app.use(() => {
    console.log('world')
})
/**
 * 打印结果：
 * hello，
 * world
 */
app.listen(3000)

/**
 * 所有Koa的内容都是围绕：监听(listen),中间件(箭头函数),注册(use)=>上下文，next展开的
 *
 */
```

### 洋葱模型

```javascript
//洋葱模型
const Koa = require('koa')

const app = new Koa()

/**
 * 执行顺序：
 * 1->3->4->2
 * 
 * 洋葱模型图
 */

app.use((context, next) => {
    console.log(1)
    next()
    console.log(2)
})

app.use((ctx, next) => {
    console.log(3)
    next()
    console.log(4)
})

app.listen(3000)
```

### 异步编程的重要性

```javascript
/**
 * 异步模型
 * 规则:强制加上async 和 await  
 * async 和 await 是异步编程的终极方案
 */

const Koa = require('koa')
const app = new Koa()
app.use(async (context, next) => {
    console.log(1)
    await next()
    console.log(2)
})

app.use(async (context, next) => {
    console.log(3)
    await next()
    console.log(4)
})

app.listen(3000)

/**
 * 强制Promise
 * 规则:强制加上async 和 await  
 * async 和 await 是异步编程的终极方案
 * 1.next()返回的是一个promise
 * 2.中间件里面是可以return，但是建议返回值用context
 */

const Koa = require('koa')
const app = new Koa()
app.use((context, next) => {
    console.log(1)
    const promise = next()
    console.log(promise); //结果 Promise{'node koa'}
    console.log(2)
})

app.use((context, next) => {
    console.log(3)
    next()
    console.log(4)
    /**
     * 此处可以返回任何东西，包括 return new Promise()
     */
    return 'node koa'
})

app.listen(3000)
```

### 深入理解async和await

``` javascript
/**
 * 深入理解async和await
 * 用awai代替promise.then的写法
 * await:求值关键字
 * 1.对表达式求值，不只是对promise求值 e.g await 100*100;
 * 2.会阻塞当前的线程
 * 异步的场景有哪些
 * 1.对资源处理，比如读写文件，操作数据库
 * 2.发送http请求
 * async
 * 1.返回的都是promise
 */

const Koa = require('koa')
const app = new Koa()
app.use(async (context, next) => {
    console.log(1)
    const a = await next()
    console.log(2)
})

app.use((context, next) => {
    console.log(3)
    next()
    console.log(4)
    /**
     * 此处可以返回任何东西，包括 return new Promise()
     */
    return 'node koa'
})

app.listen(3000)

/**
 * 洋葱模型的重要性
 * async和await 保证了洋葱模型的顺序调用
 */

const Koa = require('koa')
const axios = require('axios')
const app = new Koa()
app.use(async (ctx, next) => {
    const start = Date.now()
    const res = await axios.get('http://www.baidu.com')
    console.log(res)
    const end = Date.now()
    console.log(start - end) //0
})

app.listen(3000)

/**
 * 中间件之间的传值，不建议用return方式，建议中contenxt上下文方式 
 */
const Koa = require('koa')
const app = new Koa()
app.use(async (context, next) => {
    await next()
    const res = context.r; //一定要在next后面写
    console.log(res);

})

app.use(async (context, next) => {
    context.r = '1'
    await next()
})

app.listen(3000)
```

