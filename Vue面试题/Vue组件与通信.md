# 组件的基础构造

## 注册与引入



### 引入建议

```
<!-- 如果是在 DOM 中书写该模板 -->
<button-counter></button-counter>
<button-counter><button-counter/>
```





## 独立性

每一个组件相当于一个实例，他们的属性与值与其他相同组件的值是隔离的。



## prop

### 声明方式

数组字符串，对象形式。定义数据的类型与默认值。

```vue
//tests.vue
<script setup>
const props = defineProps({
title: {
type:Array,
default:() => ["title"]
}})
</script>
```





# 自己有没有编写过自定义组件



你就可以说，当时自己写了一个xx组件。巴拉巴拉。

# 组件之间的通信方式