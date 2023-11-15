import React from "react";
import { Logo } from "components/Logo";

export const Header = () => (
	<header className="py-4 shadow-md w-screen flex items-center fixed z-50 justify-center text-xl bg-white">
		<Logo className="absolute top-5 left-5 h-36"/>
		<div className="relative flex flex-col justify-center items-center gap-5">
			<div className="font-title text-5xl italic font-semibold">
				Kalareparz
			</div>
			<div className="flex items-center gap-20">
				<a href="/#onas" className="cursor-pointer transition hover:text-green">
					O nas
				</a>
				<a href="/#wystawcy" className="cursor-pointer transition hover:text-green">
					Wystawcy
				</a>
				<a href="/#kontakt" className="cursor-pointer transition hover:text-green">
					Kontakt
				</a>
			</div>
		</div>
	</header>
)