import React from "react";
import classNames from "classnames";

type Props = {
	link: string
	title: string
}

export const HeaderItem = ({ link, title }: Props) =>
	<a href={ link } className={ classNames(
		"text-black cursor-pointer transition hover:text-green tracking-wide",
		"text-lg xl:text-xl"
	) }>
		{ title }
	</a>