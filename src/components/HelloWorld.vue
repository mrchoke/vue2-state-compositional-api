<template>
  <div class="hello">
    <h1>Vue2 Composition API</h1>
    <p>
      <input type="text" v-model="SystemNoti.msg" />
    </p>
    <p>
      <button @click="SystemNoti.noti()">Show Notification</button>
    </p>
  </div>
</template>

<script>
  import SystemNoti from '@/state/SystemNoti'
  import { defineComponent } from '@vue/composition-api'

  export default defineComponent({
    name: 'HelloWorld',
    setup() {
      return {
        SystemNoti
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
