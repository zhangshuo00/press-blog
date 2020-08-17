# 全方位解读this

上篇文章提到的执行上下文，创建阶段、执行阶段。在创建阶段，会生成变量对象，建立作用域链，确定 `this` 指向。

**this 的指向，是在函数被调用的时候确定的**。也就是执行上下文被创建时确定的。

**在函数执行过程中， this一旦被确定，就不可更改** 。



## 全局对象中的 this

全局对象中的 this 指向它本身。

```jsx
// 通过 this 绑定到全局对象
this.a2 = 10;

// 通过声明绑定到变量对象，但在全局环境中，变量对象就是它本身
var a1 = 20;

// 赋值操作，标识符会隐式绑定到全局对象
a3 = 30;
```

## 函数中的 this

在一个函数执行上下文中， `this` 由调用者提供，由调用函数的方式来决定。

**如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的 `this` 指向该对象。如果函数独立调用，那么该函数内部的 `this` 则指向 `undefined` 。但是在非严格模式下，当 this 指向 undefined 时，它会被自动指向全局对象。**

因此，要想明确 this 的指向，首先要找到函数的调用者以及区分它是否独立调用。

```jsx
function fn() {
	'use static';
	console.log(this);
}
fn(); // fn 是调用者，独立调用
window.fn(); // fn是调用者，被 window 所拥有

// undefined
// Window
```

```jsx
'use strict';
var a = 20;
function foo() {
  var a = 1;
  var obj = {
    a: 10,
    c: this.a + 20,
    fn: function () {
      return this.a;
    }
  }
  return obj.c;
}
console.log(foo());    // undefined ，函数独立调用，函数内部的this指向undefined
console.log(window.foo());  // 40 被window 对象所拥有，内部的this指向该对象。this.a = 20
```

再看一个例子：

```jsx
var a = 20;
var foo = {
  a: 10,
  getA: function () {
    return this.a;
  }
}
console.log(foo.getA()); // 10

var test = foo.getA;
console.log(test());  // 20
```

在 `foo.getA()` 中，getA 是调用者，不是独立调用，被对象 foo 所拥有，因此 `this` 指向了 foo。

而 `test()` 作为调用者，虽然 test 和 foo.getA的引用相同，但是属于独立调用。因此 this 指向 undefined。在非严格模式下，自动转为 window。

```jsx
function foo() {
  console.log(this.a)
}

function active(fn) {
  fn(); // 真实调用者，为独立调用
}

var a = 20;
var obj = {
  a: 10,
  getA: foo
}

active(obj.getA);
```

独立调用，this 指向 undefined，在非严格模式下，自动转向 window。如果改为严格模式，则为 undefined。

## 使用 call 、apply显式指定 this

函数可以通过调用 `call` 和 `apply` 方法，将 this 指向想要指向的对象。

fn 并不是属于对象 obj 的方法，但是通过 call，可以将 fn 内部的 this 绑定为 obj，因此就可以使用 this.a 访问 obj 的 a 属性了。

```jsx
function fn(){
	console.log(this.a);
}
var obj = {
	a: 20,
};
fn.call(obj);
```

call 和 apply 后面的参数，都是向将要执行的函数传递参数。call 是以一个一个的形式传递，apply 以数组的形式传递。这是两个方法唯一的不同。

```jsx
function fn(num1, num2){
	console.log(this.a + num1 + num2);
}
var obj = {
	a: 20,
};
fn.call(obj, 100, 10);
fn.apply(obj, [100, 10]);
```

## call 和 apply 使用的场景

### 将类数组对象转换为数组

```jsx
function exam(a, b, c, d, e) {

  // 先看看函数的自带属性 arguments 什么是样子的
  console.log(arguments);

  // 使用call/apply将arguments转换为数组, 返回结果为数组，arguments自身不会改变
  var arg = [].slice.call(arguments);

  console.log(arg);
}

exam(2, 8, 9, 10, 3);

// result:
// { '0': 2, '1': 8, '2': 9, '3': 10, '4': 3 }
// [ 2, 8, 9, 10, 3 ]
//
// 也常常使用该方法将DOM中的nodelist转换为数组
// [].slice.call( document.getElementsByTagName('li') );
```

### 根据需要灵活修改 this 指向

```jsx
var foo = {
  name: 'joker',
  showName: function () {
    console.log(this.name);
  }
}
var bar = {
  name: 'rose'
}
foo.showName.call(bar);
```

### 实现继承父类的属性和方法

```jsx
// 定义父级的构造函数
var Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.gender = ['man', 'woman'];
}

// 定义子类的构造函数
var Student = function (name, age, high) {

  // use call
  Person.call(this, name, age);
  this.high = high;
}
Student.prototype.message = function () {
  console.log('name:' + this.name + ', age:' + this.age + ', high:' + this.high + ', gender:' + this.gender[0] + ';');
}

new Student('xiaom', 12, '150cm').message();

// result
// ----------
// name:xiaom, age:12, high:150cm, gender:man;
```

### 在向其他执行上下文的传递中，确保 this 的指向保持不变

`getA` 被 obj 调用，this 指向 obj，但是由于匿名函数导致了 this 指向的丢失，在这个匿名函数中 this 指向了全局。

```jsx
var a = 100;
var obj = {
  a: 20,
  getA: function () {
    setTimeout(function () {
      console.log(this.a)
    }, 1000)
  }
}

obj.getA(); // 100
```

- 定义一个变量将 this 的引用保存起来；

```jsx
var obj = {
  a: 20,
  getA: function () {
    var self = this;
    setTimeout(function () {
      console.log(self.a)
    }, 1000)
  }
}
```

- 借助闭包和 apply 方法，封装一个 bind 方法；

```jsx
function bind(fn, obj){
	return function (){
		return fn.apply(obj, arguments);
	}
}
var obj = {
  a: 20,
  getA: function () {
    setTimeout(bind(function () {
      console.log(this.a)
    }, this), 1000);
  }
}
obj.getA();
```

- ES5 中自带的 bind 方法

```jsx
var obj = {
	a: 20,
	getA: function (){
		setTimeout(function (){
			console.log(this.a);
		}.bind(this), 1000);
	}
};
```

- ES6 中使用箭头函数的方式

## 构造函数与原型方法上的 this

通过 new 操作符调用构造函数，会：

- 创建一个新的对象；
- 将构造函数的 this 指向这个新对象；
- 指向构造函数的代码，为这个对象添加属性、方法等；
- 返回新对象；

因此，当 new 操作符调用构造函数的时候， `this` 指向的是新创建的对象，最后又将新对象返回出来，被实例对象 `p1` 接收。

**构造函数的 this 指向了 实例对象 p1**。

```jsx
function Person(name, age) {

    // 这里的this指向了谁?
    this.name = name;
    this.age = age;   
}

Person.prototype.getName = function() {

    // 这里的this又指向了谁？
    return this.name;
}

// 上面的2个this，是同一个吗，他们是否指向了原型对象？

var p1 = new Person('Nick', 20);
p1.getName();
```

`p1.getName()` 中 getName() 为调用者，p1 为拥有者，因此 `getName()` 中的 this，也指向了 p1。