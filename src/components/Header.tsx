import React from "react";
import logo from "assets/logo.png";
import { Link } from "components/Link";
import { FacebookIcon } from "components/icons/FacebookIcon";
import { InstagramIcon } from "components/icons/InstagramIcon";

export const Header = () => (
	<header className="py-4 shadow-md w-screen flex items-center fixed z-50 justify-center text-xl bg-white">
		<a href="/#">
			<img
				src={ logo }
				alt="logo"
				className="absolute top-5 left-5 h-36"
			/>
		</a>
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