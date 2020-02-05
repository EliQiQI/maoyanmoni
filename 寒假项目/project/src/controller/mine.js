/*
 * @Author: your name
 * @Date: 2020-01-30 18:01:37
 * @LastEditTime : 2020-01-30 18:02:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/controller/mine.js
 */
import mine from "view/mine.ejs"
import tabbar from "../controller/tabbar"
class Mine{
    constructor(){

    }
    init(){
        this.render();
        
    }
    render(){
        var html=mine();
        $('#app').html(html);
        tabbar.init();
    }
}

export default new Mine()