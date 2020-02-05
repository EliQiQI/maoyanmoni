/*
 * @Author: your name
 * @Date: 2020-01-29 21:31:57
 * @LastEditTime : 2020-01-31 11:13:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/controller/list.js
 */
import list from "view/list.ejs"
import "styles/list.scss"
import tabbar from "../controller/tabbar"
class List{
    constructor(){

    }
    init(){
        this.render();
        
    }
    render(){
        var html=list();
        $('#app').html(html);
        tabbar.init();
    }
}

export default new List()
