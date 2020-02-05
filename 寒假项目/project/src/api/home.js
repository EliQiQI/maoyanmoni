/*
 * @Author: your name
 * @Date: 2020-02-03 18:22:03
 * @LastEditTime : 2020-02-04 11:19:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/api/home.js
 */
import axios from "utils/request.js";

//http://m.maoyan.com/ajax/movieOnInfoList?token=xXT2ON_VTBehgCLlNIgbA5l-xA8AAAAA4AkAADlBP8tpd5z4YvQHEPq8wp_UOG69o2-UKuYEgWaRrs6IaXyVB7-a0Fg5WI6ikmhkkw&optimus_uuid=E2F65D80428D11EABD6F0FC2CAD2527C7796EFC1D3AC44BC9F8E198C4768ADEB&optimus_risk_level=71&optimus_code=10

export const homeApi=()=>axios({
    method:"get",
    url:"/ajax/movieOnInfoList?token=xXT2ON_VTBehgCLlNIgbA5l-xA8AAAAA4AkAADlBP8tpd5z4YvQHEPq8wp_UOG69o2-UKuYEgWaRrs6IaXyVB7-a0Fg5WI6ikmhkkw&optimus_uuid=E2F65D80428D11EABD6F0FC2CAD2527C7796EFC1D3AC44BC9F8E198C4768ADEB&optimus_risk_level=71&optimus_code=10",

})