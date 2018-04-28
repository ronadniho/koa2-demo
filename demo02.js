/* 什么是async和await
你要想理解语法，可以先从两个单词的基本意思来进行了解.async是异步的简写，而await可以堪称async wait的简写。明白了两个单词，就很好理解了async是声明一个方法是异步的，await是等待异步方法完成。注意的是await必须在async方法中才可以使用因为await访问本身就会造成程序停止堵塞，所以必须在异步方法中才可以使用。 */
function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"),3000);
    });
}

async function test(){
    const v = await takeLongTime();
    console.log(v)
}

test();