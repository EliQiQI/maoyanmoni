/*
 * @Author: your name
 * @Date: 2020-01-30 17:07:47
 * @LastEditTime : 2020-02-01 10:25:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/controller/tabbar.js
 */
import tabbarView from "view/tabbar.ejs" ;
import "styles/tabbar.scss"
import router from "../router";
class Tabbar{
    constructor(){
        this.data=[
            {
                icon:"#icon-dianying",
                text:"电影"
            },
            {
                icon:"#icon-yingyuan",
                text:"影院"
            },
            {
                icon:"#icon-wodeguanzhu",
                text:"我的"
            },                        
        ],
        this.activeIndex=0;
        this.router=window.router;
    }
    init(){
        this.render();
        // $('#footer>ul>li').eq(1).trigger('tap');
    }
    render(){
        var html=tabbarView({data:this.data});
        $('#app').append(html);
        this.eachTabBar();
        // console.log(111);
    }
    eachTabBar(){
        this.ali=$("#footer>ul li");

        this.ali.each(this.eachTabBarCb.bind(this));
    }
    eachTabBarCb(index){
        this.ali.eq(index).on('tap',this.handleTabBarTap.bind(this,index));

        // switch(router.path){
        //     case "/":
        //         this.activeIndex=0;
        //         break;
        //     case "/list":
        //         this.activeIndex=1;
        //         break;                
        //     case "/mine":
        //         this.activeIndex=2;
        //         break;                
        // }

        this.ali.eq(this.activeIndex).addClass("active").siblings().removeClass("active");
    }
    handleTabBarTap(index){
        // console.log(index);
        switch(index){
            case 0:
                router.push("/");
                this.activeIndex=0;
                break;
            case 1:
                router.push("/list");
                this.activeIndex=1;
                break;                
            case 2:
                router.push("/mine");
                this.activeIndex=2;
                break;                
        }
        this.ali.eq(this.activeIndex).addClass("active").siblings().removeClass("active");
    }
}

export default new Tabbar;