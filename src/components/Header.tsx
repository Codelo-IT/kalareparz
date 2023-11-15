import React from "react";
import { Logo } from "components/Logo";

export const Header = () => (
	<header className="py-10 w-screen flex items-center fixed z-50 justify-center text-xl">
		<Logo className="absolute top-4 left-5 h-20"/>
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
)