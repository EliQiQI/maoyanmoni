/*
 * @Author: your name
 * @Date: 2020-01-29 21:31:43
 * @LastEditTime : 2020-02-04 11:37:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings home
 * @FilePath: /project/src/controller/home.js
 */
import home from "view/home.ejs"
import "styles/home.scss";
import tabbar from "../controller/tabbar"
import {homeApi} from "api/home.js"
class Home{
    constructor(){
        // console.log(a);
    }
    init(){
        this.render();
        
    }
    async render(){
        // homeApi().then((data)=>{
        //     console.log(data);
        // })
        var data=await homeApi();
        var movies=data.movieList;
        console.log(movies);
        var html=home({data:movies});
        $('#app').html(html);
        tabbar.init();
    }
}

export default new Home()