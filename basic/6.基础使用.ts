// 1. typeof关键词，实现推出类型
let p1 = {
  name: "hello",
  age: 10,
  gender: "male",
};
type People = typeof p1;
function getName(p: People): string {
  return p.name;
}
getName(p1);

// 2. keyof 关键词，取得一个对象接口的所有 key 值
interface PersonInfo {
  name: string;
  age: number;
  gender: "male" | "female";
}
//type PersonKey = 'name'|'age'|'gender';
type PersonKey = keyof PersonInfo;

function getValueByKey(p: PersonInfo, key: PersonKey) {
  return p[key];
}
let val = getValueByKey({ name: "hello", age: 10, gender: "male" }, "name");
console.log(val);

// 3. 映射类型 in,在定义的时候用 in 操作符去批量定义类型中的属性
interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}
//批量把一个接口中的属性都变成可选的
type PartPerson = {
  [Key in keyof Person]?: Person[Key];
};

let person: PartPerson = {};

// 4. infer 关键词
type ReturnTypes<T> = T extends (...args: any[]) => infer R ? R : any; //获取函数返回值的类型

type MyFunction = (x: number, y: string) => boolean;
type MyFunctionReturnType = ReturnType<MyFunction>; // boolean
type MyOtherFunction = (a: number) => { name: string; age: number };
type MyOtherFunctionReturnType = ReturnType<MyOtherFunction>; // { name: string; age: number }

// 5. 内置工具类型
// (1).Exclude<T,U>: 从 T 可分配给的类型中排除 U
// type Exclude<T, U> = T extends U ? never : T;
type E = Exclude<string | number, string>;
let e: E = 10;

// (2).Extract<T,U>: 从 T 可分配给的类型中提取 U
// type Extract<T, U> = T extends U ? T : never;

type extract = Extract<string | number, string>;
let example: extract = "1";

// (3).NonNullable: 从 T 中排除 null 和 undefined
// type NonNullable<T> = T extends null | undefined ? never : T;

type nullable = NonNullable<string | number | null | undefined>;
// let notnull: nullable = null; 报错

// (4).ReturnType：表示在 extends 条件语句中待推断的类型变量
// type ReturnType<T extends (...args: any[]) => any> = T extends (
//   ...args: any[]
// ) => infer R
//   ? R
//   : any;
function getUserInfo() {
  return { name: "hello", age: 10 };
}
// 通过 ReturnType 将 getUserInfo 的返回值类型赋给了 UserInfo
type UserInfo = ReturnType<typeof getUserInfo>;

const userA: UserInfo = {
  name: "hello",
  age: 10,
};

// (5).Parameters：获取函数类型的参数类型
// type Parameters<T> = T extends (...args: infer R) => any ? R : any;

type T0 = Parameters<() => string>; // []
type T1 = Parameters<(s: string) => void>; // [string]
type T2 = Parameters<<T>(arg: T) => T>; // [unknown]

// (6).Partial：可以将传入的属性由非可选变为可选
// type Partial<T> = { [P in keyof T]?: T[P] };
interface A {
  a1: string;
  a2: number;
  a3: boolean;
}
type aPartial = Partial<A>;
const a: aPartial = {}; // 不会报错

// (7).Required：可以将传入的属性中的可选项变为必选项
/**
 * type Required<T> = { [P in keyof T]-?: T[P] };
 */
interface PersonInfos {
  name: string;
  age: number;
  gender?: "male" | "female";
}
let p: Required<PersonInfos> = {
  name: "hello",
  age: 10,
  gender: "male",
};

// (8).Readonly: 通过为传入的属性每一项都加上 readonly 修饰符来
//type Readonly<T> = { readonly [P in keyof T]: T[P] };
interface PersonData {
  name: string;
  age: number;
  gender?: "male" | "female";
}
let per: Readonly<PersonData> = {
  name: "hello",
  age: 10,
  gender: "male",
};
// per.age = 11; //error


// (9).Pick<T,K> Pick能够帮助我们从传入的属性中摘取某些返回
interface Todo {
  title: string;
  description: string;
  done: boolean;
}
/**
 * From T pick a set of properties K
 * type Pick<T, K extends keyof T> = { [P in K]: T[P] };
 */
type TodoBase = Pick<Todo, "title" | "done">;

let tes: TodoBase = {
  title: "dd",
  done: true
};


// (10).Record<K,T> 构造一个类型,该类型具有一组属性 K，每个属性的类型为 T
type Point = "x" | "y";
type PointList = Record<Point, { value: number }>;
const cars: PointList = {
  x: { value: 10 },
  y: { value: 20 },
};

// (11).Omit<K,T> 基于已经声明的类型进行属性剔除获得新类型
// type Omit=Pick<T,Exclude<keyof T,K>>
type User = {
  id: string;
  name: string;
  email: string;
};
type UserWithoutEmail = Omit<User, "email">;
let UserWithoutEmail: UserWithoutEmail ={id: "ddasds", name: "lisi"}


