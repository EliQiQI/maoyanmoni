"use strict";
/*
 * @Author: your name
 * @Date: 2020-01-29 09:46:31
 * @LastEditTime : 2020-01-29 17:18:24
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/learnTS/test2.ts
 */
// console.log("你好ts");
// function getData(){
// }
// var str:string="你好ts"
// 布尔类型
// //es5写法
// var flag=true;
// flag=3;
// /*ts代码必须指定类型*/
// var flag:boolean=true;
// // flag=123;//错误
// flag=false;
// var num:number=123;
// num=24;
// var str:string='this'
// str="haha";
// //ts定义数组有两种方式
// // var arr=['1','2'];
// // var arr:number[]=[1,2,3]
// var arr:Array<number>=[11,22,33]
// //元组类型
// let arr:[number,string]=[123,'this'];
// console.log(arr);
// enum Flag{
//     success=1,
//     error=2
// };
// // let f:Flag=Flag.error;
// // console.log(f);
// enum Color {blue,red=3,}
// var c:Color=Color.red;
// console.log(c);
// //1 如果标识符没有赋值 它的值就是下标
// var num:any=123;
// num='str';
// num=true;
// console.log(num)
//任意类型的用处  
// var oBox:any=document.getElementById('box');
// console.log(oBox);
// oBox.style.color='red';
//null 和 undefined 其他(never类型) 数据类型的子类型
// var num:number;
// console.log(num)
// //定义没有赋值就是undefined
// var num:number | undefined
// num=123;
// console.log(num);
// var num:null;
// num=null;
//一个元素可能是 number类型 可能是null 可能是undefined 
// var num:number | null |undefined;
// num=1234;
// console.log(num);
//es5的定义方法
// function run(){
//     console.log('run')
// }
// run();
// //表示方法没有返回任何类型
// function run():void{
//     console.log('run')
// }
// run();
//正确写法
// function run():number{
//     return 123;
// }
//never类型:是其他类型(包括null和undefined)的子类型 代表从不会出现的值
//这意味着声明never的变量 只能被never类型所赋值
// var a:undefined;
// a=undefined;
// var b:null;
// b=null;
// var a:never;
// // a=123;// 错误的写法
// a=(()=>{
//     throw new Error('错误')
// })()
// //es5定义函数
// //函数声明方法
// function run(){
//     return 'run'
// }
// //匿名函数
// var run2=function(){
//     return 'run2';
// }
//ts中定义方法传参
function getInfo(name, age) {
    return name + " --- " + age;
}
alert(getInfo('zhangsan', 20));
