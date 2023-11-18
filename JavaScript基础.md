# symbol这个新增的基础数据类型有什么用

Symbol 是在 ES6 中新增的基础数据类型，它的主要作用是创建一个唯一的标识符，用于对象属性名的**命名**、**常量的定义**等场景。



## 创建私有属性

比如在后台管理系统中，我们可能需要存储一些配置信息，例如服务器的端口号、数据库的连接字符串等。这些信息通常是敏感的，不应该被外部直接访问。我们可以使用 Symbol 来创建一个私有属性来存储这些敏感信息。

```javascript
const config = {
  serverPort: 8080,
  [Symbol('dbConnectionString')]: 'mongodb://localhost:27017/mydb'
};

console.log(config.serverPort); // 8080
console.log(config[Symbol('dbConnectionString')]); // undefined
```

Symbol 还有一个重要的特点是，它不会出现在 for...in、for...of、Object.keys()、Object.getOwnPropertyNames() 等遍历对象属性的方法中，因此可以用来定义一些不希望被遍历到的属性，例如一些内部实现细节或隐藏属性。