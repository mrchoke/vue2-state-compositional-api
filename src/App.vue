<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> | <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Login' }" v-if="!auth.status">Login</router-link>
      <a href="#" @click="logout" v-else>Logout</a>
    </div>
    <div v-if="auth.status">Welcome: {{ auth.user.fullname }}</div>
    <router-view />
  </div>
</template>

<script>
  import { defineComponent } from '@vue/composition-api'
  import { auth, logout } from '@/state/User'

  export default defineComponent({
    name: 'App',
    setup() {
      return {
        auth,
        logout
      }
    }
  })
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
