

### 安装koa

```bash
npm i koa
```

### 特性

//ES 对import支持不好
https://github.com/tc39

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
```

