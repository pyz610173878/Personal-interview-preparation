# Event Loop事件循环、微任务、宏任务

事件循环指的是js代码所在运行环境（浏览器、nodejs）编译器的一种解析执行规则。事件循环不属于js代码本身的范畴，而是属于js编译器的范畴，在js中讨论事件循环是没有意义的。换句话说，js代码可以理解为是一个人在公司中具体做的事情， 而 事件循环 相当于是公司的一种规章制度。 两者不是一个层面的概念。



# 2. 微任务、宏任务概念介绍

1. 微任务与宏任务就属于js代码的范畴
2. js代码主要分为两大类： 同步代码、异步代码
3. 异步代码又分为：微任务与宏任务

<img src="Event%20Loop%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E3%80%81%E5%BE%AE%E4%BB%BB%E5%8A%A1%E3%80%81%E5%AE%8F%E4%BB%BB%E5%8A%A1.assets/image-20231113132446584-16998530882761.png" alt="image-20231113132446584" style="zoom:50%;" />





await**右边**的表达式还是会**立即执行**,表达式之后的代码才是微任务, await微任务可以转换成等价的promise微任务分析

# 3. 事件循环Event Loop执行机制

1.进入到script标签,就进入到了第一次事件循环.

2.遇到同步代码，立即执行

3.遇到宏任务,放入到宏任务队列里.

4.遇到微任务,放入到微任务队列里.   微任务需要排队。

5.执行完所有同步代码

6.执行微任务代码

7.微任务代码执行完毕，本次队列清空

寻找下一个宏任务，重复步骤1

* 以此反复直到清空所以宏任务，这种不断重复的执行机制，就叫做事件循环





宏任务中的同步代码会在当前事件循环的**所有微任务**执行完毕后执行。这是因为在同一个事件循环中，微任务的执行优先级高于宏任务。

```java
console.log('start');

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

console.log('end');


start
end
promise
    timeout
```









## 异步笔试题

```js
// 今日头条面试题

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('settimeout')
})
async1()
new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')


script start
async1 start
async2
promise1
script end
async1 end
promise2
settimeout


1. 先找出同步任务
2. 找出所有微任务
3. 
```

