import { isNotNull } from "utils/types/typeguards";
import { Link } from "components/Link";

type Props = {
	icon?: string
	name: string
	link?: string
}

export const FooterItem = ({ icon, name, link }: Props) =>
	<>
		{
			isNotNull(link) ?
				<Link className="flex items-center gap-5" to={ link }>
					{ isNotNull(icon) && <img src={ icon } alt="item-icon" className="h-5"/> }
					<div>
						{ name }
					</div>
				</Link>
				:
				<div className="flex items-center gap-5">
					{ isNotNull(icon) && <img src={ icon } alt="item-icon" className="h-5"/> }
					<div>
						{ name }
					</div>
				</div>
		}
	</>