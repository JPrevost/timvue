<template>
	<div class="col alert alert-success">
		<input
			type="search"
			class="field field-text b-search-input"
			name="q"
			placeholder="Enter your search"
			value=""
			v-model.lazy="term"
		/>
		<button type="submit" class="btn button-primary">
			Search
		</button>

		Hits: {{ hits }}
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			term: null,
			hits: null,
			records: null,
		};
	},
	watch: {
		term: function() {
			this.$http({
				url: "https://timdex.mit.edu/graphql",
				method: "post",
				data: {
					query: `
						query SearchStuff{
							search(searchterm: "${this.term}") {
								hits
								records {
									identifier
									sourceLink
									links {
										url
									}
									title
									contributors {
										value
										kind
									}
									source
									summary
									notes
									format
									literaryForm
									alternateTitles
									format
									edition
									imprint
									holdings {
										callnumber
										collection
										format
										location
										notes
										summary
									}
								}
								aggregations {
									contentFormat {
										key
										docCount
									}
									contentType {
										key
										docCount
									}
									languages {
										key
										docCount
									}
									source {
										key
										docCount
									}
									subjects {
										key
										docCount
									}
									contributors {
										key
										docCount
									}
								}
							}
						}
					`,
				},
			}).then((result) => {
				this.$emit("hits", result.data.data.search.hits);

				this.$emit("setterm", this.term);

				this.$emit("setrecords", result.data.data.search.records);

				this.$emit("setaggregations", result.data.data.search.aggregations);
			});
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
