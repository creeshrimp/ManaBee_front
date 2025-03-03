<template>
    <v-navigation-drawer v-model="drawer1">
        <!-- 回首頁 -->
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
    </v-navigation-drawer>

    <v-main>
        <router-view></router-view>
    </v-main>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
// 側邊欄1
const drawer1 = ref(null)
// 對話列表
const chatlist = ref([
    {
        _id: 1,
        avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
        partner: '夏日殘雪',
    },
    {
        _id: 2,
        avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
        partner: '冬日暖陽',
    },
    {
        _id: 3,
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        partner: '王小美',
    },
])

// 側邊欄2
</script>
