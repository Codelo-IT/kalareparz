import React from "react";
import logo from "assets/logo.png";

export const Header = () => (
	<div className="h-[100px] shadow w-screen flex items-center fixed z-50 justify-center text-xl bg-white">
		<a href="/#">
			<img
				src={ logo }
				alt="logo"
				className="absolute top-5 left-5 h-36"
			/>
		</a>
		<div className="flex items-center gap-20">
			<a href="/#wystawcy" className="cursor-pointer">
				Wystawcy
			</a>
			<a href="/#kotakt" className="cursor-pointer">
				Kontakt
			</a>
		</div>
	</div>
)