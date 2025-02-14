<template>
    <v-container fluid class="h-100 pa-0 bg-blue-grey-lighten-4 position-relative">
        <v-toolbar>
            <v-toolbar-title>
                <v-btn icon>
                    <v-avatar>
                        <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                    </v-avatar>
                </v-btn>
                夏天的雪
            </v-toolbar-title>
        </v-toolbar>
        <!-- 訊息內容 -->
        <v-row>
            <v-col>
                <v-list lines="two">
                    <!-- <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg">
                        <v-list-item-title class="mb-1 text-h6"> 小美 </v-list-item-title>
                        <v-list-item-subtitle class="text-subtitle-1 text-high-emphasis opacity-100"> 你好 </v-list-item-subtitle>
                    </v-list-item> -->
                    <v-list-item v-for="msg in messages" :key="msg.id" :prepend-avatar="msg.avatar">
                        <v-list-item-title class="mb-1 text-h6"> {{ msg.name }} </v-list-item-title>
                        <v-list-item-subtitle class="text-subtitle-1 text-high-emphasis opacity-100">
                            {{ msg.text }}
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
        <v-text-field
            bg-color="grey-lighten-1"
            class="overflow-hidden position-absolute bottom-0 w-100"
            density="default"
            rounded="0"
            variant="solo-filled"
            flat
            hide-details
            append-inner-icon="mdi-send"
            @click:append-inner="sendMessage"
            @keydown.enter="sendMessage"
        >
        </v-text-field>
    </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { io } from 'socket.io-client'

// 訊息陣列
// const exampleMessages = ref([
//     {
//         id: 1,
//         avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
//         name: '小美',
//         text: '嘿',
//     },
//     {
//         id: 2,
//         avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
//         name: '小美',
//         text: '今天過得好嗎?',
//     },
//     {
//         id: 3,
//         avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
//         name: '小美',
//         text: '兄弟們開操',
//     },
//     {
//         id: 4,
//         avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
//         name: '小美',
//         text: '嗚呼～   兒子！',
//     },
//     {
//         id: 5,
//         avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
//         name: '小美',
//         text: '爸爸  發飆了',
//     },
// ])
const messages = ref([])
let socket = null

onMounted(() => {
    socket = io('http://localhost:4000') // 只有進入聊天室時才連線

    // socket.on('receiveMessage', (message) => {
    //     messages.value.push(message)
    // })
})

onUnmounted(() => {
    socket.disconnect() // 離開聊天室時關閉 WebSocket
})
function sendMessage() {
    alert('send message')
}
</script>
