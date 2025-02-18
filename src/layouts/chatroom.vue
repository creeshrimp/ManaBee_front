<template>
    <v-navigation-drawer v-model="drawer1">
        <!-- 回首頁 -->
        <v-list-item prepend-icon="mdi-home-city" title="回首頁" to="/"></v-list-item>
        <v-divider />
        <v-list-item
            link
            :prepend-avatar="`https://cdn.vuetifyjs.com/images/john.jpg`"
            append-icon="mdi-dots-vertical"
            title="夏日殘雪"
        />
        <v-list-item
            link
            :prepend-avatar="`https://randomuser.me/api/portraits/men/14.jpg`"
            append-icon="mdi-dots-vertical"
            title="冬日暖陽"
        />
        <v-list-item
            link
            :prepend-avatar="`https://randomuser.me/api/portraits/women/84.jpg`"
            append-icon="mdi-dots-vertical"
            title="王小美"
        />
        <v-divider></v-divider>
        <v-list-item :prepend-avatar="`https://randomuser.me/api/portraits/men/84.jpg`" link>
            <v-list-item-title> John </v-list-item-title>
        </v-list-item>
    </v-navigation-drawer>

    <v-main>
        <router-view></router-view>
    </v-main>
</template>

<script setup>
import { ref } from 'vue'
// 側邊欄1
const drawer1 = ref(null)
// 側邊欄2
</script>
