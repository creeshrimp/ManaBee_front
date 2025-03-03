<template>
    <v-container fluid class="d-flex flex-column h-screen pa-0 bg-blue-grey-lighten-4 position-relative">
        <v-toolbar class="flex-0-0">
            <v-toolbar-title>
                <v-btn icon>
                    <v-avatar>
                        <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                    </v-avatar>
                </v-btn>
                聊天室{{ chatroomId }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-dots-vertical"></v-btn>
        </v-toolbar>
        <!-- 訊息內容 -->
        <div class="flex-1-1 overflow-y-auto">
            <v-list v-if="messages.length > 0" lines="two">
                <template v-for="msg in messages" :key="msg.id">
                    <!-- 自己的發言 -->
                    <v-list-item v-if="msg.name === socket.id" class="d-flex justify-end w-100">
                        <!-- <v-list-item-title class="mb-1 text-h6 text-end"> 我 </v-list-item-title> -->
                        <v-list-item-subtitle class="text-subtitle-1 text-high-emphasis opacity-100">
                            <span class="opacity-50 text-subtitle-2 mr-4">{{ msg.time }}</span>
                            <span class="opacity-50 text-subtitle-2 mr-4">-</span>
                            <span>{{ msg.text }}</span>
                        </v-list-item-subtitle>
                    </v-list-item>

                    <!-- 其他人的發言 -->
                    <v-list-item v-else :prepend-avatar="msg.avatar">
                        <v-list-item-title class="mb-1 text-h6"> {{ msg.name }} </v-list-item-title>
                        <v-list-item-subtitle class="text-subtitle-1 text-high-emphasis opacity-100">
                            <span>{{ msg.text }}</span>
                            <span class="opacity-50 text-subtitle-2 ml-4">-</span>
                            <span class="opacity-50 text-subtitle-2 ml-4">{{ msg.time }}</span>
                        </v-list-item-subtitle>
                    </v-list-item>
                </template>
            </v-list>
        </div>

        <v-text-field
            v-model="inputMsg"
            bg-color="grey-lighten-1"
            class="flex-0-0 overflow-hidden"
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

    <!-- 右邊側邊攔資訊 -->
    <v-navigation-drawer location="end">
        <!-- <template #prepend>
                <v-list-item
                    lines="two"
                    prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                    subtitle="Logged in"
                    title="Jane Smith"
                />
            </template> -->

        <v-divider />
        <template #append>
            <v-btn block color="success" flat size="large">開始交換</v-btn>
        </template>
        <v-list density="compact" nav>
            <!-- <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" /> -->
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { io } from 'socket.io-client'
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router'

// use
const user = useUserStore()
const route = useRoute()

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
const inputMsg = ref('')
let socket = null

onMounted(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL) // 只有進入聊天室時才連線

    socket.on('receiveMessage', (message) => {
        messages.value.push(message)
    })
})

onUnmounted(() => {
    socket.disconnect() // 離開聊天室時關閉 WebSocket
})
function sendMessage() {
    if (inputMsg.value === '') return
    socket.emit('sendMessage', {
        name: socket.id,
        text: inputMsg.value,
        avatar: user.avatar,
    })
    inputMsg.value = ''
}

// 監聽聊天室 ID 變化，切換聊天室時重新載入訊息
const chatroomId = ref(route.params.id)
watch(
    () => route.params.id,
    (newId) => {
        chatroomId.value = newId
        //   loadMessages(newId)
    },
)
</script>
<route lang="json">
{
    "meta": {
        "layout": "chatroom",
        "title": "聊天室"
    }
}
</route>

<style></style>
