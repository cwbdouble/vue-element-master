import axios from 'axios'
import config from './config'
import qs from 'qs'
import Cookies from 'js-cookie'
import router from '@/router'

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: {},
      transformResponse: [function(data) {}]
    })
    //request 请求拦截器
    //1.
    instance.interceptors.request.use(config => {
      let token = Cookies.get('token')
      if (token) {
        config.headers.accessToken = token
      } else {
        router.push('/login')
      }

      if (config.method === 'post') {
        if (
          config.data.__proto__ === FormData.prototype ||
          config.url.endsWith('path') ||
          config.url.endsWith('mark') ||
          config.url.endsWith('patchs')
        ) {
        } else {
          config.data = qs.stringify(config.data)
        }
      }
      return config
    })
  })
}
