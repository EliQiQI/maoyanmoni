<!--
 * @Author: your name
 * @Date: 2020-01-29 10:07:39
 * @LastEditTime : 2020-01-29 10:39:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/learnTS/doc.md
 -->
1. vscode配置自动编译
1.第一步 tsc --init 生成tsconfig.json 改变 "outDir":"./js"

2.第二步  任务-监视任务 监视tsconfig.json

2. TypeScript中的数据类型  

TypeScript中为了使编写的代码更规范,更有利于维护,增加了类型校验,在TypeScript中主要给我们提供了以下数据类型 

 - 布尔类型(boolean)
 - 数字类型(number)
 - 字符串类型(string)
 - 数组类型(array)
 - 元组类型(tuple)
 - 枚举类型(enum) 
 > 随着计算机的不断普及,程序不仅只用于数值计算,还更广泛地用于处理非数值的数据.
 > 例如,性别,月份,星期几,颜色,单位名,学历,职业等,都不是数值数据
 > 在其他程序设计语言中,一般用一个数值来代表某一状态,这种处理方法不直观,易读性差
 > 如果能在程序中用自然语言中有响应含义的单词来代表某一状态,则程序就很容易阅读和理解
 > 也就是说,事先考虑到某一变量可能取的值,尽量用自然语言中含义清除的单词来表示每一个值,这种方法称为枚举方法,用这种方法定义的类型称**枚举类型**
 ```
 enum 枚举名{
     标识符[=整型常数],
     标识符[=整型常数],
     ...
     标识符[=整型常数],
 };
 ```
 - 任意类型(any)
 - null和undefined
 - void类型
 - never类型 

3. 函数  

3.1函数的定义  
```

```

