<template>
	<div id="dataChart">
		<nav-bar><span slot="first">数据统计</span></nav-bar>
		<div class="chartDiv">
			<div class="top">
				<p><span class="titleShow">报销统计</span><span class="timeShow"><span>2017-02-01</span> 至 <span>2017-02-28</span></span></p>
			</div>
			<div class="selectDiv">
				<div class="selectLeft">
					<div class="monthDiv">
						<span class="yearSpan">2018年</span>
						<ul>
							<li :class="{active:index == num}" v-for="item in months">{{item}}</li>
						</ul>
					</div>
				</div>
				<div class="selectRight">
					eewe
				</div>
			</div>
		</div>
	</div>
</template>




<script>
	import NavBar from './navBar'

	export default{
		components:{
			NavBar
		},
		data(){
			return{
				months:["01","02","03","04","05","06","07","08","09","10","11","12"]
			}
		}
	}
</script>

<style>
	#dataChart{
		width: 100%;
		height: auto;
	}
	.chartDiv{
		background: #ffffff;
		border-radius: 8px;
		padding: 20px;
	}
	.timeShow{
		margin-left: 20px;
		color: #C3C3C3;
	}
	.titleShow{
		color: #34495e;
    	font-weight: bold;
	}
	.top{
		border-bottom: 1px solid #ECECEC;
		height: 30px;
	}
	.selectDiv{
		width: 100%;
		overflow: hidden;
		margin-top: 20px;
	}
	.selectLeft{
		float:left;
		width: 60%;
	}
	.selectLeft ul{
		display: inline-block;
		border: 1px solid #ECECEC;
		border-right: none;
		vertical-align: bottom;
	}
	.selectLeft li{
		float: left;
    	border-right: 1px solid #ECECEC;
    	width: 30px;
    	text-align: center;
		background: #FBFBFB;
		cursor: pointer;
	}
	.yearSpan{
		display: inline-block;
		border: 1px solid #ECECEC;
		background: #FBFBFB;
		width: 80px;
		text-align: center;
	}
	.monthDiv{
		height: 30px;
	}
	.selectRight{
		float: right;
		width: 35%;
		background: pink;
	}

</style>