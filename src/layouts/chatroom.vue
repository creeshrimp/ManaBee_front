<template>
    <!-- <v-navigation-drawer v-model="drawer1">
        <v-list-item lines="two" prepend-icon="mdi-home-city" title="回首頁" to="/"></v-list-item>
        <v-divider />
        <v-list-item
            v-for="chat in chatlist"
            :key="chat._id"
            lines="two"
            link
            :prepend-avatar="chat.avatar"
            :title="chat.partner"
            :to="`/chatroom/${chat._id}`"
            append-icon="mdi-dots-vertical"
        ></v-list-item>
        <v-divider></v-divider>

        <template #append>
            <v-divider></v-divider>
            <v-list-item lines="two" :prepend-avatar="user.avatar" link>
                <v-list-item-title> {{ user.username }} </v-list-item-title>
            </v-list-item>
        </template>
    </v-navigation-drawer> -->
    <!-- 導覽列 -->
    <div id="chat-wrapper">
        <v-app-bar id="appbar" color="primary" :rounded="0" :tile="false" density="compact" scroll-behavior="hide" elevation="0">
            <template #prepend>
                <v-app-bar-nav-icon
                    v-if="$vuetify.display.smAndDown"
                    class="mr-n4"
                    variant="text"
                    @click.stop="drawer = !drawer"
                />
                <v-btn variant="plain" class="text-h6" to="/">
                    <v-icon class="mr-1">mdi-bee</v-icon>
                    <span>MANABEE</span>
                </v-btn>
            </template>
            <v-spacer />
            <!-- <template v-if="$vuetify.display.mdAndUp">
                <v-btn prepend-icon="mdi-message-text" variant="plain" to="/chatroom" rounded="0" class="h-100">聊天室</v-btn>
            </template> -->

            <!-- 登入/註冊 -->
            <template v-if="user.isLoggedIn">
                <!-- user 頭像，點擊出現v-menu，包含登出、個人資料等 -->
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
                <v-btn variant="flat" color="success" to="/login">登入</v-btn>
                <v-btn variant="outlined" color="white" class="ml-2" to="/register">註冊</v-btn>
            </template>
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

        <v-main id="main">
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
// 側邊欄1
const drawer = ref(null)
// 對話列表

// 側邊欄2
</script>

<style>
#chat-wrapper {
    height: 100dvh;
    display: flex;
    flex-flow: column;

    #appbar {
        flex-shrink: 0;
        flex-grow: 0;
    }

    #main {
        height: 100%;
        flex-shrink: 1;
    }
}
</style>
