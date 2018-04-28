const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = ctx.query;
})
app.use(router.routes())
    .use(router.allowedMethods())//router.allowedMethods()只允许get请求

app.listen(3000, () => {
    console.log('port 3000 starting')
})