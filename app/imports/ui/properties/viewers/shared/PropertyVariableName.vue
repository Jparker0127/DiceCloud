<template lang="html">
	<div v-if="value" class="mb-3">
		<code>{{value}}</code>
	</div>
</template>

<script>
export default {
	props: {
		value: String,
	}
}
</script>

<style lang="css" scoped>
</style>
