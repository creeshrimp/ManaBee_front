<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">登入</h1>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <v-form :disabled="isSubmitting" @submit.prevent="submit">
                    <v-text-field
                        v-model="account.value.value"
                        :error-messages="account.errorMessage.value"
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
    account: yup
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
})

// 建立表單
const { handleSubmit, isSubmitting } = useForm({
    validationSchema: schema,
})

// 建立欄位
const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
    try {
        const { data } = await api.post('/user/login', {
            account: values.account,
            password: values.password,
        })

        user.login(data.result)
        // createSnackbar({
        //     text: '登入成功',
        //     snackbarProps: {
        //         color: 'success',
        //     },
        // })

        // 登入成功回首頁
        router.push('/')
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
</script>
