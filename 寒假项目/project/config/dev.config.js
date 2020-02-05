/*
 * @Author: your name
 * @Date: 2020-01-22 19:30:51
 * @LastEditTime : 2020-02-03 18:52:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/config/dev.config.js
 */
const baseConfig =require("./base.config");
const webpackMerge=require("webpack-merge");
const path=require("path");

//合并
const config=webpackMerge(baseConfig,{
    //当前的环境
    mode:"development",
    devtool:"cheap-module-eval-source-map",
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                //cssloader的执行顺序 从右到左 从下到上 
                use:["style-loader","css-loader","sass-loader"],
                exclude:path.join(__dirname,"../node_modules")
            }
        ]
    },
    //服务器的配置项
    devServer:{
        //自动打开浏览器
        open:true,
        //设置端口号
        port:2020,
        historyApiFallback:{
            rewrites:[
                {
                    from:/.*/g,
                    to:'/index.html' //与output的publicPath有关(HTMLplugin生成的HTML默认为index.html)
                }
            ]
        },
        //代理
        proxy:{
            "/ajax":{
                //代理的目标点
                target:"http://m.maoyan.com",
                //允许跨域代理
                changeOrigin:true,
            }
            //当请求的地址以/ajax开头的时候 会将请求的地址代理到猫眼上去
        }
    }
})


module.exports=config;
