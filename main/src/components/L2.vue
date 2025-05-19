<script setup lang="ts">

import {alive, L2_NAME, L2_URL} from "@/main";
import WujieVue from "wujie-vue3";
import {removeL2MainCss} from "@/utils/utils";
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
const activated = (appWindow:Window) => {
  console.log('activated')
	removeL2MainCss(appWindow)
}
const deactivated = () => {
  console.log('deactivated')
}
</script>

<template>
	<WujieVue
	    height="80vh"
	    :url="L2_URL" :name="L2_NAME"  :sync="true" :alive="alive" :activated="activated">
	</WujieVue> <!--子应用vue3-->
</template>

<style  scoped>

</style>
