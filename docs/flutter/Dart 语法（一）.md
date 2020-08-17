# Dart 语法（一）概述/变量/类型

## 简单程序示例

```dart
printNumber(int a,int b){
  print('this number is $a $b.');
}
main() {
  var number = 12, number2 = 10;
  printNumber(number,number2);
  // 这是单行注释
  /* 这是多行注释 */
}
```

## 重要概念

- 任何保存在变量中的都是一个 `对象` ，并且所有的对象都是对应一个 `类` 的实例。无论数字，函数和 null 都是对象。所有对象继承自 `Object` 类。
- 尽管 Dart 是强类型的，但是 Dart 可以推断类型，所以类型注释是可选的。如果要明确说明不需要任何类型， `需要使用特殊类型 dynamic` 。
- Dart 支持泛型，如 `List <int>` 整数列表、 `List <dynamic>` 任何类型的对象列表。
- Dart 支持顶级函数（例如 `main()` ），同样函数绑定在类或对象上（分别是 静态函数 和 实例函数）。以及支持函数内创建函数（嵌套 或 局部函数）。
- 类似的，Dart 支持顶级变量，同样变量绑定在类或对象上（静态变量 和 实例变量）。实例变量有时称为字段或属性。
- 与 Java 不同，Dart 没有关键字 **public、protected、private**。如果标识符以下划线开头，则它相对于库是私有的。
- 标识符以字母或下划线开头，后跟任意字母和数字组合。
- Dart 语法中包含 表达式（有运行时值）和 语句（没有运行时值）。例如，条件表达式 `condition ? expr1 : expr2` 的值可能是 `expr1 或 expr2` ，与 if-else 语句相比，if-else语句没有值。一条语句通常包含一个或多个表达式，相反表达式不能直接包含语句。

## 变量

```dart
var name = 'zhangsan';
```

变量仅存储对象引用， `name` 变量的类型被推断为 string，也可以指定类型。如果对象不限定为单个类型，可以指定为 对象类型 或 动态类型。

```dart
dynamic name = 'zhangsan';
```

或者显式声明

```dart
String name = 'zhangsan';
```

未初始化的变量默认值是 `null` 。

```dart
int lineCount;
print(lineCount == null);// true;
```

### Final 和 Const

使用过程中从来不会被修改的变量，可以使用 `final` 或 `const` ，Final 变量的值只能被设置一次，Const 变量在编译时就已经固定

> 实例变量可以是 final 类型但不能是 const 类型，且必须在构造函数执行之前初始化 final 实例变量。

```dart
final String name = 'zhangsan';

name = 'lisi'; //error: The final variable 'name' can only be set once;
```

如果需要在编译时就固定变量的值，可以使用 const 类型变量。**如果 const 变量是类级别的，需要标记为 `static const`** 

```dart
const bar = 1000000;
const double atm = 1.01325 * bar;// 标准气压
```

const 关键字不仅可以用于声明常量变量，还可以用来创建常量值，以及声明创建常量值的构造函数。任何变量都可以拥有常量值。

```dart
var foo = const [];
final bar = const [];
const num = []; // 声明 const 的初始化表达式中的 const 可以省略。
```

非 Final、非 const 的变量是可以被修改的，即时这些变量曾经引用过 const值。

```dart
foo = [1,2,3]; //没有问题
```

const 变量的值不可以被修改

```dart
num = [10]; //error: The final variable 'num' only be set once;
```

## 内建类型

- Number
- String
- Boolean
- List
- Map
- Set
- Rune
- Symbol

### Number

**int**   整数值不大于 64 位。Dart 被编译为 JavaScript numbers 时，值的范围 `-2^53 到 2^53-1` 

**double**  64位双精度浮点数。

将字符串转换为数字：

```dart
// String -> int
var one = int.parse('1');
assert(one == 1);

// String -> double
var onePointOne = double.parse('1.1');
assert(onePointOne == 1.1);

// int -> String
String oneAsString = 1.toString();
assert(oneAsString == '1');

// double -> String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');
```

int 特有的按位运算操作，移位（<<，>>），按位与（&）、按位或（ | ）

```dart
assert((3<<1) == 6); // 0011 << 1 == 0110
assert((3>>1) == 1); // 0011 >> 1 == 0001
assert((3|4) == 7); // 0011 | 0100 == 0111
```

### String

字符串可以通过 `${expression}` 的方式内嵌表达式，如果表达式是一个标识符，可以省略 括号。

可以使用 `+` 运算符连接多个字符串，也可以把多个字面量字符串写在一起来实现字符串连接

```dart
var s1 = 'string'
    'string1'
    'string2';
print(s1 == 'string'
       'string1'
       'string2'); // true
```

使用连续三个单引号或者三个双引号实现多行字符串对象的创建：

```dart
var s1 = '''
you can create
multi-line strings like this one.
''';
var s2 = """this is also a
multi-line string.""";
```

一个编译时常量的字面量字符串中，如果存在插值表达式，表达式内容也是编译时常量，那么该字符串依旧是编译时常量。插入的常量值类型可以是 null，数值，字符串或布尔值。（这段不太明白）


### Boolean

Dart 的类型安全意味着不能用 if 或者 assert，而是像下面这样，明确地进行值检查：

```dart
// 检查空字符串
var fullName = '';
assert(fullName.isEmpty);

// 检查 0 值
var hitPoints = 0;
assert(hitPoints <=0);

//检查 null 值
var unicorn;
assert(unicorn == null);

//检查 NaN
var a = 0/0;
assert(a.isNaN);
```

### List

Dart 中的 List 字面量非常像 JavaScript 中的 array 字面量。

```dart
var list = [1,2,3];
list[3] = 'string'; //error: a value of type 'String' can't be assigned to a variable of type 'int'
```

Dart 推断 list 的类型为 `List<int>`。如果想要将非整数对象添加到此 List 中，则会报错。

在 List 字面量之前添加 const 关键字，可以定义 List 类型的编译时常量：

```dart
var constList = const [1,2,3];
// constList[0] = 2;
```
### Set

在 Dart 中 Set 是一个元素唯一且无需的集合。

要创建一个空集，使用前面带有类型参数的 { }，或者将 { } 赋值给 Set 类型的变量。

```dart
var names = <String>{};
Set<String> names = {};
var names = {}; // 这样会创建一个 Map，而不是 Set
```

使用 `add()` 或 `addAll()` 为已有的 Set 添加元素：

```dart
var elements = <String>{};
var a = {'zhangsan','lisi'};
elements.add('string1');
elements.addAll(a);
```

使用 `.length` 获取 Set 中元素的个数；

在 Set 字面量前增加 const，来创建一个编译时 Set 常量

```dart
final constSet = const {'zhangsan','lisi'};
```

### Map

Map 是用来关联 keys 和 values 的对象，keys 和 values 可以是任何类型的对象。在一个 Map 对象中一个 key 只能出现一次，但是 value 可以出现多次。

```dart
var person = {
	'name': 'zhangsan',
	'age': '12'
};
var a = {
	1: 'zhangsan',
	2: 'lisi'
};
```

Dart 将 person 的类型推断为 Map<String, String>，a  的类型推断为 Map<int, String>

也可以使用 Map 构造函数创建：

```dart
var person = Map();
person['name'] = 'zhangsan';
```

创建 Map 类型运行时常量，要在 Map 字面量前加上关键字 const

```dart
final constMap = const {
	1: 'zhangsan',
	2: 'lisi',
	3: 'wangwu'
};
```

### Rune

在 Dart 中，Rune 用来表示字符串中的 UTF-32 编码字符。 表示 Unicode 编码的常用方法是， `\uXXXX` , 这里 XXXX 是一个4位的16进制数。 例如，心形符号 (♥) 是 `\u2665` 。 对于特殊的非 4 个数值的情况， 把编码值放到大括号中即可。 例如，emoji 的笑脸 ( 😀) 是 `\u{1f600}` 。

### Symbol

一个 Symbol 对象表示 Dart 程序中声明的运算符或者标识符。通过字面量 Symbol，也就是标识符前面添加一个 # 号，来获取标识符的 symbol。Symbol 是编译时常量。

---

## 一些疑问

- 什么是编译时常量、运行时常量
- Symbol 有什么用处
