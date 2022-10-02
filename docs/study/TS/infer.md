# TS学习
## infer
在有条件类型的 extends 子语句中，允许使用 infer 声明，它会引入一个待推断的类型变量， 这个推断的类型变量可以在有条件类型的 true 分支中被引用。
结合 Typescript 内置工具类型 ReturnType来理解 infer 声明一个待推断的变量：
```javascript
/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

在此基础上，也可以使用infer推断一个函数传入参数的类型：
```javascript
type ParamsType<T extends (...args: any) => any> = T extends (...args: infer R) => any ? R : any;
```
