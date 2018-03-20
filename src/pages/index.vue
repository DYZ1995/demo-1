<template>
  <div id="index">
  	<div class="indexLeft">
  		<div class="inforCard">
  			<img class="photo" src="../assets/images/photo.jpg" alt="">
  			<p>minguo.song@agrant.cn</p>
  			<p>Ang/上海办公室/销售</p>
  			<p class="inforMenu">
  			<img style="margin-right:20px;" src="../assets/images/icon_home.png" alt="" @click="backHome">|<img style="margin-right:20px;margin-left:20px;" src="../assets/images/person.jpg" alt="">|<img @click="exitBtn" style="margin-left:20px;" src="../assets/images/icon-close.jpg" alt=""></p>
  		</div>
  	</div>
  	<div class="indexRight">
  		<router-view></router-view>
  	</div>
  	
  </div>
</template>

<script>


export default {
  data(){
    return{
    

    }
  },
  methods:{
    backHome(){
    	this.$router.push("/")
    },
    exitBtn(){
    	this.$emit("exit-btn")
    }
    
  }
}
</script>

<style>
	#index{
	    width: 100%;
	    height: auto;
	    padding-top: 50px;
	    
	}
	.indexLeft{
		width: 250px;
		float: left;
		position:fixed;
	}
	.inforCard{
		width: 220px;
		height: 300px;
		background: #ffffff;
		float: right;
		border-radius: 5px;

	}
	.inforCard img.photo{
		display: block;
		width: 100px;
		border-radius: 50px;
		margin: 40px auto;
	}
	.inforCard p{
		text-align: center;
		color: gray;
	}
	.indexRight{
		width: 79%;
		height: auto;
		float: right;
		margin-right: 20px;
	}
	.inforMenu{
		margin-top: 30px;
	}
	.inforMenu img{
		display: inline-block;
		cursor: pointer;
	}
</style>
