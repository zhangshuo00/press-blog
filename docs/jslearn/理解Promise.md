# 理解 Promise

常见的宏任务：setTimeout，setInterval（定时器类）

常见的微任务：promise，process.nextTick

首先在 call stack 中的内容执行完之后，会检查 event queue 中哪些是宏任务，哪些是微任务。然后执行所有的微任务，然后执行一个宏任务。之后再执行所有的微任务。也就是说在主线程任务执行完毕后会把任务队列中的微任务全部执行，然后再执行一个宏任务，这个宏任务执行完再次检查队列内部的微任务，有就全部执行没有就再执行一个宏任务。

Promise 是异步编程的一种解决方案：从语法上讲，promise 是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺过一段时间会给你一个结果。promise 有三种状态： **pending（等待态），fulfilled（成功态），rejected（失败态）**，只有异步操作的结果可以决定当前是哪一种状态。任何其他操作都无法改变这个状态，创建 promise 实例后，它会立即执行。

promise 是用来解决两个问题的：

- 回调地狱，代码难以维护
- 支持多个并发的请求，获取并发请求中的数据
- 解决异步的问题，本身不能说 promise 是异步的

## Promise

`promise` 对象是一个构造函数，用来生成 promise 实例。

```jsx
const promise = new Promise(function (resolve, reject){
	...
	if(success){
		resolve(value);
	}esle{
		reject(error);
	}
});
```

promise 构造函数接收一个函数（**executor**）作为参数，函数的两个参数是 resolve 和 reject，这两个也是函数。

`resolve` 函数的作用是，将 promise 对象的状态从 `未完成` 变为 `成功` （即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果作为参数传递出去。

executor 会自动运行并 **尝试** 执行一项工作，结束后，如果成功则调用 resolve，如果出现 error，则调用 rejecte。

promise 对象有两个内部属性：

- `state` ：初始是 pending，然后再 resolve 被调用时变为 fulfilled，或者在 rejecte 被调用时变为 rejected；
- `result` ：初始是 undefined，然后在 resolve（value）被调用时变为 value，或者在 reject（error）被调用时变为 error；



```jsx
let promise = new Promise(function(resolve, reject){
	// promise 构造完成后，自动执行此函数
	setTimeout(()=>resolve('done'), 1000);
});

let promise = new Promise(function(resolve, reject) {
  // 1 秒后发出工作已经被完成的信号，并带有 error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
```

1. executor 被立即调用
2. executor 接收两个参数：resolve 和 reject。这两个函数是 JavaScript 引擎预先定义的，我们只要调用其中之一即可。

executor 应该执行一项工作（通常是需要花费一些时间的事儿），然后调用 `resolve` 或 `reject` 来改变对应的 promise 对象的状态。最后只能有一个结果或一个 error，其他的 resolve/reject 会被忽略。

与最初的 “pending” promise 相反，一个 resolved 或 rejected 的 promise 都会被称为 “settled”。

## 消费者：then、catch、finally

Promise 充当的是 executor（生产者）和 消费函数之间的连接，后者将接收结果或 error。可以通过使用 `then` 、 `catch` 、 `finally` 方法为消费函数进行注册。

### then

```jsx
let promise = new Promise(function(resolve, reject){
	// promise 构造完成后，自动执行此函数
	setTimeout(()=>resolve('done'), 1000);
});
promise.then(
	result=>alert(result); // 1秒后显示 done
	error=>alert(error); // 不运行
);
```

`.then` 的第一个参数是一个函数，该函数将在 promise resolved 后运行并接收结果。

`.then` 的第二个参数也是一个函数，该函数将在 promise rejected 后运行并接收 error。

### catch

```jsx
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) 与 promise.then(null, f) 一样
promise.catch(alert); // 1 秒后显示 "Error: Whoops!"
```

`.catch(f)`  调用是 `.then(null, f)` 的完全的模拟，它只是一个简写形式。

### finally

1. `finally` 处理程序（handler）没有参数。在 `finally` 中，我们不知道 promise 是否成功。没关系，因为我们的任务通常是执行“常规”的定稿程序（finalizing procedures）。
2. `finally` 处理程序将结果和 error 传递给下一个处理程序。

```jsx
new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Promise ready"))
  .then(result => alert(result)); // <-- .then 对结果进行处理
```

---

当一个 promise 准备就绪时，它的 then/catch/finally 处理程序就会被放入队列中，但是不会立即执行。

JavaScript 有三种栈

- 所有同步调用的堆栈；
- 具有较高优先级的所有异步操作的微任务队列(或作业队列或微任务堆栈)，例如：**process.nextTick、Promises、Object.Object、MutationWatch**
- 优先级较低的所有异步操作的宏任务队列(或事件队列、任务队列、宏任务队列)，例如：**setTimeout、setInterval、setImmediate、requestAnimationFrame、I/O、UI渲染；**

**综上所述：微任务队列与宏任务队列几乎相同，但是优先级高于宏任务。**

```jsx
console.log('stack [1]');
setTimeout(()=>console.log('macro [2]'), 0);
setTimeout(()=>console.log('macro [3]'), 1);

const p = Promise.resolve();
for(let i = 0;i<3;i++) p.then(()=>{
	setTimeout(()=>{
		console.log('stack [4]');
		setTimeout(()=> console.log('macro [5]'), 0);
		p.then(()=>console.log('micro [6]'));
	}, 0);
	console.log('stack [7]');
});

console.log('macro [8]');

/* 
stack [1]
macro [8]

stack [7] stack [7] stack [7]

macro [2]
marco [3]

stack [4]
micro [6]
stack [4]
micro [6]
stack [4]
micro [6]

macro [5] macro [5] macro [5]
*/
```

