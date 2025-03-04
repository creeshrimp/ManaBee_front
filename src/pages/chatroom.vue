<template>
    <div class="h-100">
        <vue-advanced-chat
            height="100%"
            :current-user-id="currentUserId"
            :rooms="JSON.stringify(rooms)"
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
import { ref, onMounted } from 'vue'
import { register } from 'vue-advanced-chat'
register()

// 側邊欄
const detailDrawer = ref(false)

const currentUserId = ref('1234')
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
        roomName: 'Room 1',
        avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
        users: [
            { _id: '1234', username: 'John Doe' },
            { _id: '4321', username: 'John Snow' },
        ],
    },
])
const messages = ref([])
const messagesLoaded = ref(false)

function fetchMessages(options = {}) {
    setTimeout(() => {
        if (options.reset) {
            messages.value = addMessages(true)
        } else {
            messages.value = [...addMessages(), ...messages.value]
            messagesLoaded.value = true
        }
        // addNewMessage()
    })
}

function addMessages(reset) {
    const newMessages = []

    for (let i = 0; i < 30; i++) {
        newMessages.push({
            _id: reset ? i : messages.value.length + i,
            content: `${reset ? '' : 'paginated'} message ${i + 1}`,
            senderId: '4321',
            username: 'John Doe',
            date: '13 November',
            timestamp: '10:20',
        })
    }

    return newMessages
}

function sendMessage(message) {
    messages.value = [
        ...messages.value,
        {
            _id: messages.value.length,
            content: message.content,
            senderId: currentUserId.value,
            timestamp: new Date().toString().substring(16, 21),
            date: new Date().toDateString(),
        },
    ]
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

onMounted(() => {
    // Initial setup or fetching data if needed
})
</script>

<style lang="scss">
body {
    font-family: 'Quicksand', sans-serif;
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
