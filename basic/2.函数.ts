// 1. 函数定义
function hello(name: string): void {
  console.log("hello", name);
}
hello("hahaha");

// 2. 函数表达式
type SumFunc = (x: number, y: number) => number;
let countNumber: SumFunc = function (a, b) {
  return a + b;
};

// 3. 可选参数
function print(name: string, age?: number): void {
  console.log(name, age);
}
print("hahaha");

// 4. 默认参数
function ajax(url: string, method: string = "GET") {
  console.log(url, method);
}
ajax("/users");

// 5. 剩余参数
function sum(...numbers: number[]) {
  return numbers.reduce((val, item) => (val += item), 0);
}
console.log(sum(1, 2, 3));

// 6. 函数重载
let obj: any = {};
function attr(val: string): void;
function attr(val: number): void;
function attr(val: any): void {
  if (typeof val === "string") {
    obj.name = val;
  } else {
    obj.age = val;
  }
}
attr("hahaha");
attr(9);
// attr(true);

