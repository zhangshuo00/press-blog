# Dart 语法（三）运算符

## 运算符

[运算符表](https://www.notion.so/463ad52368f1478ea81ef2f75bc19db7)

在运算符表中，每一行的运算符优先级从上到下依次递减。**因此要注意包含多个运算符语句的执行顺序。**

### 算术运算符

```dart
assert(2 + 3 == 5);
assert(2 - 3 == -1);
assert(2 * 3 == 6);
assert(5 / 2 == 2.5); // 结果是双浮点型
assert(5 ~/ 2 == 2); // 结果是整型
assert(5 % 2 == 1); // 余数

assert('5/2 = ${5 ~/ 2} r ${5 % 2}' == '5/2 = 2 r 1');
```

```dart
var a, b;

a = 0;
b = ++a; // a自加后赋值给b。
assert(a == b); // 1 == 1

a = 0;
b = a++; // a先赋值给b后，a自加。
assert(a != b); // 1 != 0

a = 0;
b = --a; // a自减后赋值给b。
assert(a == b); // -1 == -1

a = 0;
b = a--; // a先赋值给b后，a自减。
assert(a != b); // -1 != 0
```

### 关系运算符

```dart
assert(2 == 2);
assert(2 != 3);
assert(3 > 2);
assert(2 < 3);
assert(3 >= 3);
assert(2 <= 3);
```

### 类型判定运算符

使用 `as` 运算符将对象强制转换为特定类型。通常，可以认为是 `is` 类型判定后，被判定对象调用函数的一种缩写形式。

```dart
if(emp is Person){
	emp.firstName = 'zhangsan';
}
// 使用 as 运算符进行缩写
(emp as Person).firstName = 'zhangsan';
```

`is` 判断对象是否为指定的类型

```dart
var a = 'zhangsan';
String b = 'lisi';
print(a is String);// true 类型推断为 String
print(b is String);// true
```

### 赋值运算符

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c1121423-c028-4bd0-819d-9934722a93ac/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c1121423-c028-4bd0-819d-9934722a93ac/Untitled.png)

```dart
// 将值赋值给变量a
a = value;
// 如果b为空时，将变量赋值给b，否则，b的值保持不变。
b ??= value;
```

### 逻辑运算符

```dart
// && 与 || 或 ！ 非
if (!done && (col == 0 || col == 3)) {
  // ...Do something...
}
```

### 按位和移位运算符

```dart
final value = 0x22;
final bitmask = 0x0f;

assert((value & bitmask) == 0x02); // 与
assert((value & ~bitmask) == 0x20); // 与非
assert((value | bitmask) == 0x2f); // 或
assert((value ^ bitmask) == 0x2d); // 异或
assert((value << 4) == 0x220); // 左移
assert((value >> 4) == 0x02); // 右移
```

### 条件表达式

`condition ? expr1 : expr2` 三目运算符

`expr1 ?? expr2` 如果 expr1 是 non-null，返回 expr1 的值；否则执行并返回 expr2的值。

如果赋值是基于布尔值，则使用三目运算符

```dart
var a = isString ? 'b' : 'c';
```

如果赋值是基于判断是否为 null，则考虑使用 ？？

```dart
//String name 为用户输入项，如果用户没有输入，则将 playerName 赋值为 Guest
String playerName(String name) => name ?? 'Guest';
```

### 级联运算符

级联运算符可以实现对同一个对象进行一系列的操作。除了调用函数，还可以访问同一对象上的字段属性。可以节省创建临时变量的步骤。

```dart
querySelector('#confirm')// 获取对象
	..text = 'Confirm' //调用成员变量
	..classes.add('important')
	..onClick.listen((e)=>window.alert('Confirmed'));

// 等价于
var button = querySelector('#confirm');
button.text = 'Confirm';
button.classes.add('important');
button.onClick.listen((e) => window.alert('Confirmed!'));
```

在返回对象的函数中谨慎使用级联操作

```dart
var sb = StringBuffer();
sb.write('foo')
	..write('bar'); //Error: The method 'write' isn't defined for the class 'void'.
```

`sb.write()` 函数调用返回 void，不能在 void 对象上创建级联操作。