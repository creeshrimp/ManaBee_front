<template>
    <div>聊天室</div>
</template>
<script setup>
// 預設跳到第一筆聊天室
import { useRouter } from 'vue-router'
const router = useRouter()
router.push('/chatroom/1')
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
