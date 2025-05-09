<script setup lang="ts">

import {L2_URL} from "@/main";
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
  :beforeLoad="beforeLoad"
  :beforeMount="beforeMount"
  :afterMount="afterMount"
  :beforeUnmount="beforeUnmount"
  :afterUnmount="afterUnmount" 
  :activated="activated"
  :deactivated="deactivated"
   :url="L2_URL" name="L2"  :sync="true" :alive="true"></WujieVue> <!--子应用vue3-->
</template>

<style  scoped>

</style>
