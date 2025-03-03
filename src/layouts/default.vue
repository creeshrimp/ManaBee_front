<template>
    <!-- 導覽列 -->
    <v-app-bar color="primary" :height="60" :rounded="0" :tile="false" density="default" scroll-behavior="hide">
        <template #prepend>
            <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" variant="text" @click.stop="drawer = !drawer" />
            <v-app-bar-title>
                <v-icon>mdi-bee</v-icon>
                <span>MANABEE</span>
            </v-app-bar-title>
        </template>
        <v-spacer />
        <template v-if="$vuetify.display.mdAndUp">
            <v-btn prepend-icon="mdi-message-text" variant="plain" to="/chatroom" rounded="0" class="h-100">聊天室</v-btn>
        </template>

        <!-- 登入/註冊 -->
        <template v-if="!user.isLoggedIn">
            <v-btn variant="flat" color="success" to="/login">登入</v-btn>
            <v-btn variant="outlined" color="white" class="ml-2" to="/register">註冊</v-btn>
        </template>
        <!-- 登出 -->
        <!-- <template v-else>
            <v-btn variant="flat" color="success" rounded="0" class="h-100" @click="logout">登出</v-btn>
        </template> -->
        <v-btn icon="mdi-dots-vertical" variant="text" />
    </v-app-bar>

    <!-- 手機側邊攔 -->
    <v-navigation-drawer v-model="drawer" location="start" mobile temporary>
        <template #prepend>
            <v-list-item lines="two" :prepend-avatar="user.avatar" :title="user.username" />
        </template>

        <v-divider />

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="首頁" to="/" />
            <v-list-item prepend-icon="mdi-message-text" title="聊天室" to="/chatroom/chat" />
        </v-list>
    </v-navigation-drawer>

    <v-main>
        <router-view></router-view>
    </v-main>

    <!-- fab -->
    <v-fab
        :absolute="false"
        :app="true"
        color="primary"
        :location="'right bottom'"
        size="large"
        icon="mdi-message-text"
        variant="flat"
        to="/chatroom"
    ></v-fab>

    <v-footer color="deep-purple-lighten-5" :app="true"> footer </v-footer>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useAxios } from '@/composables/axios'
import { useRouter } from 'vue-router'

const user = useUserStore()
const { apiAuth } = useAxios()
const router = useRouter()

// 登出
async function logout() {
    try {
        await apiAuth.delete('/user/logout')
    } catch (error) {
        console.log(error)
    }

    user.logout()
    alert('登出成功')
    router.push('/')
}

// 側邊欄1
const drawer = ref(false)

// show
const chatLinkShow = ref(false)
</script>
