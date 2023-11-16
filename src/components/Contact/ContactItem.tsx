import { isNotNull } from "utils/types/typeguards";
import React from "react";
import { Link } from "components/util/Link";

type Props = {
	link?: string
	icon: string
	label: string
}

export const ContactItem = ({ link, icon, label }: Props) =>
	<>
		{
			isNotNull(link) ?
				<Link className="flex items-center gap-3 xl:gap-5" to={ link }>
					<img src={ icon } alt="calendarIcon" className="h-8"/>
					<div className="text-base xl:text-lg text-black font-light">
						{ label }
					</div>
				</Link>
				:
				<div className="flex items-center flex-col sm:flex-row gap-3 xl:gap-5">
					<img src={ icon } alt="calendarIcon" className="h-8"/>
					<div className="text-base text-center sm:text-left xl:text-lg font-medium">
						{ label }
					</div>
				</div>

		}
	</>