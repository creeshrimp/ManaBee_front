/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import { useAxios } from '@/composables/axios'
import { useUserStore } from '@/stores/user'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: setupLayouts(routes),
})

console.log(routes)

// beforeEach
// 每個頁面都要取得使用者資料，如果取不了代表沒登入
router.beforeEach(async (to, from, next) => {
    const { apiAuth } = useAxios()
    const user = useUserStore()

    if (from === START_LOCATION && user.isLoggedIn) {
        try {
            console.log('beforeEach!!!!!!!!!!!!!!')
            const { data } = await apiAuth.get('/user/profile')
            user.login(data.result)
        } catch (error) {
            console.log(error)
            user.logout()
        }
    }

    // 重新導向
    if (user.isLoggedIn && ['/login', '/register'].includes(to.path)) {
        next('/')
    } else if (to.meta.login && !user.isLoggedIn) {
        next('/login')
    } else if (to.meta.admin && !user.isAdmin) {
        next('/')
    } else {
        next()
    }
})

// afterEach
router.afterEach((to) => {
    // from https://github.com/intlify/vue-i18n/discussions/613
    // 就這樣就可以了 by 宇翔
    // console.log(to.meta.title)
    document.title = to.meta.title + ' | MANABEE'
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
    if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
        if (!localStorage.getItem('vuetify:dynamic-reload')) {
            console.log('Reloading page to fix dynamic import error')
            localStorage.setItem('vuetify:dynamic-reload', 'true')
            location.assign(to.fullPath)
        } else {
            console.error('Dynamic import error, reloading page did not fix it', err)
        }
    } else {
        console.error(err)
    }
})

router.isReady().then(() => {
    localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
