function getSomething() {
    return 'someting';
}

async function testAsync() {//异步方法
    return 'Hello Async';
}

async function test() {//await必须在async中
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2)
}
test();

const result = testAsync();

console.log(result)//返回promise对象