import React, { useEffect, useState } from "react";
import { Logo } from "components/util/Logo";
import classNames from "classnames";
import burgerIcon from "assets/hamburger.svg";
import { HeaderItem } from "components/Header/HeaderItem";
import { routes } from "utils/constants";

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
				"h-[75px] md:h-[100px]",
				{ "bg-white shadow-md": scrollPosition !== 0 },
			)
		}>
			<Logo className={ classNames(
				"absolute top-5 left-6",
				"h-24 lg:h-36"
			) }/>
			<div className="relative flex justify-center items-center gap-5">
				<div className={ classNames(
					"items-center",
					"hidden md:flex",
					"gap-8 xl:gap-20",
				) }>
					{
						routes.map(({ name, link }, index) =>
							<HeaderItem
								key={ index }
								link={ link }
								title={ name }
							/>
						)
					}
				</div>
				<img
					src={ burgerIcon }
					alt="="
					className="block md:hidden h-5 mr-10"
				/>
			</div>
		</header>
	);
}