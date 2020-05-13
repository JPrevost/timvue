<template>
	<div class="container mt-5">
		<div class="row">
			<AppHeader />
		</div>
		<div class="row">
			<SearchForm />
		</div>
		<div class="row">
			<Hint />
		</div>
		<div class="row">
			<Facets />
			<RecordList />
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
import SearchForm from "./components/SearchForm.vue";

export default {
	name: "App",
	components: {
		AppHeader,
		Facets,
		Hint,
		Pagination,
		RecordList,
		SearchForm,
	},
};
</script>

<style></style>
