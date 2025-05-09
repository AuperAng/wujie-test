<template>
	<div>
		<div class="title">
			<h1></h1>
			<button @click="handleChangeL2Value">修改L2表格数据</button>
			<button @click="handleResetCMConfig">重置CM配置信息</button>
		</div>
		<div  class="content">
			<WujieVue class="item" :alive="true" name="CM" :url="CM_URL" :sync="true" ></WujieVue>
			<WujieVue class="item" :alive="true" name="L2" :url="L2_URL" :sync="true" ></WujieVue>
		</div>
	</div>
</template>

<script setup lang='ts'>
import WujieVue from "wujie-vue3";
import {bus} from 'wujie'
import {CM_URL, L2_URL} from "@/main";
const handleChangeL2Value = ()=>{
	// bus.$emit('testWujie','来自主应用的信息')
	bus.$emit('changeL2Value',Math.random()*10)
}
const handleResetCMConfig = ()=>{
	// bus.$emit('testWujie','来自主应用的信息')
	bus.$emit('resetCMConfig')
}
</script>

<style scoped lang='less'>
.content{
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
}
.item{
	display: inline-block;
	border: 1px dashed #ccc;
	border-radius: 8px;
	width: 45% !important;
	height: 45% !important;
	margin: 20px !important;
	overflow: hidden !important; /* 确保子组件内容不会超出容器 */
	position: relative !important; /* 为子组件提供相对定位的参考 */
}
</style>