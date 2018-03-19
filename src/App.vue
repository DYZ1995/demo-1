<template>
  <div id="app">
    <div class="login" v-if="!isLogin">
      <login-page></login-page>
    </div>
    <div class="index" v-if="isLogin">主页</div>
  </div>
</template>

<script>
import LoginPage from "./pages/login"
export default {
  components:{
    LoginPage
  },
  data(){
    return{
      isLogin:false
    }
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
.login{
  width: 100%;
  height: 100%;
}

</style>
