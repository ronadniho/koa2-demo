const Koa = require('koa');
const app = new Koa();
const fs = require('fs');//原生路由的实现需要引入fs模块来读取文件。然后再根据路由的路径去读取，最后返回给页面，进行渲染。我们看一个小例子进行学习。

function render(page) {
    return new Promise((resolve, reject) => {
        let pageUrl = './page/' + page;
        fs.readFile(pageUrl, 'binary', (err, data) => {//binary是以2进制读取
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    })
}

async function route(url) {
    let page = '404.html';
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    let html = await render(page);
    console.log(html)
    return html;
}

app.use(async (ctx) => {
    let url = ctx.request.url;
    let html = await route(url);
    ctx.body = html;
})

app.listen(3000, () => {
    console.log('port 3000')
});