<template>
	<div  class="content">
		<div class="item"><CM></CM></div>
		<div class="item"><L2></L2></div>
	</div>
</template>

<script setup lang='ts'>
import CM from "@/components/CM.vue";
import L2 from "@/components/L2.vue";
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