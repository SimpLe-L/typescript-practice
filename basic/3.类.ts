// 1. 基本定义
class Person {
  name!: string; //如果初始属性没赋值就需要加上!
  constructor(_name: string) {
    this.name = _name;
  }
  getName(): void {
    console.log(this.name);
  }
}
let p1 = new Person("hello");
p1.getName();

// 定义一个类会得到两个类型: 一个是构造函数类型的函数类型(当做普通构造函数的类型) 另一个是类的实例类型（代表实例）
class Component {
  static myName: string = "静态名称属性";
  myName: string = "实例名称属性";
}
//ts 一个类型 一个叫值
//放在=后面的是值
let com = Component; //这里是代表构造函数
//冒号后面的是类型
let c: Component = new Component(); //这里是代表实例类型
let f: typeof Component = com;

// 2. 存取器
class User {
  myname: string;
  constructor(myname: string) {
    this.myname = myname;
  }
  get name() {
    return this.myname;
  }
  set name(value) {
    this.myname = value;
  }
}

let user = new User("hello");
user.name = "world";

// 3. readonly 修饰的变量只能在构造函数中初始化
class Animal {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  changeName(name: string) {
    // this.name = name; //这个ts是报错的
  }
}

// 4. 继承
class Teacher {
  name: string; //定义实例的属性，默认省略public修饰符
  age: number;
  constructor(name: string, age: number) {
    //构造函数
    this.name = name;
    this.age = age;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
class Student extends Teacher {
  no: number;
  constructor(name: string, age: number, no: number) {
    super(name, age);
    this.no = no;
  }
  getNo(): number {
    return this.no;
  }
}
let s1 = new Student("hello", 10, 1);

// 5. 修饰符
class Parent {
  public name: string;
  protected age: number;
  private car: number;
  constructor(name: string, age: number, car: number) {
    //构造函数
    this.name = name;
    this.age = age;
    this.car = car;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
class Child extends Parent {
  constructor(name: string, age: number, car: number) {
    super(name, age, car);
  }
  desc() {
    // console.log(`${this.name} ${this.age} ${this.car}`); //car访问不到 会报错
  }
}

let child = new Child("hello", 10, 1000);
console.log(child.name);
// console.log(child.age); //age访问不到 会报错
// console.log(child.car); //car访问不到 会报错

// 6. 静态属性 静态方法
class Parent1 {
  static mainName = "Parent";
  static getmainName() {
    console.log(this); //注意静态方法里面的this指向的是类本身 而不是类的实例对象 所以静态方法里面只能访问类的静态属性和方法
    return this.mainName;
  }
  public name: string;
  constructor(name: string) {
    //构造函数
    this.name = name;
  }
}
console.log(Parent1.mainName);
console.log(Parent1.getmainName());

// 7. 抽象类和抽象方法
abstract class Animals {
  name!: string;
  abstract speak(): void;
}
class Cat extends Animals {
  speak() {
    console.log("喵喵喵");
  }
}
// let animal = new Animals(); //直接报错 无法创建抽象类的实例
let cat = new Cat();
cat.speak();

// 8. 重写 重载
// 重写：是指子类重写继承自父类中的方法 
// 重载：是指为同一个函数提供多个类型定义

// 9. 多态:在父类中定义一个方法，在子类中有多个实现
abstract class Animal11 {
  // 声明抽象的方法，让子类去实现
  abstract sleep(): void;
}
class Dog extends Animal11 {
  sleep() {
    console.log("dog sleep");
  }
}
let dog = new Dog();
class Cat1 extends Animal11 {
  sleep() {
    console.log("cat sleep");
  }
}
let cat1 = new Cat();


