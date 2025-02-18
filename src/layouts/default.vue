<template>
    <!-- 導覽列 -->
    <v-app-bar color="primary" :height="60" :rounded="0" :tile="false" density="default" scroll-behavior="hide">
        <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" variant="text" @click.stop="drawer = !drawer" />
        <v-toolbar-title>
            <v-icon>mdi-bee</v-icon>
            <span>MANABEE</span>
        </v-toolbar-title>

        <template v-if="$vuetify.display.mdAndUp">
            <v-btn prepend-icon="mdi-message-text" variant="text" to="/chatroom/chat">聊天室</v-btn>
        </template>
        <v-spacer />
        <v-btn variant="flat" color="success" to="/login">登入</v-btn>
        <v-btn variant="outlined" color="white" class="ml-2">註冊</v-btn>
        <v-btn icon="mdi-dots-vertical" variant="text" />
    </v-app-bar>

    <!-- 手機側邊攔 -->
    <v-navigation-drawer v-model="drawer" location="start" mobile temporary>
        <template #prepend>
            <v-list-item
                lines="two"
                prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                subtitle="Logged in"
                title="Jane Smith"
            />
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

    <v-footer color="deep-purple-lighten-5" :app="true"> footer </v-footer>
</template>

<script setup>
import { ref } from 'vue'
// 側邊欄1
const drawer = ref(false)
</script>
