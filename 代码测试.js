var x = 123
function test() {
  console.log(this.x);
}
// 创建一个函数返回的是某个对象x的属性值
// 创建一个对象，把x的值赋值为1，把m赋值为函数。


test()


this.__