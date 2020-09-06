<template>
  <div v-if="!auth.status">
    <div>
      <label>Username:</label>
      <input type="text" v-model="username" />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" v-model="password" @keyup.enter="preLogin" />
    </div>
    <div>
      <button @click="preLogin" :disabled="!canLogin()">Sign In</button>
    </div>
  </div>
  <div v-else>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script>
  import { defineComponent, ref } from '@vue/composition-api'
  import router from '@/router'
  import SystemNoti from '@/state/SystemNoti'
  import { login, logout, auth } from '@/state/User'

  export default defineComponent({
    name: 'Login',
    setup() {
      const username = ref('')
      const password = ref('')
      const canLogin = () => {
        return username.value.length > 0 && password.value.length > 0
      }
      const preLogin = () => {
        if (!canLogin()) {
          SystemNoti.setdata({ type: 'error', msg: 'Username or Password incorrect' })
        } else {
          if (login(username.value, password.value)) {
            username.value = ''
            password.value = ''
            router.push({ name: 'Home' })
          }
        }
      }
      return {
        username,
        password,
        preLogin,
        canLogin,
        logout,
        auth
      }
    }
  })
</script>
