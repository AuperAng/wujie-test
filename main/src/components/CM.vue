<script setup lang="ts">

import {alive, CM2_NAME, CM_NAME, CM_URL, CM_URL2, runTime} from "@/main";
import WujieVue from "wujie-vue3";

const beforeLoad = () => {
	console.log('beforeLoad')
}
const beforeMount = () => {
	console.log('beforeMount')
}
const afterMount = () => {
	console.log('afterMount')
}
const beforeUnmount = () => {
	console.log('beforeUnmount')
}
const afterUnmount = () => {
	console.log('afterUnmount')
}
const activated = () => {
	console.log('activated')
}
const deactivated = () => {
	console.log('deactivated')
}


</script>

<template>
	<WujieVue
		v-show="runTime"
		height="80vh" :url="CM_URL" :name="CM_NAME" :sync="true" :alive="alive"></WujieVue> <!--子应用vue3-->
	<WujieVue
		v-show="!runTime"
		height="80vh" :url="CM_URL2" :name="CM2_NAME" :sync="true" :alive="alive"></WujieVue> <!--子应用vue3-->
</template>

<style  scoped>

</style>