<template>
    <v-container class="py-4">
        <h1>編輯個人資料</h1>
        <v-card>
            <v-card-text>
                <!-- 使用者名稱 -->
                <v-text-field v-model="form.username" label="使用者名稱" outlined></v-text-field>

                <!-- 自我介紹 -->
                <v-textarea v-model="form.introduction" label="自我介紹" outlined></v-textarea>

                <!-- 想學的東西 -->
                <v-combobox v-model="form.learningSkills" label="想學的東西" multiple chips clearable outlined></v-combobox>

                <!-- 想教的東西 -->
                <v-combobox v-model="form.teachingSkills" label="想教的東西" multiple chips clearable outlined></v-combobox>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="handleUpload">
                    <template #default> 上傳 </template>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup>
import { useAxios } from '@/composables/axios'
import { reactive } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'

const { apiAuth } = useAxios()
const userStore = useUserStore()

const form = reactive({
    username: userStore.username,
    introduction: userStore.introduction,
    // 假設原本學習與教學技能格式為陣列，如：[{ name: '工程', descriptions: 'xxx' }, ...]
    learningSkills: [...userStore.learningSkills],
    teachingSkills: [...userStore.teachingSkills],
})

async function handleUpload() {
    try {
        console.log(form)
        // 呼叫後端 API 更新個人資料
        const res = await apiAuth.put('/user/profile', form, {
            headers: { Authorization: `Bearer ${userStore.token}` },
        })

        if (res.data.success) {
            // 更新成功後，同步更新 Pinia store（可根據需求調整）
            userStore.username = res.data.result.username
            userStore.introduction = res.data.result.introduction
            userStore.learningSkills = res.data.result.learningSkills
            userStore.teachingSkills = res.data.result.teachingSkills

            alert('更新成功！')
        } else {
            alert('更新失敗：' + res.data.message)
        }
    } catch (error) {
        console.error('更新個人資料錯誤：', error)
        alert('更新時發生錯誤')
    }
}
</script>

<style scoped>
/* 若需要額外的樣式調整 */
</style>
