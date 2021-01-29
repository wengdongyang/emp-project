/*
 * @Author: wdy
 * @Date: 2019-05-05 17:11:55
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:06:28
 */
import message from 'antd/lib/message'
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

import type {TypeData, TypeFunRequest} from './index'

// 请求拦截器
axios.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.withCredentials = true
    return config
  },
  error => {
    return Promise.reject(error)
  },
)
// 请求完成后的拦截器
axios.interceptors.response.use(
  response => {
    console.info(response)
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          message.error({
            content: '登录失效，请重新登陆!',
          })
          break
        default:
          break
      }
    }
    return Promise.reject(error)
  },
)
/**
 * ajax通用接口
 * @param {*} opts
 */

const request: TypeFunRequest = (opts: AxiosRequestConfig): Promise<any> => {
  const httpDefaultOpts = opts
  return new Promise((resolve, reject) => {
    axios(httpDefaultOpts)
      .then((res: AxiosResponse) => {
        const data: TypeData = res.data
        resolve(data)
      })
      .catch(response => {
        reject(response)
      })
  })
}
export {axios}
export default request
