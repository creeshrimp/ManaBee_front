import axios from 'axios'
import { useUserStore } from '@/stores/user'

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})

const apiAuth = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})

// ----------------------------------------------------------------
// axios interceptors 攔截器，用來再請求/回應之前加上攔截器，用來做一些預處理
// ----------------------------------------------------------------

/**
 * 把請求都帶上 jwt token
 */
apiAuth.interceptors.request.use((config) => {
    const user = useUserStore()
    config.headers.Authorization = 'Bearer ' + user.token
    return config
})

/**
 *
 * 處理 token 舊換新
 *
 * @response攔截器用法 .use([success_callback], [error_callback])
 *
 * @param {Function} success_callback 成功時(2xx) 要做的事 (res)
 * @param {Function} error_callback error時(非2xx) 要做的事 (error)
 */
apiAuth.interceptors.response.use(
    (res) => res,
    async (error) => {
        // 失敗=>且有收到回應=>處理是否舊換新
        if (error.response) {
            // 是登入過期，且請求不是舊換新 => 幫他舊換新
            if (error.response.data.message === 'userTokenExpired' && error.config.url !== '/user/refresh') {
                const user = useUserStore()
                try {
                    // 傳送舊換新請求
                    const { data } = await apiAuth.patch('/user/refresh')

                    // 更新 store 的 token
                    user.token = data.result

                    // 修改發生錯誤的請求設定，換成新的 token
                    error.config.headers.Authorization = 'Bearer ' + user.token

                    // 用新的設定重發一次原本要做的請求
                    return axios(error.config)
                } catch (error) {
                    console.log(error)
                    // 舊換新錯誤，登出
                    user.logout()
                }
            }
        }
        // 回傳原本的錯誤
        return Promise.reject(error)
    },
)

export const useAxios = () => {
    return { api, apiAuth }
}
