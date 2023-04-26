import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000
})

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    return response.data;
}, error => {
    console.log('请求错误', error);
    return Promise.reject(error);
});


export default (url, method, submitData) => {
    //负责发请求,请求地址,请求方式,提交的数据

    return instance({
        url,
        method,
        //1.如果是get请求,需要使用params来传递submitData
        //2.如果不是get请求,需要使用data来传递submitData   请求体传参
        // []设置一个动态的key,写js表达式,js表达式的执行结果当作key
        // method参数: get,Get,GET转化为小写再来判断
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}