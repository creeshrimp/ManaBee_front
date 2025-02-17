<template>
    <v-app>
        <v-app-bar color="primary" :height="60" :rounded="0" :tile="false" density="default" scroll-behavior="hide">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
            <!-- prepend-icon BEE -->

            <v-toolbar-title>
                <v-icon>mdi-bee</v-icon>
                <span>MANABEE</span>
            </v-toolbar-title>
            <!-- 聊天室連結 -->
            <v-btn prepend-icon="mdi-message-text" variant="text" to="/chatroom/chat">聊天室</v-btn>
            <v-spacer />
            <template v-if="$vuetify.display.mdAndUp">
                <v-btn icon="mdi-magnify" variant="text" />
                <v-btn icon="mdi-filter" variant="text" />
            </template>
            <v-btn icon="mdi-dots-vertical" variant="text" />
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="start">
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
                <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" />
                <v-list-item prepend-icon="mdi-message-text" title="聊天室" to="/chatroom/chat" />
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>

        <v-footer color="deep-purple-lighten-5" :app="true"> footer </v-footer>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'
// 側邊欄1
const drawer = ref(null)
</script>
