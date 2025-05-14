<template>
	<div>
		<div class="title">
			<h1></h1>
			<button @click="handleChangeL2Value">修改L2表格数据</button>
			<button @click="handleResetCMConfig">重置CM配置信息</button>
			<button @click="handlePostMessage">测试postMessage通信</button>
		</div>
		<div  class="content">
			<div class="item"><CM></CM></div>
			<div class="item"><L2></L2></div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import {bus} from 'wujie'
import CM from "@/components/CM.vue";
import L2 from "@/components/L2.vue";
import {L2_NAME} from "@/main";
const handleChangeL2Value = ()=>{
	// bus.$emit('testWujie','来自主应用的信息')
	bus.$emit('changeL2Value',Math.random()*10)
}
const handleResetCMConfig = ()=>{
	// bus.$emit('testWujie','来自主应用的信息')
	bus.$emit('resetCMConfig')
}
const handlePostMessage = () =>{
	document.querySelector(`iframe[name=${L2_NAME}]`)?.contentWindow.postMessage('来自主应用的信息',window.location.origin)//可行1
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
	height: 80vh !important;
	margin: 20px !important;
	overflow: hidden !important; /* 确保子组件内容不会超出容器 */
	position: relative !important; /* 为子组件提供相对定位的参考 */
}
</style>