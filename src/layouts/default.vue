<template>
    <!-- 導覽列 -->
    <v-app-bar color="primary" :height="60" :rounded="0" :tile="false" density="default" scroll-behavior="hide">
        <template #prepend>
            <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" class="mr-n4" variant="text" @click.stop="drawer = !drawer" />
            <v-btn variant="plain" class="text-h6" to="/">
                <v-icon class="mr-1">mdi-bee</v-icon>
                <span>MANABEE</span>
            </v-btn>
        </template>

        <v-spacer />

        <!-- 登入/註冊 -->
        <template v-if="user.isLoggedIn">
            <template v-if="$vuetify.display.mdAndUp">
                <v-btn prepend-icon="mdi-message-text" variant="plain" to="/chatroom" rounded="0" class="h-100">聊天室</v-btn>
            </template>
            <!-- 有登入能看的 -->
            <v-menu>
                <template #activator="{ props }">
                    <v-btn icon="mdi-account" variant="text" v-bind="props"></v-btn>
                </template>
                <v-list>
                    <v-list-item prepend-icon="mdi-account" title="個人資料" to="/profile"></v-list-item>
                    <v-list-item prepend-icon="mdi-logout" title="登出" @click="logout"></v-list-item>
                </v-list>
            </v-menu>
        </template>
        <template v-else>
            <!-- 給沒登入的看的 -->
            <v-btn variant="flat" color="success" to="/login">登入</v-btn>
            <v-btn variant="outlined" color="" class="ml-2" to="/register">註冊</v-btn>
        </template>
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

    <v-main class="bg-bee">
        <router-view></router-view>
    </v-main>

    <!-- fab -->
    <!-- <v-fab
        :absolute="false"
        :app="true"
        color="primary"
        :location="'right bottom'"
        size="large"
        icon="mdi-message-text"
        variant="flat"
    ></v-fab> -->

    <v-footer color="secondary-lighten-1" :app="false" class="d-flex justify-center">
        Copyright © 2025 MANABEE
        <v-img class="" max-width="80" cover src="/images/IMG_5218.png"></v-img>
    </v-footer>
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

<style>
.bg-bee {
    background: url(/images/BeeLogo.png);
    background-repeat: no-repeat;
    background-position: bottom -10% right -5%;
    /* backdrop-filter: blur(20%); */
    padding-bottom: 160px !important;
}
</style>
