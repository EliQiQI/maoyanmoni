<!--
 * @Author: your name
 * @Date: 2020-01-22 18:48:12
 * @LastEditTime : 2020-02-03 21:31:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/doc.md
 -->

1. 安装webpack webpack-cli 目的是对当前模块做一个加载
2. 创建src文件夹 开发文件夹 必须有一个入口文件 连接其他模块
3. 创建webpack.config.js文件 执行时会默认找到根目录下的webpack.config.js文件
4. webpack.config.js文件配置
5. 打包命令(初级使用) npx webpack npx:默认从当前文件的node_modules中找到相应的模块
6. scripts中的命令运行 npm run 命令
7. scripts中的配置项 --config:指定文件的配置型 --progress:文件打包的进度条  
8. plugins:使用插件 webpack中凡是用插件的地方都必须要在plugins中进行使用  
 - html-webpack-plugin
 - clean-webpack-plugin
 - extract-text-webpack-plugin 抽离css 优化
 - copy-webpack-plugin 拷贝静态资源
 `cnpm install html-webpack-plugin clean-webpack-plugin extract-text-webpack-plugin@next -D`  

9. loader:模块的转换 凡是需要将浏览器不识别的文件转换为浏览器识别的文件的配置项都需要在module中进行配置  

 **JSLoader**
 - babel-loader
 - @babel/core
 - @babel/preset-env
 
 `cnpm install babel-loader @babel/core @babel/preset-env -D`  

 **cssLoader**  
  - style-loader  
  - css-loader
  - sass-loader 
  - postcss-loader
  
 **图片loader**
  - url-loader  这个主要是用来解析一些体积比较小的图片 可以通过options中的limit来设置图片的大小 如果图片大于limit的大小
  - file-loader

  `cnpm install style-loader css-loader sass-loader node-sass postcss-loader autoprefixer -D`  

  `cnpm install url-loader file-loader -D`  
  
10. webpack-merge: 合并webpack配置项  `cnpm i webpack-merge -D`  
11. webpack-dev-server:  创建开发环境的服务 `cnpm install webpack-dev-server -D`  
12. 处理非模块化的插件 安装:`cnpm i script-loader exports-loader -D`  
```javascript
            {
                //引入非模块化的插件
                test: require.resolve('zepto'),
                //转换成模块的方式
                loader: 'exports-loader?window.Zepto!script-loader'
            }
```

13. 前端路由封装

根据用户请求路径的不同返回不同的页面或者数据

前端路由:
  前端路由一般情况下都是用来做spa 前端路由由用户请求的路径发生改变后页面是不会刷新的,用户体验比较好一些
  1.hash
  2.history
路由的底层原理:
 hash路由:通过onhashchange来检测hash值的变化 根据hash值的变化来显示不同的页面 
 history路由:通过pushState replaceState来检测地址的改变 切换不同的页面

 单页面开发用户体验比较好  
后端路由:
  接口

14. MVC
 M:model层:主要的作用用来做数据的增删改查
 V:view层:视图层 主要是用来做类似于HTML一样的模板  
 C:controller:逻辑层 编写业务逻辑
 
 **在单页面开发中如何使用async await**
 缺少解析器
 
 安装
 ```
cnpm i @babel/plugin-transform-runtime --save-dev
cnpm i @babel/runtime --save
 ```
 在.babelrc文件中配置`plugins:["@babel/plugin-transform-runtime"]`
