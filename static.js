//第13节：koa-static静态资源中间件
const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();
const staticPath = './static';
app.use(static(path.join(__dirname, staticPath)));

app.use(async (ctx) => {
    ctx.body = 'hello';
})

app.listen(3000, () => {
    console.log('port 3000 starting');
})