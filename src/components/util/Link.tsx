import { HTMLAttributeAnchorTarget, PropsWithChildren } from "react";
import classNames from "classnames";

type Props = {
	to: string
	className?: string
	target?: HTMLAttributeAnchorTarget
}

export const Link = ({
	to,
	children,
	className,
	target,
}: PropsWithChildren<Props>) =>
	<a
		href={ to }
		target={ target }
		className={ classNames("transition-colors hover:text-green", className) }
	>
		{ children }
	</a>