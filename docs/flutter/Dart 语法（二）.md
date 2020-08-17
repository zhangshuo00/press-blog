# Dart 语法（二）函数

## 函数

### 可选参数

可选参数可以是**命名参数或者位置参数**，但一个参数只能选择其中一种方式修饰。

调用函数时可以使用指定命名参数 `paramName: value` 

```dart
enableFlag(bold: true, hidden: false);
```

定义函数时，使用 `{param1, param2, ...}` 来指定命名参数：

```dart
void enableFlag({bool bold, bool hidden}) {...}
```

使用 `@required` 注释表示参数是 required 性质的命名参数：

```dart
const scrollbar({key key, @required Widget child})
```

将参数放到 `[ ]` 中来标记参数是可选的：

```dart
String say(String from, String msg, [String device]) {
	var result = '$from says $msg';
	if(device != null){
		result = '$result with a $device';
	}
	return result;
}
```

在定义方法的时候，可以使用 `=` 来定义可选参数的默认值。默认值只能是编译时常量。如果没有提供默认值，则默认值为 null。

```dart
// 给位置参数设置默认值
String say(String from, String msg, [String device = 'carrier pigeon']) {
	var result = '$from says $msg';
	if(device != null){
		result = '$result with a $device';
	}
	return result;
}
```

list 或 map 可以作为默认值传递

```dart
void doStuff({
	List<int> list = const [1,2,3],
	Map<String, String> gifts = const {
		'first': 'paper',
		'second': 'cotton',
		'third': 'leather'
	}
}){
	...
}
```

### main() 函数

任何应用都必须有一个顶级 `main()` 函数，作为应用服务的入口。 `main()` 函数的返回值为空，参数为一个可选的 `List<String>` 

### 函数是一等对象

一个函数可以作为另一个函数的参数。

```dart
void printElement(int element){
	print(element);
}
var list = [1,2,3];
// 将 printElement 函数作为参数传递
list.forEach(printElement);
```

也可以将一个函数赋值给一个变量

```dart
var loudify = (msg) => '${msg.toUpperCase()}';
```

### 匿名函数

没有名字的函数被称为 `匿名函数` ，匿名函数可以赋值到一个变量中。

```dart
 ([[Type] param1[,...]]) {
     codeBlock;//函数体
 }
```

定义一个包含无类型参数`item` 的匿名函数，list 中的每个元素都会调用这个函数，打印元素位置和值的字符串。

```dart
 var list = ['apple','orange','banana'];
 list.forEach((item){
     print('${list.indexOf(item)}: $item');
 })
 
 // 0: apple
 // 1: orange
 // 2: banana
```

如果函数只有一条语句，可以使用箭头简写。

```dart
 list.forEach((item)=>print('${list.indexOf(item)}: $item'));
```

### **词法作用域**

Dart 是一门词法作用域的编程语言，就意味着变量的作用域是固定的，简单说变量的作用域在编写代码的时候就已经确定了。花括号内的是变量可见的作用域。

### 词法闭包

闭包即一个函数对象，即使函数对象的调用在它原始作用域之外，依然能够访问在它词法作用域内的变量。

函数可以封闭定义到它作用域内的变量。`makeAddr()` 捕获了变量`addBy` ，无论在什么时候执行返回函数，函数都会使用捕获的`addBy` 变量。

```dart
Function makeAddr(num addBy){
    return (num i) => addBy + i;
}
void main(){
	var add2 = makeAddr(2);
    var add4 = makeAddr(4);
    print(add2(3));// 5
    print(add4(3));// 7
}
```