const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
    prefix:'/jspang'//层级访问地址localhost:3000/jspang
});

router
    .get('/', (ctx, next) => {
        ctx.body = "hello"
    })
    .get('/todo',(ctx,next)=>{
        ctx.body = "todo page"
    })



app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('starting port 3000')
})