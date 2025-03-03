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

        <VueAdvancedChat
            height="100%"
            :messages="messages"
            :rooms="rooms"
            :current-user-id="user.username"
            @send-message="sendMessage"
        />
    </v-container>

    <v-navigation-drawer location="end">
        <v-divider />
        <template #append>
            <v-btn block color="success" flat size="large">開始交換</v-btn>
        </template>
        <v-list density="compact" nav></v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { io } from 'socket.io-client'
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router'
import VueAdvancedChat from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'

const user = useUserStore()
const route = useRoute()
const chatroomId = ref(route.params.id)
const messages = ref([])
const rooms = ref([{ roomId: chatroomId.value, roomName: `聊天室 ${chatroomId.value}` }])
let socket = null

onMounted(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL)

    socket.on('receiveMessage', (message) => {
        messages.value.push({
            _id: message.id,
            content: message.text,
            senderId: message.sendby,
            timestamp: new Date().toISOString(),
        })
    })
})

onUnmounted(() => {
    socket.disconnect()
})

function sendMessage({ message }) {
    if (!message.content.trim()) return
    socket.emit('sendMessage', {
        chatroomId: chatroomId.value,
        sendby: user.username,
        text: message.content,
    })
}

watch(
    () => route.params.id,
    (newId) => {
        chatroomId.value = newId
        rooms.value = [{ roomId: newId, roomName: `聊天室 ${newId}` }]
    },
)
</script>

<route lang="json">
{
    "meta": {
        "layout": "chatroom",
        "title": "聊天室",
        "login": true
    }
}
</route>
