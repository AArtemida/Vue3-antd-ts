<!--
 * @Description:
 * @Author: hy
 * @Date: 2022-05-19 16:45:43
 * @LastEditors: hy
 * @LastEditTime: 2022-06-07 16:43:01
-->
<template>
  <div class="login-content">
    <div class="login-form">
      <h2 class="login-form__title">管理系统</h2>
      <el-form
        ref="loginFormRef"
        label-width="0"
        :model="loginForm"
        :rules="rules"
        @keypress.enter="submitForm(loginFormRef)"
      >
        <el-form-item label="" prop="username">
          <el-input size="large" v-model="loginForm.username" placeholder="用户名"/>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            size="large"
            type="password"
            v-model="loginForm.password"
            show-password
            placeholder="密码"
          />
        </el-form-item>
        <el-form-item label="">
          <el-button
            type="primary"
            class="login-btn"
            :loading="loading"
            @click="submitForm(loginFormRef)"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { login } from '@/api/user'

const loading = ref(false)
const loginForm = reactive({
  username: '',
  password: '',
})

const loginFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
  ],
})
// 提交登录
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  loading.value = true
  await formEl.validate((valid: boolean, fields) => {
    loading.value = false
    if (valid) {
      // setTimeout(() => {
      const userInfo = {
        ...loginForm,
      }
      //   console.log(userInfo)
      //   router.push({ name: 'index' })
      // }, 300)
      handleLogin(userInfo)
    } else {
      console.log('error submit!', fields)
    }
  })
}

// 调用登录
async function handleLogin(form: any) {
  login().then((res: any) => {
    console.log(res)
  })
}

// 清空
function clear() {
  localStorage.clear()
  sessionStorage.clear()
}
clear()
</script>

<style lang="scss" scoped>
.login-content {
  background-color: var(--color-primary);
  height: 100vh;
  width: 100vw;
}
.login-form {
  min-width: 400px;
  width: 28vw;
  max-width: 480px;
  text-align: center;
  padding: 30px 45px 0 45px;
  box-sizing: border-box;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  :deep(.el-input__wrapper) {
    border-radius: 5px;
  }
  :deep(.el-input__inner),
  :deep(.login-btn) {
    width: 100%;
    border-radius: 5px;
    height: 46px;
  }
  :deep(.login-btn) {
    margin-top: 20px;
    font-size: 15px;
  }
  .el-form-item {
    margin-bottom: 40px;
  }
  &__title {
    margin-bottom: 30px;
  }
}
</style>