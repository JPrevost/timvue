<template>
	<div class="col-sm-9 alert alert-primary">
		<div v-if="records == null">
			<p>No records found</p>
		</div>
		<div v-for="record in records" :key="record.id">
			<h3>
				<a v-bind:href="record.sourceLink"> {{ record.title }} </a>
			</h3>

			Contributors
			<ul>
				<li
					v-for="(person, index) in record.contributors"
					:key="index"
					class="list-unstyled"
				>
					{{ person.value }}
					({{ person.kind }})
				</li>
			</ul>

			<ul class="list-unstyled">
				<li v-if="record.format">Format: {{ record.format.join(",") }}</li>
				<li v-if="record.literaryForm">Form: {{ record.literaryForm }}</li>
				<li v-for="(imprint, index) in record.imprint" :key="index">
					Imprint: {{ imprint }}
				</li>
				<li>Source: {{ record.source }}</li>
			</ul>
			<hr />
		</div>
	</div>
</template>

<script>
export default {
	props: ["records"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
