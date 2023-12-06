# 1.1 声明式和命令式

命令式，需要自己写代码的逻辑。

声明式，减少了代码量。Vue.js 帮我们封装了过程。因此，我们能够猜到 Vue.js 的内部实现一定是命令式的，而暴露给用户的却更加声明式。



# 1.3 虚拟DOM 的性能到底如何

前文说到，声明式代码的更新性能消耗 = 找出差异的性能消耗 + 直接修改的性能消耗，因此，如果我们能够最小化找出差异的性能消耗，就可以让声明式代码的性能无限接近命令式代码的性能。而所谓的虚拟 DOM，就是为了最小化找出差异这一步的性能消耗而出现的。

## 虚拟DOM解决了什么问题



## 虚拟DOM性能

接下来，我们讨论虚拟 DOM 在创建页面时的性能。虚拟 DOM 创建页面的过程分为两步：第一步是创建 JavaScript 对象，这个对象可以理解为真实 DOM 的描述；第二步是递归地遍历虚拟 DOM 树并创建真实 DOM。我们同样可以用一个公式来表达：创建 JavaScript 对象的计算量 + 创建真实 DOM 的计算量。

```

```

再来看虚拟 DOM 是如何更新页面的。

<img src="VUe.js%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0.assets/image-20231117171357740-17002124386481.png" alt="image-20231117171357740" style="zoom:50%;" />







# 3.1 声明式地描述 UI

它关注的是"做什么"而不是"怎么做"。在声明式编程中，你只需要描述你想要的结果，而不需要指定具体的步骤来达到这个结果。

Vue.js 3 是一个声明式的 UI 框架，意思是说用户在使用 Vue.js 3 开发页面时是声明式地描述 UI 的。

## 





# 3.2 渲染器

渲染器的作用就是把虚拟 DOM 渲染为真实 DOM。







```js
 const vnode = {
   tag: 'div',
   props: {
     onClick: () => alert('hello')
   },
   children: 'click me'
 }
 
 function renderer(vnode, container) {
  // 使用 vnode.tag 作为标签名称创建 DOM 元素
  const el = document.createElement(vnode.tag)
  // 遍历 vnode.props，将属性、事件添加到 DOM 元素
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      // 如果 key 以 on 开头，说明它是事件
      el.addEventListener(
        key.substr(2).toLowerCase(), // 事件名称 onClick ---> click
        vnode.props[key] // 事件处理函数
      )
    }
  }

  // 处理 children
  if (typeof vnode.children === 'string') {
    // 如果 children 是字符串，说明它是元素的文本子节点
    el.appendChild(document.createTextNode(vnode.children))
  } else if (Array.isArray(vnode.children)) {
    // 递归地调用 renderer 函数渲染子节点，使用当前元素 el 作为挂载点
    vnode.children.forEach(child => renderer(child, el))
  }

  // 将元素添加到挂载点下
  container.appendChild(el)
}
renderer(vnode, document.body) // body 作为挂载点
```





# 3.3 组件

# 3.4 模板文件  编译器

编译器的作用其实就是将**模板**编译为渲染函数。编译器会把模板内容编译成渲染函数并添加到 <script> 标签块的组件对象上

模板就是temple

```VUE
01 <template>
02   <div @click="handler">
03     click me
04   </div>
05 </template>
06
07 <script>
08 export default {
09   data() {/* ... */},
10   methods: {
11     handler: () => {/* ... */}
12   }
13 }
14 </script>
```

### 渲染过程

它要渲染的内容最终都是通过渲染函数产生的，然后渲染器再把渲染函数返回的虚拟 DOM 渲染为真实 DOM，这就是模板的工作原理，也是 Vue.js 渲染页面的流程。





# 3.5 如何学习Vue的原理

组件的实现依赖于渲染器，模板的编译依赖于编译器







# 3.6 总结

然后我们讲解了最基本的渲染器的实现。渲染器的作用是，把虚拟 DOM 对象渲染为真实 DOM 元素。它的工作原理是，递归地遍历虚拟 DOM 对象，并调用原生DOM API 来完成真实 DOM 的创建。

渲染器的精髓在于后续的更新，它会通过Diff 算法找出变更点，并且只会更新需要更新的内容。后面我们会专门讲解渲染器的相关知识。

接着，我们讨论了组件的本质。组件其实就是一组虚拟 DOM 元素的封装，它可以是一个返回虚拟 DOM 的函数，也可以是一个对象，但这个对象下必须要有一个函数用来产出组件要渲染的虚拟 DOM。

渲染器在渲染组件时，会先获取组件要渲染的内容，即执行组件的渲染函数并得到其返回值，我们称之为 subtree，最后再递归地调用渲染器将 subtree 渲染出来即可。Vue.js 的模板会被一个叫作编译器的程序编译为渲染函数，后面我们会着重讲解编译器相关知识。



最后，编译器、渲染器都是 Vue.js 的核心组成部分，它们共同构成一个有机的整体，不同模块之间互相配合，进一步提升框架性能。
