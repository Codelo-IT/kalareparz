import { PropsWithChildren } from "react";
import classNames from "classnames";

type Props = {
	to: string
	className?: string
}

export const Link = ({
	to,
	children,
	className,
}: PropsWithChildren<Props>) =>
	<a href={ to } className={ classNames("transition-colors hover:text-green", className) }>
		{ children }
	</a>