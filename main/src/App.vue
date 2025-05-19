<template>
<div>
    <h1>这是主应用</h1>
	<div class="title">
		<h1></h1>
		<button @click="handleChangeL2Value" class="button">修改L2表格数据</button>
		<button @click="handleCMStatus" class="button">组态编辑态运行态切换</button>
		<button @click="handlePostMessage" class="button">测试postMessage通信</button>
		<button @click="handleModeChange" class="button">切换模式（当前保活：{{alive}}）</button>
		<h1></h1>
	</div>
    <router-link to="L2">L2-炉子模型</router-link>
    <router-link style="margin-left: 10px;" to="CM">CM-组态</router-link>
	<router-link style="margin-left: 10px;" to="ALL">L2 & CM</router-link>
    
    <router-view></router-view>
</div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
import WujieVue from "wujie-vue3";
const {bus} = WujieVue
import {alive, L2_NAME, runTime} from "@/main";

bus.$on('vue3', (data: any) => {
    console.log(data,'我是主应用')
})

const handleChangeL2Value = ()=>{
	// bus.$emit('testWujie','来自主应用的信息')
	bus.$emit('changeL2Value',Math.random()*10)
}
const handleCMStatus = ()=>{
	runTime.value = !runTime.value
}
const handlePostMessage = () =>{
	window.document.querySelector(`iframe[name=${L2_NAME}]`)?.contentWindow.postMessage('来自主应用的信息',window.location.origin)//可行1
}
const handleModeChange =()=>{
	alive.value = !alive.value
}
</script>

<style scoped lang='less'>
.button{
	margin-right: 10px;
	height:30px
}
</style>