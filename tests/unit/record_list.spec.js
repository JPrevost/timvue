import { shallowMount } from "@vue/test-utils";
import RecordList from "@/components/RecordList.vue";

describe("RecordList.vue", () => {
	it("Shows no results message", () => {
		const wrapper = shallowMount(RecordList, {});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.text()).toMatch("No records found");
	});

	it("Shows titles", () => {
		const records = [
			{
				identifier: "002544293",
				sourceLink: "https://library.mit.edu/item/002544293",
				links: [
					{
						url:
							"https://library.mit.edu/F/?func=service-sfx&amp;doc_number=002544293&amp;line_number=0000&amp;service_type=RECORD",
					},
				],
				title:
					"The Kerbal player's guide : the easiest way to launch a space program /",
				contributors: [
					{ value: "Manning, Jon, author.", kind: "author" },
					{ value: "Nugent, Tim, author.", kind: "contributor" },
					{
						value: "Fenwick, Paul (Science educator), author.",
						kind: "contributor",
					},
					{ value: "Allan, Alasdair, author.", kind: "contributor" },
					{ value: "Buttfield-Addison, Paris, author.", kind: "contributor" },
				],
				source: "MIT Aleph",
				summary: null,
				notes: [
					"Jon Manning, Tim Nugent, Paul Fenwick, Alasdair Allan, Paris Buttfield-Addison.",
					"Includes index.",
					"Online resource; title from PDF title page (EBSCO, viewed November 30, 2016).",
				],
				format: null,
				literaryForm: "nonfiction",
				alternateTitles: ["Easiest way to launch a space program"],
				edition: "First edition.",
				imprint: ["Sebastopol, CA : O'Reilly Media, 2016.", "©2017"],
				holdings: null,
			},
			{
				identifier: "002815940",
				sourceLink: "https://library.mit.edu/item/002815940",
				links: [
					{
						url:
							"https://library.mit.edu/F/?func=service-sfx&amp;doc_number=002815940&amp;line_number=0000&amp;service_type=RECORD",
					},
				],
				title:
					"HCI in games : first international conference, HCI-Games 2019, held as part of the 21st HCI International Conference, HCII 2019, Orlando, FL, USA, July 26-31, 2019 : proceedings /",
				contributors: [
					{
						value: "HCI-Games (Conference) Orlando, Fla.) (2019 :",
						kind: "author",
					},
					{ value: "Fang, Xiaowen, editor.", kind: "contributor" },
					{
						value:
							"International Conference on Human-Computer Interaction Orlando, Fla.) 2019 :",
						kind: "contributor",
					},
				],
				source: "MIT Aleph",
				summary: [
					"This book constitutes the refereed proceedings of the First International Conference on HCI in Games, HCI-Games 2019, held in July 2019 as part of HCI International 2019 in Orlando, FL, USA. HCII 2019 received a total of 5029 submissions, of which 1275 papers and 209 posters were accepted for publication after a careful reviewing process. The 34 papers presented in this volume are organized in topical sections named: Game Design; Gaming Experience; Serious Games; and Gamification. --",
				],
				notes: ["Xiaowen Fang (ed.)."],
				format: null,
				literaryForm: "nonfiction",
				alternateTitles: [
					"Human-computer interaction in games",
					"HCI-Games 2019",
				],
				edition: null,
				imprint: ["Cham, Switzerland : Springer, [2019]"],
				holdings: null,
			},
		];
		const wrapper = shallowMount(RecordList, {
			propsData: { records },
		});
		expect(wrapper.text()).toMatch(records[0].title);
		expect(wrapper.text()).toMatch(records[1].title);
	});
});
