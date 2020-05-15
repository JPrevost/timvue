<template>
	<div class="container mt-5">
		<div class="row">
			<AppHeader />
		</div>
		<div class="row">
			<Search
				v-on:setterm="setterm"
				v-on:setrecords="setrecords"
				v-on:setaggregations="setaggregations"
			/>
		</div>
		<div class="row">
			<Hint />
		</div>
		<div class="row">
			<Facets :aggregations="aggregations" />
			<RecordList :records="records" />
		</div>
		<div class="row">
			<Pagination />
		</div>
	</div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Facets from "./components/Facets.vue";
import Hint from "./components/Hint.vue";
import Pagination from "./components/Pagination.vue";
import RecordList from "./components/RecordList.vue";
import Search from "./components/Search.vue";

export default {
	name: "App",
	components: {
		AppHeader,
		Facets,
		Hint,
		Pagination,
		RecordList,
		Search,
	},
	data: function() {
		return {
			term: null,
			records: null,
			aggregations: null,
		};
	},
	methods: {
		setterm: function(term) {
			this.term = term;
		},
		setrecords: function(records) {
			this.records = records;
		},
		setaggregations: function(aggregations) {
			this.aggregations = aggregations;
		},
	},
	props: [],
};
</script>

<style></style>
