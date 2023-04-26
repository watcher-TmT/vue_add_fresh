import request from "./index";

//登录
export const loginApi = (data) => {
    return request('/users/login/', 'post', data)
}


    



