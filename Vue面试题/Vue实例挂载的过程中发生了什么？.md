# Vue实例挂载的过程中发生了什么？



这个问题就跟，回车输入框到跳转页面发送了什么一样。是一个非常深入的问题。我觉得面试官不会问一个

应届生，但是你可以跟他讲，你看过源码，用什么看的。学到了什么。都是可以的



* `new Vue`的时候调用会调用`_init`方法
    * 定义 `$set`、`$get` 、`$delete`、`$watch` 等方法
    * 定义 `$on`、`$off`、`$emit`、`$off`等事件
    * 定义 `_update`、`$forceUpdate`、`$destroy`生命周期
* 调用`$mount`进行页面的挂载
* 挂载的时候主要是通过`mountComponent`方法
* 定义`updateComponent`更新函数
* 执行`render`生成虚拟`DOM`
* `_update`将虚拟`DOM`生成真实`DOM`结构，并且渲染到页面中





初始化，调用mount方法进行页面的挂载，zhi'xing