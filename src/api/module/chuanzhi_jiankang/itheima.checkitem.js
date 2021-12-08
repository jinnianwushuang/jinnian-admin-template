/*
 * @Date           : 2020-09-12 23:23:34
 * @FilePath       : /node-quasar-fullstack/src/api/module/itheima_checkitem.js
 * @Description    :   教程资源 模块
 */



import axios from "src/api/common/axios_wapper.js"
let prefix= process.env.API_PREFIX


// 获取所有的 教程 
export const get_itheima_checkitem_findAll = (params,url="/api/itheima_checkitem/") => axios.get(url,{ params:{ ...params}})

// 创建 一个教程信息
export const  post_itheima_checkitem_create= (params,url="/api/checkitem/add.do") => axios.post(url, {...params})
// 删除 所有教程信息
export const  delete_itheima_checkitem_all= (params,url="/api/itheima_checkitem/") => axios.delete(url, {...params})

// 获取所有的 已发布 教程 
export const get_itheima_checkitem_findAllPublished = (params,url="/api/itheima_checkitem/published") => axios.get(url,{ params:{ ...params}})



// 通过id 获取单个 教程信息
export const get_itheima_checkitem_by_id = (params,url="/api/itheima_checkitem/") => axios.get(url+params.id, { params})

// 通过id 更新单个 教程信息
export const put_itheima_checkitem_by_id = (params,url="/api/itheima_checkitem/") => axios.put(url+params.id,  params)

// 通过id  删除单个 教程信息
export const delete_itheima_checkitem_by_id = (params,url="/api/itheima_checkitem/") => axios.delete(url+params.id, { params})