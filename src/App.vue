<template>
  <div id="app">
    <div class="login" v-if="!isLogin">
     <login-page :span-show="spanShow"   :span-show-content="spanShowContent" @user-n="userName" @pass-w="passWord" @login-button="logIn" 
     @del-err="delErrText"></login-page>
    </div>
    <div class="index" v-if="isLogin">
      <index-page @exit-btn="exitBtn">{{spanShowContent}}</index-page>
    </div>
    <my-dialog :is-show="exitDialog" @on-close="closeExitDialog()" @yes-btn="exitSystem">
      确认退出吗？
  </my-dialog>
  </div>
</template>

<script>
import LoginPage from "./pages/login"
import IndexPage from "./pages/index"
import MyDialog from './components/dialog'
export default {
  components:{
    LoginPage,
    IndexPage,
    MyDialog
  },
  data(){
    return{
      isLogin:false,
      spanShow:false,
      spanShowContent:"",
      username:"",
      password:"",
      exitDialog:false
     
    }
  },
  methods:{
    userName(data){
      this.username=data
    },
    passWord(data){
      this.password=data
    },
    logIn(){

      if(this.username==""||this.password==""){
        this.spanShowContent="用户名或密码不能为空！";
        this.spanShow=true;
      }else{
        var password=this.password;
        var username=this.username;   
        this.$http({
          method:'POST',
          url:'https://www.easy-mock.com/mock/5a0d41c885e6ba3feeeb1617/example/login?password='+password+'&username='+username
        }).then(function(res) {
           console.log(res)
          if(res.body.data.status.loginCode==-1){
            this.spanShowContent="用户名或密码错误！";
            this.spanShow=true;
          }else{
            this.isLogin=true
          }
        },function(err){
          alert(2)
          console.log(err)
        })
      }
    },
    delErrText(){
        this.spanShow=false
        this.spanShowContent=""
    },
    closeExitDialog(){
    this.exitDialog=false
    },
    exitBtn(){
        this.exitDialog=true
    },
    exitSystem(){
      this.exitDialog=false;
      this.$router.push("/");
      this.isLogin=false;
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
