/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface LoremIpsumProps {
	words?: number;
}

export interface LoremIpsumState {

}

export class LoremIpsum extends React.Component<LoremIpsumProps, LoremIpsumState> {

	public constructor(props: LoremIpsumProps) {

		super(props);

		this.words = this.words.bind(this);

	}

	private words(): string[] {
		return [
			"lorem",
			"ipsum",
			"dolor",
			"sit",
			"amet",
			"consectetur",
			"adipiscing",
			"elit",
			"aenean",
			"nisl",
			"felis",
			"mattis",
			"non",
			"luctus",
			"non",
			"tempor",
			"vitae",
			"ex",
			"fusce",
			"id",
			"mollis",
			"felis",
			"sed",
			"semper",
			"tellus",
			"nunc",
			"tincidunt",
			"congue",
			"est",
			"sit",
			"amet",
			"maximus",
			"urna",
			"porttitor",
			"in",
			"maecenas",
			"nec",
			"lobortis",
			"dui",
			"fusce",
			"id",
			"nulla",
			"aliquet",
			"pretium",
			"mauris",
			"id",
			"molestie",
			"ex",
			"aenean",
			"iaculis",
			"leo",
			"nec",
			"imperdiet",
			"aliquet",
			"nisi",
			"metus",
			"tincidunt",
			"dolor",
			"semper",
			"commodo",
			"odio",
			"neque",
			"eu",
			"purus",
			"in",
			"hendrerit",
			"sem",
			"quis",
			"lectus",
			"laoreet",
			"ut",
			"blandit",
			"sem",
			"lacinia",
			"nullam",
			"turpis",
			"mi",
			"facilisis",
			"at",
			"pulvinar",
			"eu",
			"commodo",
			"sed",
			"ex",
			"duis",
			"eu",
			"molestie",
			"augue",
			"nulla",
			"gravida",
			"ornare",
			"dolor",
			"sed",
			"vehicula",
			"mi",
			"dictum",
			"et",
			"proin",
			"condimentum",
			"egestas",
			"interdum",
			"orci",
			"varius",
			"natoque",
			"penatibus",
			"et",
			"magnis",
			"dis",
			"parturient",
			"montes",
			"nascetur",
			"ridiculus",
			"mus",
			"donec",
			"vitae",
			"malesuada",
			"mauris"
		];
	}

	public render(): React.ReactElement {

		let count: number = this.props.words ?? 100;
		if (count < 2) count = 2;
		if (count > 999) return <p>Whoa guy, that's a lot of words. Don't be greedy.</p>

		const words: string[] = this.words();
		let sentences: string[] = [];

		for (let i = 0; i < count; i ++) {

			let sentence: string[] = [];

			const sentenceLength = (Math.floor(Math.random() * 8) + 4);
			for (let j = 0; j < sentenceLength; j++) {

				if (i + j >= count) break;

				let word = words[Math.floor(Math.random() * words.length)];
				if (i === 0) {
					if (j === 0) word = "lorem";
					else if (j === 1) word = "ipsum";
				}
				if (j === 0) word = word.charAt(0).toUpperCase() + word.slice(1);
				sentence.push(word)

			}

			i += sentenceLength - 1;

			sentences.push(sentence.join(" ") + ".");

		}

		return <p>{sentences.join(" ")}</p>;
	}

}