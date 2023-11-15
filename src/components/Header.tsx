import React from "react";
import logo from "assets/logo.png";

export const Header = () => (
	<div className="py-4 shadow-md w-screen flex items-center fixed z-50 justify-center text-xl bg-light">
		<a href="/#">
			<img
				src={ logo }
				alt="logo"
				className="absolute top-5 left-5 h-36"
			/>
		</a>
		<div className="flex flex-col justify-center items-center gap-5">
			<div className="font-title text-6xl italic font-semibold">
				Kalareparz
			</div>
			<div className="flex items-center gap-20">
				<a href="/#wystawcy" className="cursor-pointer transition hover:text-green">
					Wystawcy
				</a>
				<a href="/#kontakt" className="cursor-pointer transition hover:text-green">
					Kontakt
				</a>
			</div>
		</div>
	</div>
)