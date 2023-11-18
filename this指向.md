# 定义

`This`是一个关键字。在英语世界中 This表达的语义为，指向一个事物。比如我们会说，this书，this答案。而在JavaScript中，所表达的意思相同。只不过指向的事物变成了**对象**。在浏览器控制台上输入this，可以清晰直观地看见this指向的对象。这个对象是windows对象。

而在函数调用时，`this` 关键字是函数运行时自动生成的一个内部对象，只在内部生效，绝大部分情况下指向**调用**它的对象。我们都知道，在全局作用域中定义的变量和函数会自动赋值给顶层对象window。假设我在控制台创建了一个变量a，和一个函数。函数的内部使用this关键字并指向a。这实际上是调用了window对象上的方法，所以他的指向就是window。

# 绑定规则

根据不同的使用场合，`this`的指向也有所不同。主要分为下面几种情况：

## 默认绑定

默认绑定就是刚才所说的情况。

## 隐式绑定

第二种情况称之为隐式绑定。

当函数是某个对象中的方法这时`this`的指向为它的**上级对象**。

```JS
function test() {
  console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;

obj.m(); // 1
```



### 2. 构造函数

通过构建函数`new`关键字生成一个实例对象，此时`this`指向这个实例对象

```JS
function MyObject(x) {
  this.x = x;
}

var obj = new MyObject(1);
console.log(obj.x); // 1
```

在JavaScript中，`new`关键字会创建一个新的对象，并将这个新对象绑定为函数调用的`this`值。如果函数返回一个对象，那么这个对象会取代`new`创建的新对象。这是因为new本身的返回值是如果没有新对象就返回自身创建的对象，如果构造函数本身返回对象就返回自身的对象。

特殊情况。当构造函数的返回值是一个对象时。this指向的就是那个对象。



## 显示绑定 

我们可以使用`apply()、call()、bind()`方法，强制改变this的指向。

call、apply、bind相同点：都是**改变**this的指向，传入的第一个参数都是绑定this的指向，在非严格模式中，如果第一个参数是nul或者undefined，会把全局对象（浏览器是window）作为this的值，要注意的是，在严格模式中，null 就是 null，undefined 就是 undefined

 ● call和apply唯一的区别是：call传入的是参数**列表**，apply传入的是**数组**，也可以是类数组 。

● bind和call、apply的区别： bind返回的是一个改变了this指向的函数，便于**稍后调用**，不像call和apply会**立即调用**；bind和call很像，传入的也是参数列表，但是可以**多次传入**，不需要像call，**一次传入**。



### apply

```JS
let obj = {
  name: 'John',
  greet: function(greeting) {
    console.log(greeting + ', ' + this.name);
  }
};

obj.greet.apply(obj, ['Hello']);


let obj = {
  name: 'John',
  greet: function(greeting) {
    console.log(greeting + ', ' + this.name);
  }
};

obj.greet.call(obj, [1,2,3,4,5]);
1,2,3,4,5, John

apply的第二个参数必须是一个数组列表。否则会报错。当你的函数只接受一个参数，但是如果你写了多个参数也只会把第一个参数的值传入函数，后面的值不会执行也不会报错。
当我把字符串传入输出结果正常，那我进一步猜想是不是其他数字类型也是如此呢？传入数组会把整个数组当作参数传递。



```







### 连续多个 bind，最后this指向是什么？

在 JavaScript 中，连续多次调用 bind 方法，最终函数的 this 上下文是由**第一次**调用 bind 方法的参数决定的

```
const obj1 = { name: 'obj1' }; 
const obj2 = { name: 'obj2' }; 
const obj3 = { name: 'obj3' };  
function getName() {   console.log(this.name); }  
const fn1 = getName.bind(obj1).bind(obj2).bind(obj3); fn1(); // 输出 "obj1"
```



## 箭头函数

创建箭头函数时，this指向 是继承自外部作用域。且绑定就无法更改。当外部作用域是window就绑定window。







# 优先级

new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级



# 

# 

