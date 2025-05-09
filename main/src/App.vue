<template>
<div>
    <h1>这是主应用</h1>
    <router-link to="L2">L2-炉子模型</router-link>
    <router-link style="margin-left: 10px;" to="CM">CM-组态组件</router-link>
	<router-link style="margin-left: 10px;" to="ALL">L2+CM</router-link>
    
    <router-view></router-view>
</div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
import {bus} from 'wujie'

bus.$on('vue3', (data: any) => {
    console.log(data,'我是主应用')
})
</script>

<style scoped lang='less'>
</style>