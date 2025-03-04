<template>
    <!-- search bar -->
    <v-container>
        <v-toolbar dense floating class="pa-1" color="transparent">
            <v-text-field
                :loading="loading"
                append-inner-icon="mdi-magnify"
                label="尋找志同道合的夥伴"
                variant="outlined"
                hide-details
                single-line
                color="secondary"
                @click:append-inner="search"
                v-model="keyword"
            ></v-text-field>
        </v-toolbar>
    </v-container>

    <v-container>
        <v-row>
            <v-col v-for="profile in profiles" :key="profile.userId" cols="12" sm="6" md="5" lg="4">
                <div class="honeycomb">
                    <v-card elevation="0" color="surface" variant="flat" align="center">
                        <v-card-title class="">
                            <v-avatar>
                                <!-- 若有 avatar 可自行替換 -->
                                <v-img :src="profile.avatar || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'" cover></v-img>
                            </v-avatar>
                            <div class="ml-1 mt-2">{{ profile.username }}</div>
                        </v-card-title>

                        <v-card-text class="text-center">
                            <div>
                                <h3 class="mt-2 mr-1 mb-2">想學</h3>
                                <v-chip
                                    v-for="(skill, i) in profile.learningSkills"
                                    :key="i"
                                    link
                                    variant="tonal"
                                    size="small"
                                    class="mr-1"
                                >
                                    #{{ skill.name }}
                                </v-chip>
                            </div>
                            <div class="mt-5 pb-1">
                                <h3 class="mr-1 mb-2">想教</h3>
                                <v-chip
                                    v-for="(skill, i) in profile.teachingSkills"
                                    :key="i"
                                    link
                                    variant="tonal"
                                    size="small"
                                    class="mr-1"
                                >
                                    #{{ skill.name }}
                                </v-chip>
                            </div>
                            <div class="mt-5 pb-0">
                                <h3 class="mr-1 mb-2">自我介紹</h3>
                                <p class="text-truncate">{{ profile.introduction }}</p>
                            </div>
                        </v-card-text>

                        <v-card-actions class="d-flex justify-center">
                            <v-card-actions class="d-flex justify-center">
                                <v-btn
                                    variant="flat"
                                    color="primary-lighten-1"
                                    size="large"
                                    :to="`/chatroom?userId=${profile._id}`"
                                >
                                    聯絡他
                                </v-btn>
                            </v-card-actions>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAxios } from '@/composables/axios'
const { api } = useAxios()

const profiles = ref([])
const loading = ref(false)
const keyword = ref('')

async function fetchProfiles() {
    loading.value = true
    try {
        // 假設 API 路徑為 /api/user/profiles，依需求調整
        const res = await api.get('/user/profiles')
        if (res.data.success) {
            console.log(res.data.result)
            profiles.value = res.data.result
        } else {
            console.error('取得資料失敗:', res.data.message)
        }
    } catch (error) {
        console.error('fetchProfiles error:', error)
    } finally {
        loading.value = false
    }
}

function search() {
    console.log('search:', keyword.value)
    // 可依需求加上搜尋功能，例如透過 query string 向 API 傳送關鍵字
}

onMounted(() => {
    fetchProfiles()
})
</script>

<style scoped>
.honeycomb {
    min-width: 410px;
    aspect-ratio: 1/1.15;
    position: relative;
}

.honeycomb > :nth-child(1) {
    width: 96%;
    height: 98%;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    padding-top: 1.8rem;
}

.honeycomb:before {
    content: '';
    background-color: rgb(190, 190, 187);
    width: 100%;
    height: 100%;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    position: absolute;
    top: 52%;
    left: 53.5%;
    translate: -50% -50%;
}
</style>
