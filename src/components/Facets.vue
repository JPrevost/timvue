<template>
	<div class="col-sm-3 alert alert-info">
		<div v-for="(aggregation, key) in aggregations" :key="key">
			<span style="font-weight: bold"> {{ key }}</span>

			<ul class="list-unstyled">
				<li v-for="(facet, findex) in aggregation" :key="findex">
					{{ facet.key }} ({{ facet.docCount }})
				</li>
			</ul>

			<hr />
		</div>
	</div>
</template>

<script>
export default {
	props: ["aggregations"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
