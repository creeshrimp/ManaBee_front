<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">註冊</h1>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <v-form :disabled="isSubmitting" @submit.prevent="submit">
                    <v-text-field
                        v-model="username.value.value"
                        :error-messages="username.errorMessage.value"
                        :label="'帳號'"
                        minlength="4"
                        maxlength="20"
                        counter
                    />
                    <v-text-field
                        v-model="password.value.value"
                        type="password"
                        :error-messages="password.errorMessage.value"
                        :label="'密碼'"
                        minlength="4"
                        maxlength="20"
                        counter
                    />
                    <v-text-field
                        v-model="passwordConfirm.value.value"
                        type="password"
                        :error-messages="passwordConfirm.errorMessage.value"
                        label="密碼確認"
                        minlength="4"
                        maxlength="20"
                        counter
                    >
                    </v-text-field>
                    <!-- 性別 -->
                    <v-select
                        v-model="gender.value.value"
                        :items="genderOptions"
                        item-title="label"
                        item-value="value"
                        :error-messages="gender.errorMessage.value"
                        label="性別"
                        variant="outlined"
                    ></v-select>
                    <!-- 暱稱 -->
                    <v-text-field
                        v-model="nickname.value.value"
                        :error-messages="nickname.errorMessage.value"
                        label="暱稱"
                        maxlength="10"
                    >
                    </v-text-field>
                    <div class="text-center">
                        <v-btn :loading="isSubmitting" type="submit" color="primary">送出</v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import validator from 'validator'
import { useAxios } from '@/composables/axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const { api } = useAxios()
const router = useRouter()
const user = useUserStore()

const schema = yup.object({
    username: yup
        .string()
        .required('帳號必填')
        .min(4, '帳號過短')
        .max(20, '帳號過長')
        .test('isAlphanumeric', '請輸入英數字', (value) => validator.isAlphanumeric(value)),
    // prettier-ignore
    password: yup
        .string()
        .required('密碼必填')
        .min(4, '密碼過短')
        .max(20, '密碼過長'),
    // prettier-ignore
    passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '密碼不一致'),

    // 暱稱
    // prettier-ignore
    nickname: yup
        .string()
        .max(10, '暱稱過長'),

    // 性別
    // prettier-ignore
    gender: yup
        .string()
        .required('性別必填'),
})

// 建立表單
const { handleSubmit, isSubmitting } = useForm({
    validationSchema: schema,
})

// 建立欄位
const username = useField('username')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')
const gender = useField('gender')
const nickname = useField('nickname')

const submit = handleSubmit(async (values) => {
    try {
        const { data } = await api.post('/user', {
            username: values.username,
            password: values.password,
            nickname: values.nickname,
            gender: values.gender,
        })

        user.login(data.result)
        console.log('註冊成功:', data.result)
        // createSnackbar({
        //     text: '登入成功',
        //     snackbarProps: {
        //         color: 'success',
        //     },
        // })

        // 註冊成功導向登入
        router.push('/login')
    } catch (error) {
        console.log(error)
        // createSnackbar({
        //     text: error?.response?.data?.message || '未知錯誤',
        //     snackbarProps: {
        //         color: 'error',
        //     },
        // })
    }
})

// 變數
const genderOptions = [
    { label: '男', value: 'male' },
    { label: '女', value: 'female' },
    { label: '我是一隻蜜蜂', value: false },
]
</script>
