import { shallowMount } from "@vue/test-utils";
import Search from "@/components/Search.vue";

describe("Search.vue", () => {
	it("renders a form", () => {
		const wrapper = shallowMount(Search, {});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find("#searchForm").exists()).toBe(true);
	});
});
