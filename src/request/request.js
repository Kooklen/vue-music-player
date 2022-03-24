import Vue from 'vue'
import axios from 'axios'

// 创建实例时设置配置的默认值
const instance = axios.create({
    baseURL: '你的接口地址',    //例如h：ttps://test-test-test.vercel.app/
    timeout: 5000,
    changeOrigin: true,  //跨域
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});
// 全局
instance.defaults.withCredentials = true;
instance.defaults.timeout = 5000;
instance.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]



//然后再修改原型链
Vue.prototype.$axios = axios


let requestingCount = 0;

const handleRequestLoading = () => {
    if (!requestingCount) startLoading()
    requestingCount++
}
const handleResponseLoading = () => {
    requestingCount--
    if (!requestingCount) stopLoading()
}


// 添加请求拦截器
axios.interceptors.request.use(
    // 在发送请求之前做些什么
    config => {

        if (store.getters.token) {
            config.headers['token'] = getToken()
        }
        if (config.method == 'post') {
            config.data = {
                ...config.data,
                _t: Date.parse(new Date()) / 1000
            }
        } else if (config.method == 'get') {
            config.params = {
                _t: Date.parse(new Date()) / 1000,
                ...config.params
            }
        }
        handleRequestLoading()
        return config
    },

    error => {
        handleResponseLoading()
        console.log(error)
        return Promise.reject(error)
    })

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    handleResponseLoading()
    store.isLoading = fasle
    return response;
}, function (error) {
    // 对响应错误做点什么
    handleResponseLoading()
    return Promise.reject(error);
});

//暴露出去
export default instance;