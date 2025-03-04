import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// [暫時先註解]
// import UserRole from '@/enums/UserRole'

export const useUserStore = defineStore(
    'chatroom',
    () => {
        const token = ref('')
        const username = ref('')
        const gender = ref('')
        // const role = ref(UserRole.USER)

        // 用有沒有token來判斷是否登入
        const isLoggedIn = computed(() => {
            return token.value.length > 0
        })

        // 大頭貼 (利用API根據帳號名產生固定的大頭貼)
        const avatar = computed(() => {
            // gender字串轉換成對應網址的
            const g = gender.value === 'male' ? 'men' : 'women'
            // 產生隨機1~100的數字,作為隨機頭像的編號
            const n = Math.floor(Math.random() * 100)

            return `https://randomuser.me/api/portraits/${g}/${n}.jpg`
        })

        return {}
    },
    {
        persist: {
            key: 'manabee-user',
            pick: ['token'],
        },
    },
)
