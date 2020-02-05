/*
 * @Author: your name
 * @Date: 2020-01-22 19:04:15
 * @LastEditTime : 2020-01-22 19:21:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: /project/webpack.config.js
 */
const path=require("path");
//__dirname表示当前文件的绝对路径
//path.join:做路径的拼接
//配置入口文件和出口文件地址

const PATH={
    app:path.join(__dirname,"./src/main.js"),
    build:path.join(__dirname,"./dist"),
}

//配置webpack

module.exports={
    //入口文件配置
    entry:{
        app:PATH.app
    },
    //出口配置
    output:{
        path:PATH.build,
        filename:"[name].js"
    }
}