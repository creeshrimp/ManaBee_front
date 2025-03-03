<template>
    <v-app>
        <router-view :key="$route.fullPath" />
    </v-app>
</template>

<script setup>
//
import { useRouter } from 'vue-router'

const router = useRouter()
console.log('📌 Router Routes:', router.getRoutes())
</script>
