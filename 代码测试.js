var x = 123
function test() {
  var x = 666
  console.log(this.x);
}
// 创建一个函数返回的是某个对象x的属性值
// 创建一个对象，把x的值赋值为1，把m赋值为函数。


var obj = {};
obj.x = 1;
obj.m = test;

obj.m(); // 1

test()
