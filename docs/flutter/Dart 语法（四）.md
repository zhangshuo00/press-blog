# Dart 语法（四）控制流程语句/异常

## 控制流程语句

- if and else
- for loops
- while and do-while loops
- break and continue
- switch and case
- assert

使用 try-catch 和 throw 也可以改变程序流程

### if 和 else

和 JavaScript 不同，Dart 的判断条件必须是布尔值，不能是其他类型。

### for 循环

```dart
var msg = StringBuffer('Dart is fun');
for(var i = 0;i<3;i++){
	msg.write('!');
}
print(msg);// Dart is fun!!!
```

闭包在 Dart 的 for 循环中会捕获循环的 index 索引值，来避免 JavaScript 中常见的陷阱。

```dart
var callback = [];
for(var i=0;i<2;i++){
	callback.add(()=>print(i));
}
callback.forEach((c)=>c());
// 0
// 1
print(callback);
// [Closure 'main_closure', Closure 'main_closure']??两个闭包
```

如果要迭代一个实现了 Iterable 接口的对象，可以使用 forEach() 方法

```dart
candidates.forEach((candidate) => candidate.interview());
```

实现了 Iterable 的类（例如，List 和 Set）同样也支持使用 for-in 进行迭代操作 iteration

```dart
var collection = [0,1,2];
for( var x in collection) {
	print(x);// 0 1 2
}
```

### while 和 do-while

`while` 循环在执行前判断执行条件：

```dart
while(!isDone()){
	doSomething();
}
```

`do-while` 循环在执行后判断执行条件：

```dart
do {
	printLine();
} while(!atEndOfPage());
```

### break 和 continue

使用 break 停止程序循环；

使用 continue 跳转到下一次迭代；

```dart
for (int i = 0; i < candidates.length; i++) {
  var candidate = candidates[i];
  if (candidate.yearsExperience < 5) {
    continue;
  }
  candidate.interview();
}
```

如果对象实现了 Iterable 接口（例如 list 和 set）可以使用：

```dart
candidates
	.where((c) => c.yearsExperience >= 5)
	.forEach((c) => c.interview());
```

### switch 和 case

在 Dart 中 switch 语句使用 == 比较整数，字符串，或者编译时常量。比较的对象必须都是同一个类的实例，类必须没有对 == 重写。枚举类型可以用于 switch 语句。

在 case 语句中，每个非空的 case 语句结尾需要跟一个 break 语句。 除 break 以外，还有可以使用 continue, throw，者 return。当没有 case 语句匹配时，执行 default 代码。但是， Dart 支持空 case 语句， 允许程序以 fall-through 的形式执行。

在非空 case 中实现 fall-through 形式， 可以使用 continue 语句结合 lable 的方式实现:

```dart
var command = 'CLOSED';
switch (command) {
  case 'CLOSED':
    executeClosed();
    continue nowClosed;
  // Continues executing at the nowClosed label.

  nowClosed:
  case 'NOW_CLOSED':
    // Runs for both CLOSED and NOW_CLOSED.
    executeNowClosed();
    break;
}
```

### assert

如果 assert 语句中的布尔条件为 false，程序执行流程便会中断。

assert 的第一个参数可以是解析为布尔值的任何表达式。 如果表达式结果为 true ， 则断言成功，并继续执行。 如果表达式结果为 false ， 则断言失败，并抛出异常 (AssertionError) 。

assert 语句只在开发环境中有效， 在生产环境是无效的； Flutter 中的 assert 只在 debug 模式 中有效。

## 异常

Dart 代码可以抛出和捕获异常，异常表示一些未知的错误情况，如果异常没有被捕获，则异常会被抛出，导致抛出异常的代码终止执行。

Dart 中的所有异常都是非检查异常，方法不会声明它们抛出的异常，也不要求捕获任何异常。

### throw

```dart
throw FormatException('Expected at least 1 section');

// 也可以抛出任意的对象
throw 'out of llamas';
```

### catch

捕获异常可以避免异常继续传递（除非重新抛出异常（rethrow））。可以通过捕获异常的机会来处理该异常；

通过指定多个 catch 语句，处理可能抛出的多种类型异常的代码。捕获语句中可以同时使用 on 和 catch ，也可以单独分开使用。 使用 on 来指定异常类型， 使用 catch 来 捕获异常对象。

```dart
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  // 一个特殊的异常
  buyMoreLlamas();
} on Exception catch (e) {
  // 其他任何异常
  print('Unknown exception: $e');
} catch (e) {
  // 没有指定的类型，处理所有异常
  print('Something really unknown: $e');
}
```

如果仅需要部分处理异常， 那么可以使用关键字 rethrow 将异常重新抛出。

### finally

不过是否抛出异常，finally 中的代码都会被执行，如果 catch 没有匹配到异常，异常会在 finally 执行完成后，再次被抛出。

任何匹配的 catch 执行完成后，再执行 finally：

```dart
try {
  breedMoreLlamas();
} catch (e) {
  print('Error: $e'); // Handle the exception first.
} finally {
  cleanLlamaStalls(); // Then clean up.
}
```