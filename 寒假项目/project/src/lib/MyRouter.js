import router from "../router";

/*
 * @Author: your name
 * @Date: 2020-01-26 10:38:58
 * @LastEditTime : 2020-02-03 19:00:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/lib/router.js
 */
class MyRouter{
    constructor(options){
        //路由配置项
        this.$options=options;
        //路由的形式 当用户传递了路由的形式就用用户传递过来的 如果没有则默认是hash
        this.$mode=this.$options.mode || "hash"
        //路由表
        this.$routes=this.$options.routes || []

        //定义初始的hash值
        this.current="/";
        
        //路由表对象
        this.mapRoutes={};

        //获取路由传值的对象
        this.$route={
            query:{

            },
            path:"/"
        }

        //初始化事件
        this.init();
    }
    init(){
        //判断hash路由还是history路由
        this.isMode();
        //1.监听路由变化的事件
        this.bindEvent();
        //2.处理路由表对象
        this.mapRoutesEvent();
        //3.渲染对应的页面
        // this.renderTemplate();
    }
    isMode(){
        //定义hash路由
        window.location.href=window.location.origin+"#/";
    }
    bindEvent(){
        //页面第一次加载进来的时候也需要监听路由变化
        window.addEventListener("load",this.handleBindEventSucc.bind(this))
        //监听hash值改变的事件
        window.addEventListener("hashchange",this.handleBindEventSucc.bind(this))
    }
    //hash改变后要做的事情
    handleBindEventSucc(){
        
        //获取到hash值
        
        let hash=window.location.hash.split("?")[0].slice(1) || "/";
        
        this.current=hash;
        //获取query传值
        
        this.getQuery();
        this.renderTemplate()

        
    }
    //将路由表转换为路由对象
    mapRoutesEvent(){
        this.$routes.forEach((item)=>{
            this.mapRoutes[item.path]=item;
        })
        // console.log(this.mapRoutes);
        
    }
    //渲染
    renderTemplate(){
        this.$route.path=this.current;
        var template=this.mapRoutes[this.current].template;
        template.render()
        
    }
    //路由跳转
    push(path){
        window.location.hash=path;
    }
    getQuery(){
        var href=window.location.href;
        var obj=href.substr(href.indexOf("?")+1).split("&").reduce(function(prev,item){
            let key=item.split("=")[0];
            let val=item.split("=")[1];
            prev[key]=val;
            return prev;
        },{})


        this.$route.query=obj;
    }
}
export default MyRouter;