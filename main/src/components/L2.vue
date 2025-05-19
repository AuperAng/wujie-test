<script setup lang="ts">

import {alive, L2_NAME, L2_URL} from "@/main";
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
// const plugins = [
// 	{ cssExcludes: ['http://localhost:5177/src/assets/main.css'] },
// ];
</script>

<template>
   <WujieVue
	   height="80vh"
	   :url="L2_URL" :name="L2_NAME"  :sync="true" :alive="alive">
   </WujieVue> <!--子应用vue3-->
</template>

<style  scoped>

</style>
