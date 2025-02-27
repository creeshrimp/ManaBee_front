import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// [暫時先註解]
// import UserRole from '@/enums/UserRole'

export const useUserStore = defineStore(
    'user',
    () => {
        const token = ref('')
        const username = ref('')
        // const role = ref(UserRole.USER)

        // 用有沒有token來判斷是否登入
        const isLoggedIn = computed(() => {
            return token.value.length > 0
        })

        // [暫時先註解]
        // 是不是管理員
        // const isAdmin = computed(() => {
        //     return role.value === UserRole.ADMIN
        // })

        // [暫時先註解]
        // 大頭貼 (利用API根據帳號名產生固定的大頭貼)
        // const avatar = computed(() => {
        //     return `https://api.multiavatar.com/${username.value}.png`
        // })

        /**
         *  登入
         *  @param {Object} data 登入資料(from backend response)
         */
        const login = (data) => {
            if (data.token) {
                token.value = data.token
            }
            username.value = data.username

            // [暫時先註解]
            // role.value = data.role
        }

        /**
         *  登出
         */

        const logout = () => {
            token.value = ''
            username.value = ''

            // [暫時先註解]
            // role.value = UserRole.USER
        }

        return { token, username, isLoggedIn, login, logout }
    },
    {
        persist: {
            key: 'manabee-user',
            pick: ['token'],
        },
    },
)
