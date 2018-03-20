<template>
  <div id="login">
    <div class="loginDiv">
      <div class="loginLeft">
        <p>OA系统</p>
      </div>
      <div class="loginRight">
        <div class="inputDiv">
          <input v-model="userName" type="text" placeholder="请输入用户名" @focus="delErrText">
          <input v-model="passWord" type="password" placeholder="请输入密码" @focus="delErrText">
          <button @click="logIn">登录</button>
          <span v-if="spanShow">{{spanShowContent}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    spanShowContent:{
      type:String,
      default:""
    },
    spanShow:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      userName:"",
      passWord:""

    }
  },
  watch:{
    userName:function(val){
      this.$emit('use-n',this.userName)
    },
    passWord:function(val){
      this.$emit('pass-w',this.passWord)
    }
  },
  methods:{
    logIn(){
      this.$emit('login-button');
    },
    delErrText(){
      this.$emit('del-err')
    }
  }
}
</script>

<style>
  #login{
    width: 100%;
    height: 100%;
    position:relative;
  }
  .loginDiv{
    width: 100%;
    height: 240px;
    background: #ffffff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .loginLeft{
    width: 35%;
    height: 100%;
    float: left;
   
  }
  .loginLeft p{
    font-size:40px;
    text-align: center;
    height: 100%;
    line-height: 240px;
  }
  .loginRight{
    width: 65%;
    height: 100%;
    float: right;
    background: #324858;
  }
  .inputDiv{
    margin-left: 80px;
  }
  .inputDiv>input,button,span{
    display: block;
  }
  .inputDiv>input,button{
    margin-top: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    border: none;
  }
  .inputDiv>input{
    width: 250px;
    background: #9AA4B0;
    color: #ffffff;
    padding-left: 10px;
  }
  .inputDiv>input::-webkit-input-placeholder{
    color: #ffffff;
  }
  .inputDiv>button{
    width: 260px;
    background: #ffffff;
    cursor: pointer;
  }
  .inputDiv>span{
    width: 260px;
    text-align: right;
    margin-top: 10px;
    color: red;
  }
</style>
