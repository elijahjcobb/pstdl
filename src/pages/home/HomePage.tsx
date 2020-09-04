/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./HomePage.css"

export interface HomePageProps {

}

export interface HomePageState {

}

export class HomePage extends React.Component<HomePageProps, HomePageState> {

	public constructor(props: HomePageProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"HomePage"}>
			<div className={"header"}>
				<img src={"./logo.png"} alt={"logo"} className={"logo"}/>
				<div className={"titleContainer"}>
					<span className={"title"}>Husky Works</span>
					<span className={"subtitle"}>Planetary Surface Technology Development Lab</span>
					<span className={"mtu"}>Michigan Technological University</span>
					{/*<img src={"./rocket.svg"} className={"rocket"} alt={"rocket"}/>*/}
				</div>
			</div>
			<section style={{backgroundImage: "url(\"./render1.png\")"}}>
				<h2>Lorem Ipsum Dolor</h2>
			</section>
			<section style={{backgroundImage: "url(\"./render2.png\")"}}>
				<h2>Lorem Ipsum Dolor</h2>
			</section>
			<section>
				<h2>Lorem Ipsum Dolor</h2>
			</section>
		</div>);
	}

}
