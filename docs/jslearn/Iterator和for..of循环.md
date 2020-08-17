# Iterator和for..of循环

## 引子

```JavaScript
var arr = [1,2,3];

```

`arr` 是一个简单的数组，如果想要获取数组内的每一个元素，首先想到的是 `for循环` ，如果觉得循环比较low（基础），可以使用 `forEach` 。

```JavaScript
// for循环
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}

// forEach
arr.forEach(item => {
  console.log(item);
});
```

---

如果给定的是一个字符串，想要输出每一个字符怎么办？

可以用 `for in` 或者转化成数组，用 `for循环` 的方式。

```JavaScript
var str = '123';

// for in
for(let s in str){
  console.log(str[s])
}

// 转成数组
for(let i = 0;i < str.length;i++){
  console.log(str[i]);
}

//
Array.prototype.slice.call(str);
```

---

## 发现问题

为什么要举上面的例子，你会发现我们要做的都是获取每一项的数据。

但是有一个问题，没有一个统一的方法。

ES6 的 `for of` 循环可以对不同数据结构进行统一遍历，直接取值、简化操作，不需要再声明和维护什么变量，对数据做转换。

并不是所有的对象都能使用 `for of` ，只有实现了 `Iterator` 接口的对象才能够使用 `for of` 来进行遍历取值。所以说 `for of` 只是语法糖，真正的主角是 `Iterator` 。

---

## Iterator 迭代器

Iterator是一种接口，目的是为不同的数据结构提供统一的数据访问机制。

也可以理解为 Iterator接口主要为 for of 服务的，供 for of 进行消费。

因为JavaScript没有接口的概念， **可以把它理解成一种特殊的对象 — 迭代器对象**，返回此对象的方法叫做迭代器方法。

- 该对象有一个 `next` 方法，每次调用都会返回一个结果值；

- 结果值是一个对象，包含两个属性， `value` 和 `done` ；

    - value 表示具体的返回值；

    - done是布尔类型，表示集合是否遍历完成或者是否后续还有可用数据，没有可用数据则返回 `true` ；

- 对象内部还有一个指针，用来指向当前集合的位置，每调用一次 `next` 方法，指针都会向后移动一个位置（可以想象成数组的索引）；

### 模拟实现

```JavaScript
function getIterator(list){
  var i = 0;
  return {
    next: function(){
      var done = (i >= list.length);
      var value = !done ? list[i++] : undefined;
      return {
        done: done,
        value: value
      };
    }
  };
}

var it = getIterator(['a', 'b', 'c']);
console.log(it.next());// {value: "a", done: false}
console.log(it.next());// {value: "b", done: false}
console.log(it.next());// {value: "c", done: false}
console.log(it.next());// "{ value: undefined, done: true }"
console.log(it.next());// "{ value: undefined, done: true }"
console.log(it.next());// "{ value: undefined, done: true }"

```

- `getIterator` 方法返回一个对象 — 可迭代对象；

- `next` 方法内部通过使用闭包来保存指针 `i` 的值，每次调用 `next` 方法 `i` 值都会 `+1` ；

- 然后根据 `i` 的值从数组内取出数据作为 `value` ，然后通过索引判断得到 `done` 的值；

### for of运行机制

当 `for of` 执行的时候，循环过程中引擎就会自动调用这个 **对象上的迭代器方法** ，依次执行迭代器对象的 `next` 方法，将 `next` 返回值赋值给 `for of` 内的变量，从而得到具体的值。

### 实现可迭代对象

普通的对象是不能被 `for of` 遍历的，会报错。

```JavaScript
var obj = {};
for(var i of obj){}
// obj is not iterable
```

那么怎么让一个对象变成可迭代对象呢？在对象上部署 `Symbol.iterator` 属性，然后为其创建一个迭代器方法。

```JavaScript
var iterableObj = {
  items: [1,2,3],
  [Symbol.iterator]:function(){
    var self = this;
    var i = 0;
    return {
      next: function(){
        var done = (i >= self.items.length);
        var value = !done ? self.items[i++] : undefined;
        return {
          done: done,
          value: value
        }
      }
    }
  }
}

for(var item of iterableObj){
  console.log(item);
}
```

然后上面这个对象就是迭代器对象了，可以被 `for of ` 消费了。

## Iterator 原生应用场景

在最开始的时候，我们用 `for of` 遍历了字符串、数组、map，我们并没有为他们部署 Iterator 接口，为什么仍然可以遍历成功呢？

因为在 ES6中有些对象已经默认部署了接口，那我们看看能不能拿到它们的迭代器。

```JavaScript
// 数组
var arr = [1,2,3];
var iteratorObj = arr[Symbol.iterator]('Symbol.iterator');

console.log(iteratorObj.next()); 
//Object
//done: false
//value: 1

```

函数内的 `arguments` 是一个类数组，也支持 `for of` ，但我们知道对象默认是没有部署这个接口的， **所以 arguments这个属性没有在原型上，而是在对象自身的属性上** 。

```JavaScript
function test() {
    var obj = arguments[Symbol.iterator]("Symbol.iterator");
    console.log(arguments.hasOwnProperty(Symbol.iterator));
    console.log(arguments);
    console.log(obj.next());
}

test(1,2,3);

```

![](https://secure-static.wolai.com/static/u2a7yy7fAuBaWazgT4hHrQ/image.png)

> 综上：已默认部署 Iterator接口的对象主要包括 数组、字符串、Set、Map、类数组的对象（比如arguments对象、DOM NodeList 对象）。

## 扩展

### for of中断

普通的 `for` 循环是可以随时中断的， `for of` 机制兼顾了 `for` 和 `forEach` ，除了 `next` 方法外，还有两个可选的方法 `return` 和 `throw` 方法。

如果 for of 提前退出，则会自动调用 `return` 方法，return 必须有返回值，且必须是一个 object 对象。

```JavaScript
var iterableObj = {
  items: [1,2,3],
  [Symbol.iterator]: function(){
    var self = this;
    var i = 0;
    return {
      next: function(){
        var done = (i >= self.items.length);
        var value = !done ? self.items[i++] : undefined;
        return {
          done: done,
          value: value
        }
      },
      return (){
        console.log('exit');
        return{
          done: true
        }
      }
    }
  }
};

for (var item of iterableObj) {
  console.log(item);
  if(item === 200) {
    break;
}}
    
for (var item of iterableObj) {
 console.log(item);
 throw new Error();
}

```

---

[原文链接](https://juejin.im/post/6844904025167495181)