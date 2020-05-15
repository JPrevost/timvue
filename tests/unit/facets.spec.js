import { shallowMount } from "@vue/test-utils";
import Facets from "@/components/Facets.vue";

describe("Facets.vue", () => {
	it("displays facets if provided", () => {
		const aggregations = {
			contentFormat: [],
			contentType: [{ key: "text", docCount: 2 }],
			languages: [{ key: "english", docCount: 2 }],
			source: [{ key: "mit aleph", docCount: 2 }],
			subjects: [
				{ key: "computer flight games.", docCount: 1 },
				{ key: "computer games congresses.", docCount: 1 },
				{ key: "human-computer interaction congresses.", docCount: 1 },
				{ key: "kerbal (game)", docCount: 1 },
				{ key: "space flight computer simulation.", docCount: 1 },
				{ key: "video games.", docCount: 1 },
			],
			contributors: [
				{ key: "allan, alasdair, author.", docCount: 1 },
				{ key: "buttfield-addison, paris, author.", docCount: 1 },
				{ key: "fang, xiaowen, editor.", docCount: 1 },
				{ key: "fenwick, paul (science educator), author.", docCount: 1 },
				{ key: "hci-games (conference) orlando, fla.) (2019 :", docCount: 1 },
				{
					key:
						"international conference on human-computer interaction orlando, fla.) 2019 :",
					docCount: 1,
				},
				{ key: "manning, jon, author.", docCount: 1 },
				{ key: "nugent, tim, author.", docCount: 1 },
			],
		};
		const wrapper = shallowMount(Facets, {
			propsData: { aggregations },
		});
		expect(wrapper.text()).toMatch("subjects");
		expect(wrapper.text()).toMatch("mit aleph (2)");
		expect(wrapper.text()).toMatch("kerbal (game) (1)");
	});
});
