// 1. 描述对象
interface Speakable {
  speak(): void;
  readonly lng: string; //readonly表示只读属性 后续不可以更改
  name?: string; //？表示可选属性
  [propName: string]: any;// 任意属性
}

let speakman: Speakable = {
  speak() { }, //少属性会报错
  name: "hello",
  lng: "en",
  age: 111,
};

// 2. 描述对象： 接口可以把一些类中共有的属性和方法抽象出来,可以用来约束实现此接口的类
//接口可以在面向对象编程中表示为行为的抽象
interface Speak {
  speak(): void;
}
interface Eatable {
  eat(): void;
}
//一个类可以实现多个接口
class Person implements Speak, Eatable {
  speak() {
    console.log("Person说话");
  }
  eat() { } //需要实现的接口包含eat方法 不实现会报错
}

// 3. 接口继承
interface CanSpeak {
  speak(): void;
}
interface SpeakChinese extends CanSpeak {
  speakChinese(): void;
}
class Animals implements SpeakChinese {
  speak() {
    console.log("Person");
  }
  speakChinese() {
    console.log("speakChinese");
  }
}

// 4. 定义函数类型
interface discount {
  (price: number): number;
}
let cost: discount = function (price: number): number {
  return price * 0.8;
};

// 5. 接口和类型别名的区别
//----类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组
//----接口可以定义多次 会被自动合并为单个接口 类型别名不可以重复定义
//----接口拓展通过继承（extends ），类型别名的扩展就是交叉类型，通过 &
//---- 类无法实现定义了联合类型的类型别名
// type PartialPoint = { x: number } | { y: number };
// class SomePartialPoint implements PartialPoint {
//   // Error
//   x = 1;
//   y = 2;
// }
