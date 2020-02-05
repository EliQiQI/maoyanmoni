/*
 * @Author: your name
 * @Date: 2020-01-26 10:52:08
 * @LastEditTime : 2020-01-30 18:04:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/router/index.js
 */
/*
    路由表的配置:
        将用户请求的路径与页面进行相关联
*/
import MyRouter from  "lib/MyRouter"
import Home from "controller/home"
import List from "controller/list"
import Mine from "controller/mine"
const router=new MyRouter({
    //路由的形式
    mode:"hash",
    //路由表的配置
    routes:[
        {
            //当用户访问/的时候 页面显示home
            path:"/",
            template:Home
        },
        {
            //当用户访问/list的时候 页面显示list
            path:"/list",
            template:List
        },
        {
            //当用户访问/mine的时候 页面显示mine
            path:"/mine",
            template:Mine
        },       
    ]
})


window.router=router;
export default router;

