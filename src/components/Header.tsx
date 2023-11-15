import React, { useEffect, useState } from "react";
import { Logo } from "components/Logo";
import classNames from "classnames";

export const Header = () => {
	const [ scrollPosition, setScrollPosition ] = useState<number>(0);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrollPosition(window.scrollY);
		})
	}, []);

	return (
		<header className={
			classNames(
				"w-screen fixed flex py-10 items-center z-50 justify-center text-xl transition duration-200",
				{"bg-white shadow-md": scrollPosition != 0}
			)
		}>
			<Logo className="absolute top-8 left-6 h-[150px]"/>
			<div className="relative flex flex-col justify-center items-center gap-5">
				<div className="flex items-center gap-20">
					<a href="/#onas" className="cursor-pointer transition hover:text-green tracking-wide">
						O nas
					</a>
					<a href="/#wystawcy" className="cursor-pointer transition hover:text-green tracking-wide">
						Wystawcy
					</a>
					<a href="/#kontakt" className="cursor-pointer transition hover:text-green tracking-wide">
						Kontakt
					</a>
				</div>
			</div>
		</header>
	);
}