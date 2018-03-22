<template>
	<div id="nav">
		<p>首页><slot name="first">详情页</slot><slot name="second"></slot></p>
	</div>
</template>

<style>
	#nav{
		width: 100%;
		height: 45px;
		background: #324858;
		border-radius: 8px;
		color: #ffffff;
		line-height: 45px;
		margin-bottom: 20px;
	}
	#nav p{
		padding-left: 20px;
	}
</style>