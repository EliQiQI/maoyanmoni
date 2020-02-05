/*
 * @Author: your name
 * @Date: 2020-02-03 18:08:43
 * @LastEditTime : 2020-02-03 18:40:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/utils/request.js
 */
export default (options)=>{
    return new Promise((resolve,reject)=>{
        $.ajax({
            type:options.method || "GET",
            url:options.url,
            data:options.data,
            headers:options.headers || {},
            success:function(data){
                resolve(data);
            },
            error:function(err){
                reject(err)
            }
        })
    })
}

// axios({
//     method:"GET",
//     url:"",
//     data:{},
//     headers:{}
// }).then(()=>{}).
// catch(()=>{

// })