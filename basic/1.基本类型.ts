// boolean 类型
const flag: boolean = true;

// Number 类型
const numVal: number = 1;

// string 类型
const strVal: string = "fff";

// Enum 类型
enum State {
  SUCCESS = "success",
  FAILED = "failed",
  PENDING = "pending",
}

// 数组类型(array)
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// 元组类型(tuple)
const tupleArr: [string, number] = ["hello", 1];

// Symbol类型(tuple)
const sym1 = Symbol("hello");
const sym2 = Symbol("hello");
console.log(Symbol("hello") === Symbol("hello"));

// any类型：TypeScript 允许我们对 any 类型的值执行任何操作 而无需事先执行任何形式的检查
const anyVal: any = document.getElementById("root");

// null 和 undefined
let u: undefined = undefined;
let n: null = null;

// Unknown类型: 所有类型都可以被归为 unknown, 但unknown类型只能被赋值给 any/unknown 类型
let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK

let value1: unknown = value; // OK
let value2: any = value; // OK

// void 表示没有任何类型 当一个函数没有返回值时 TS 会认为它的返回值是 void 类型
function helloVoid(name: string): void { }

// never 类型: 例如never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
function neverReach(): never {
  throw new Error("an error");
}

// never 和 void 的区别:
// void 可以被赋值为 null 和 undefined 的类型。 never 则是一个不包含值的类型。
// 拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常。

// object, Object 和 {} 类型
// 1. object 类型用于表示非原始类型
// let objectCase: object;
// objectCase = 1; // error
// objectCase = "a"; // error
// objectCase = true; // error
// objectCase = null; // error
// objectCase = undefined; // error
// objectCase = {}; // ok

// 2. Object 代表所有拥有 toString、hasOwnProperty 方法的类型 所以所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)
// let ObjectCase: Object;
// ObjectCase = 1; // ok
// ObjectCase = "a"; // ok
// ObjectCase = true; // ok
// ObjectCase = null; // error
// ObjectCase = undefined; // error
// ObjectCase = {}; // ok

// 3. {} 空对象类型同 Object

// 联合类型
let unionType: string | number;

// 类型断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// let a = obj!.a 非空断言

// 类型别名
type flag = string | number;
function helloFun(value: flag) { }

// 交叉类型： 将多个类型合并为一个类型
type Flag1 = { x: number };
type Flag2 = Flag1 & { y: string };

let flag3: Flag2 = {
  x: 1,
  y: "hello"
};