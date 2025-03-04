// stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore(
    'user',
    () => {
        const token = ref('')
        const username = ref('')
        const userId = ref('')
        const gender = ref('')
        // 新增欄位
        const learningSkills = ref([])
        const teachingSkills = ref([])
        const introduction = ref('')

        // 用有沒有 token 來判斷是否登入
        const isLoggedIn = computed(() => token.value.length > 0)

        // 大頭貼 (利用 API 根據帳號名產生固定的大頭貼)
        const avatar = computed(() => {
            const g = gender.value === 'male' ? 'men' : 'women'
            const n = Math.floor(Math.random() * 100)
            return `https://randomuser.me/api/portraits/${g}/${n}.jpg`
        })

        /**
         * 登入
         * @param {Object} user 登入資料 (from POST/login)
         */
        const login = (user) => {
            if (user.token) {
                token.value = user.token
            }
            username.value = user.username
            userId.value = user.userId
            gender.value = user.gender

            // 如果後端有回傳這些欄位，就同步更新
            if (user.learningSkills) learningSkills.value = user.learningSkills
            if (user.teachingSkills) teachingSkills.value = user.teachingSkills
            if (user.introduction) introduction.value = user.introduction
        }

        /**
         * 登出
         */
        const logout = () => {
            token.value = ''
            username.value = ''
            userId.value = ''
            gender.value = ''
            learningSkills.value = []
            teachingSkills.value = []
            introduction.value = ''
        }

        return {
            token,
            username,
            userId,
            gender,
            isLoggedIn,
            login,
            logout,
            avatar,
            learningSkills,
            teachingSkills,
            introduction,
        }
    },
    {
        persist: {
            key: 'manabee-user',
            pick: ['token'],
        },
    },
)
