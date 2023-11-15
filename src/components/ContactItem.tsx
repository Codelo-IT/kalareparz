import { isNotNull } from "utils/types/typeguards";
import React from "react";
import { Link } from "components/Link";

type Props = {
	link?: string
	icon: string
	label: string
}

export const ContactItem = ({ link, icon, label }: Props) =>
	<>
		{
			isNotNull(link) ?
				<Link className="flex items-center gap-5" to={ link }>
					<img src={ icon } alt="calendarIcon" className="h-5"/>
					<div>
						{ label }
					</div>
				</Link>
				:
				<div className="flex items-center gap-5">
					<img src={ icon } alt="calendarIcon" className="h-5"/>
					<div>
						{ label }
					</div>
				</div>

		}
	</>