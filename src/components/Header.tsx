import React, { useEffect, useState } from "react";
import { Logo } from "components/Logo";
import classNames from "classnames";
import burgerIcon from "assets/hamburger.svg";

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
				"w-screen fixed flex items-center z-50 text-xl transition duration-200",
				"justify-end md:justify-center",
				"px-10 md:px-0 py-5 md:py-10",
				{ "bg-white shadow-md": scrollPosition != 0 },
			)
		}>
			<Logo className="absolute top-4 left-5 h-20"/>
			<div className="relative flex justify-center items-center gap-5">
				<div className={ classNames(
					"items-center",
					"hidden md:flex",
					"md:gap-10 xl:gap-20"
				) }>
					<a href="/#onas" className="cursor-pointer transition hover:text-green tracking-wide">
						O nas
					</a>
					<a href="/#wystawcy" className="cursor-pointer transition hover:text-green tracking-wide">
						Wystawcy
					</a>
					<a href="/#dlaczego-my" className="cursor-pointer transition hover:text-green tracking-wide">
						Dlaczego my
					</a>
					<a href="/#kontakt" className="cursor-pointer transition hover:text-green tracking-wide">
						Kontakt
					</a>
				</div>
				<img
					src={ burgerIcon }
					alt="="
					className="block md:hidden h-5"
				/>
			</div>
		</header>
	);
}