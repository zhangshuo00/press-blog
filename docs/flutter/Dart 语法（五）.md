# Dart 语法（五）类

## 类

Dart 是一种基于类和 mixin 继承机制的面向对象的语言。每个对象都是一个类的实例，所有的类都继承于 Object。基于 mixin继承 意味着每个类（除Obejct）都只有一个超类，一个类中的代码可以在其他多个继承类中重复使用。

### 使用类的成员变量

对象由函数和数据（即方法和实例变量）组成。方法的调用要通过对象完成，调用的方法可以访问其对象的其他函数和数据。

使用 `.` 来引用实例对象的变量和方法：

```dart
class Person {
  String name;
  num age;
  String number;
	String printName (){
    return 'my name is $name';
  }
}
main (){
	var a = new Person();
	a.name = 'zhangsan';
	print(a.printName());
}
```

用 `?.` 来代替 `.` 可以避免因为左边对象可能为 null，导致的异常；

```dart
a?.name = 'lisi';
// 如果 a 为 non-null，设置它变量 name 的值为 lisi
```

### 使用构造函数

通过 构造函数 创建对象。构造函数的名字可以是 ClassName 或者 ClassName.identifier。

```dart
class Person {
  String name;
  num age;
  Person.hahah(String name,num age){
    this.name = name;
    this.age = age;
  }
}

main(){
  var a = new Person.hahah('zhangsan',20);
  print(a.name);
}

//
class Person {
  String name;
  num age;
  Person(String name,num age){
    this.name = name;
    this.age = age;
  }
}

main(){
  var b = new Person('zhangsan',30);
  print(b.name);
}
```

一些类提供了常量构造函数，使用常量构造函数，在构造函数名之前加 const 关键字，来创建编译时常量。构造两个相同的编译时常量会产生一个唯一的，标准的实例：

```dart
var a = const Person(2,2);
var b = const Person(2,2);
// a 和 b 是同一个实例
```

在常量上下文中，构造函数或者字面量前的 const 可以省略。

如果常量构造函数在常量上下文之外，且省略了 const 关键字，此时创建的对象是非常量对象。

### 获取对象的类型

使用对象的 `runtimeType` 属性，可以在运行时获取对象的类型， `runtimeType` 属性会返回一个 `Type` 对象。

```dart
class Person {
  String name;
  num age;
  Person(String name,num age){
    this.name = name;
    this.age = age;
  }
}

main(){
  var b = new Person('zhangsan',30);
  print(b.runtimeType);
}
// Person
```

### 实例变量

声明实例变量，未初始化实例变量的默认值为 null；

```dart
class Person{
	String name;
	num age;
	String sex = '男';
}
```

所有实例变量都生成隐式 getter 方法，非 final 的实例变量同样会生成隐式 setter 方法。如果在声明时进行了实例变量的初始化，那么初始值也会在实例创建时赋值给变量，该赋值过程在构造函数及其初始化列表执行之前。

### 构造函数

通过创建一个与类同名的函数来声明构造函数，使用 this 关键字引用当前实例

```dart
class Person {
  String name;
  num age;
  Person.hahah(String name,num age){
    this.name = name;
    this.age = age;
  }
}

class Person {
	String name;
	num age;
	Person(this.name,this.age);
}
```

在没有声明构造函数的情况下，Dart 会提供一个默认的构造函数，默认构造函数没有参数并会调用父类的无参构造函数。

**构造函数不会被继承** ，子类不会继承父类的构造函数，子类不声明构造函数，它只有默认的构造函数（匿名，没有参数）。

**使用命名构造函数可以为一个类实现多个构造函数** 

```dart
class Person {
	String name;
	num age;
	Person(this.name, this.age);
	Person.origin(){
		name = 'zhangsan';
		age = 20;
	}
}
```

因为构造函数不能被子类继承，如果希望使用父类中定义的命名构造函数创建子类，就必须在子类中实现该构造函数。

默认情况下，子类的构造函数会自动调用父类的默认构造函数（匿名，无参数），父类的构造函数在子类构造函数体开始执行的位置被调用。执行顺序：

1. 初始化参数列表
2. 父类的无名构造函数
3. 子类的无名构造函数

```dart
class Person {
  String firstName;

  Person.fromJson(Map data) {
    print('in Person');
  }
}

class Employee extends Person {
  // Person does not have a default constructor;
  // you must call super.fromJson(data).
  Employee.fromJson(Map data) : super.fromJson(data) {
    print('in Employee');
  }
}

main() {
  var emp = new Employee.fromJson({});

  // Prints:
  // in Person
  // in Employee
  if (emp is Person) {
    // Type check
    emp.firstName = 'Bob';
  }
  (emp as Person).firstName = 'Bob';
}
```

由于父类的构造函数参数在构造函数执行之前执行，所以参数可以是一个表达式或者一个方法调用：

```dart
class Employee extends Person {
	Employee() : super.fromJson(getDefaultData());
  // ...
}
```

除了调用超类构造函数之外，还可以在构造函数体执行之前初始化实例变量，各参数的初始化用逗号分隔。

```dart
Point.fromJson(Map<String, num> json)
	:x = json['x'],
		y = json['y'] {
		print('in point.fromJson(): ($x, $y)');
	}

```

使用初始化列表可以很方便的设置 final 字段

```dart
class Point {
	final num x;
	final num y;
	final num distanceFromOrigin;

	Point(x,y)
			: x = x,
				y = y,
				distanceFromOrigin = sqrt(x*x + y*y);
}
```

有时候构造函数唯一目的是重定向到同一类中的另一个构造函数，重定向构造函数的函数体为空，构造函数的调用在 ： 之后。

```dart
class Point{
	num x,y;
	// 类的主构造函数
	Point(this.x, this.y);
	// 指向主构造函数
	Point.alongXAxis(num x) : this(x, 0);
}

```

如果该类生成的对象是固定不变的，那么就可以把这些对象定义为 `编译时常量` 。定义一个 const 构造函数，并且声明所有实例变量为 final。

```dart
class ImmutablePoint {
	static final ImmutablePoint origin = 
			const ImmutablePoint(0,0);
	final num x, y;
	const ImmutablePoint(this.x, this.y);
}
```

工厂构造函数，当执行构造函数并不总是创建这个类的一个新实例时，则使用 `factory` 关键字，例如，一个工厂构造函数可以能会返回一个 cache 中的实例，或者可能返回一个子类的实例。

```dart
class Logger {
  final String name;
  bool mute = false;

  // 从命名的 _ 可以知，
  // _cache 是私有属性。
  static final Map<String, Logger> _cache =
      <String, Logger>{};

  factory Logger(String name) {
    if (_cache.containsKey(name)) {
      return _cache[name];
    } else {
      final logger = Logger._internal(name);
      _cache[name] = logger;
      return logger;
    }
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}

main() {
  var logger = Logger('UI');
  logger.log('Button clicked');
}
```

### 方法

方法是为对象提供行为的函数。

对象的实例方法可以访问 this 和 实例变量；

```dart
import 'dart:math';

class Point{
  num x, y;
  Point(this.x,this.y);

	// 两个实例点之间距离
  num distanceTo(Point other){
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }
}

main() {
  var a = Point(2,2);
  var b = Point(2,10);
  print(b.distanceTo(a));
}
```

**Getter 和 Setter** 是用于对象属性读和写的特殊方法。每个实例变量都有一个隐式 Getter，通常情况下还有一个Setter。使用 `get` 和 `set` 关键字实现 Getter 和 Setter ，能够为实例创建额外的属性。

```dart
class Rectangle {
  num left, top, width, height;
  
  Rectangle(this.left, this.top, this.width, this.height);
  
  num get right => left + width;
  set right(num value) => left = value - width;
  num get bottom => top + height;
  set bottom(num value) => top = value - height;
}

main() {
  var a = Rectangle(3,4,20,15);
  print(a.left); // 3
  a.right = 12;
  print(a.left); // -8
}
```

**抽象方法** 只存在于抽象类中；实例方法/getter/setter 方法可以是抽象的，只定义接口不进行实现，而是留给其他类去实现。调用抽象方法会导致运行时错误。

```dart
abstract class Doer {
	// 定义一个抽象方法
  void doSomething();
}
class EffectiveDoer extends Doer{
  void doSomething(){
    // 提供方法实现，所以这里就不是抽象方法了
  }
}
```

### 抽象类

使用 `abstract` 修饰符来定义抽象类，抽象类不能实例化，抽象类通常用来定义接口，以及部分实现。如果希望实例化抽象类，可以通过定义一个工厂构造函数来实现。

抽象类通常具有抽象方法：

```dart
abstract class Doer {
	// 定义一个抽象方法
  void doSomething();
}
```

### 隐式接口

每个类都隐式的定义了一个接口，接口包含了该类所有的实例成员及其实现的接口，如果要创建一个 `A类` ， `A` 要支持 `B类` 的API，但是不需要继承 `B` 的实现，那么可以通过 `A` 实现 `B` 的接口。

一个类可以通过 `implements` 关键字来实现一个或多个接口，并实现每个接口要求的 API。

```dart
// person 类。 隐式接口里面包含了 greet() 方法声明。
class Person {
  // 包含在接口里，但只在当前库中可见。
  final _name;

  // 不包含在接口里，因为这是一个构造函数。
  Person(this._name);

  // 包含在接口里。
  String greet(String who) => 'Hello, $who. I am $_name.';
}

// person 接口的实现。
class Impostor implements Person {
  get _name => '';

  String greet(String who) => 'Hi $who. Do you know who I am?';
}

String greetBob(Person person) => person.greet('Bob');

void main() {
  print(greetBob(Person('Kathy')));
  print(greetBob(Impostor()));
}
```

### 扩展类（继承）

使用 extends 关键字来创建子类，使用 super 关键字来引用父类

```dart
class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ···
}

class SmartTelevision extends Television {
  void turnOn() {
    super.turnOn();
    _bootNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ···
}
```

子类可以重写实例方法，getter 和 setter ，可以使用 `@override` 注解指出想要重写的成员

```dart
class SmartTelevision extends Television {
  @override
  void turnOn() {...}
  // ···
}
```