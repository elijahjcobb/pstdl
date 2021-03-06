/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./MembersPage.css"
import {alumni, MemberCollection, members} from "../../../data/members";
import {MemberSection} from "./MemberSection";

export interface MembersPageProps {

}

export interface MembersPageState {

}

export class MembersPage extends React.Component<MembersPageProps, MembersPageState> {

	public constructor(props: MembersPageProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"MembersPage main"}>
			<h2>Members</h2>
			{members.map((memberCollection: MemberCollection) => {
				return <MemberSection collection={memberCollection}/>
			})}
			<h2>Alumni</h2>
			{alumni.map((memberCollection: MemberCollection) => {
				return <MemberSection collection={memberCollection}/>
			})}
		</div>);
	}

}
