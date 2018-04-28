//第12节：Koa2的模板初识（ejs）
const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();


app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

app.use(async (ctx) => {
    let title = 'hello';
    await ctx.render('index',{title})
})
app.listen(3000, () => {
    console.log('port 3000 starting')
})