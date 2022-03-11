// var 关键字 作用域是函数级 只能放在函数中 才是独立的作用域
/**
 * let 关键字 
 *  作用域是花括号级别
 *  let 不存在变量提升
 *  let不允许在同一作用域重复声明
 * 
 * const 声明常量
 *  常量不能改变
 */
{
    var a = 10;
    let b = 20;
}

console.log(a);
// console.log(b);  报错

// 变量提升
console.log(name);
var name = "aab";