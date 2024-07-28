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
// https://juejin.cn/post/7031787942691471396#heading-59
// 6. 泛型类型别名
// 7. 泛型类型别名
// 8. 泛型类型别名
