import axios from 'axios';

//添加请求拦截器
axios.interceptors.request.use( (config)=>{
    //在发送请求之前做些什么
    // console.log(config)
    config.params = {
        ...config,
        appkey: 'cao372369564_1553742473056'
    }
    return config
}, (error)=>{
    //对请求错误做些什么
    return Promise.reject(error)
})

  

export default axios;