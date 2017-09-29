<template>
   <router-view></router-view>
</template>

<script>
import Login from './components/login.vue'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Login
  }
}
</script>

<style lang="scss">

</style>
