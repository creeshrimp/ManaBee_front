<template>
    <div class="h-100">
        <vue-advanced-chat
            height="100%"
            :current-user-id="currentUserId"
            :rooms="JSON.stringify(rooms)"
            :load-first-room="false"
            :rooms-loaded="true"
            :messages="JSON.stringify(messages)"
            :messages-loaded="messagesLoaded"
            dark-mode
            @send-message="sendMessage($event.detail[0])"
            @fetch-messages="fetchMessages($event.detail[0])"
        />
    </div>
    <!-- fab -->
    <v-fab
        v-if="!detailDrawer"
        :absolute="false"
        :app="true"
        color="secondary"
        :location="'right top'"
        size="large"
        icon="mdi-text"
        variant="text"
        class="mt-n2"
        @click="detailDrawer = true"
    ></v-fab>

    <!-- 右邊側邊攔資訊 -->
    <v-navigation-drawer v-model="detailDrawer" location="end">
        <template #prepend>
            <v-toolbar color="gray">
                <v-btn icon="mdi-arrow-right" variant="text" @click="detailDrawer = false"></v-btn>
                <span class="text-h5">交換設定</span>
            </v-toolbar>
        </template>

        <!-- 表單:詳細資訊設定 -->
        <!-- <v-form :disabled="isSubmitting" @submit.prevent="submit"> -->
        <v-card flat>
            <v-card-title> </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field variant="outlined" label="交換頻率" flat />
                    <v-text-field variant="outlined" label="交換結束日期" flat />
                </v-form>
            </v-card-text>
        </v-card>

        <v-divider />
        <template #append>
            <v-btn block color="success" class="rounded-0" flat size="x-large">開始交換</v-btn>
        </template>
        <v-list density="compact" nav>
            <!-- <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" /> -->
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { register } from 'vue-advanced-chat'
import { io } from 'socket.io-client'
import { useUserStore } from '@/stores/user'

// 註冊 vue-advanced-chat
register()

const user = useUserStore()

// 側邊欄
const detailDrawer = ref(false)

const currentUserId = ref(user.userId)
console.log('currentUserId:', currentUserId.value)

const rooms = ref([
    {
        roomId: '1',
        roomName: 'Room 1',
        avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
        users: [
            { _id: '1234', username: 'John Doe' },
            { _id: '4321', username: 'John Snow' },
        ],
    },
    {
        roomId: '2',
        roomName: 'Room 2',
        avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
        users: [
            { _id: '1234', username: 'John Doe' },
            { _id: '4321', username: 'John Snow' },
        ],
    },
])

// vue adv chat變數
const messages = ref([])
const messagesLoaded = ref(false)
let currentRoomId = ref('1')

// socket
let socket = null
socket = io(import.meta.env.VITE_BACKEND_URL) // 只有進入聊天室時才連線
socket.on('receiveMessage', (message) => {
    console.log('message.roomId:', message.roomId)
    console.log('currentRoomId:', currentRoomId.value)
    if (message.roomId !== currentRoomId.value) return
    messages.value.push(message)
})

function fetchMessages(options = {}) {
    console.log('options:', options)

    // 加入特定聊天室
    // socket.emit('joinRoom', roomid字串)
    console.log('fetchMessages:socket: ', socket)

    // 切換currentRoomId
    currentRoomId.value = options.room.roomId
    // 加入當前房間
    socket.emit('joinRoom', options.room.roomId)

    // ajax 載入就訊息
    messages.value.splice(0)
    if (options.reset) {
        messages.value = addMessages(true, options.room.roomId)
    } else {
        messages.value = [...addMessages(false, options.room.roomId), ...messages.value]
        messagesLoaded.value = true
    }
    // addNewMessage()
}

const fakeRoomsMsgs = [
    {
        roomId: '1',
        messages: [
            {
                _id: 0,
                content: `room1 的開頭 ${0}`,
                senderId: '4321',
                username: 'John Doe',
                date: '13 November',
                timestamp: '10:20',
            },
        ],
    },
    {
        roomId: '2',
        messages: [
            {
                _id: 0,
                content: `room2 的開頭 ${0}`,
                senderId: '4321',
                username: 'John Doe',
                date: '13 November',
                timestamp: '10:20',
            },
        ],
    },
]

function addMessages(reset, roomId) {
    const newMessages = []
    newMessages.push(...fakeRoomsMsgs.find((room) => room.roomId === roomId).messages)
    // newMessages.push({
    //     _id: 0,
    //     content: `room ${roomId} 的開頭 ${0}`,
    //     senderId: '4321',
    //     username: 'John Doe',
    //     date: '13 November',
    //     timestamp: '10:20',
    // })
    // for (let i = 1; i < 31; i++) {
    //     newMessages.push({
    //         _id: reset ? i : messages.value.length + i,
    //         content: `${reset ? '' : 'paginated'} message ${i}`,
    //         senderId: '4321',
    //         username: 'John Doe',
    //         date: '13 November',
    //         timestamp: '10:20',
    //     })
    // }

    return newMessages
}

function sendMessage(message) {
    console.log('message:', message)
    console.log('message.value:', messages.value)

    // 同步前端畫面，用不到了
    // messages.value = [
    //     ...messages.value,
    //     {
    //         _id: messages.value.length,
    //         content: message.content,
    //         senderId: currentUserId.value,
    //         timestamp: new Date().toString().substring(16, 21),
    //         date: new Date().toDateString(),
    //     },
    // ]

    socket.emit('sendMessage', {
        roomId: message.roomId,
        // sendby: user.username,
        // text: inputMsg.value,

        _id: messages.value.length,
        content: message.content,
        senderId: currentUserId.value,
        // timestamp: new Date().toString().substring(16, 21),
        // date: new Date().toDateString(),
    })
    console.log(fakeRoomsMsgs)
}

function addNewMessage() {
    setTimeout(() => {
        messages.value = [
            ...messages.value,
            {
                _id: messages.value.length,
                content: 'NEW MESSAGE',
                senderId: '1234',
                timestamp: new Date().toString().substring(16, 21),
                date: new Date().toDateString(),
            },
        ]
    }, 2000)
}

onMounted(() => {})
// 組件銷毀時離該socket.io
onUnmounted(() => {
    socket.disconnect()
})
</script>

<style lang="scss">
body {
    font-family: 'Quicksand', sans-serif;
}

.vac-col-messages .vac-container-scroll {
    scrollbar-width: thin;
    scrollbar-color: #bbb #f0f0f0;

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f0f0f0;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #bbb;
        border-radius: 10px;

        &:hover {
            background: #999;
        }
    }
}
</style>
<route lang="json">
{
    "meta": {
        "layout": "chatroom",
        "title": "聊天室",
        "login": true
    }
}
</route>
