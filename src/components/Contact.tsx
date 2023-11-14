import mapImage from "assets/map.png";
import calendarIcon from "assets/calendar.svg";
import clockIcon from "assets/clock.svg";
import locationIcon from "assets/location.svg";
import telephoneIcon from "assets/telephone-call.svg";
import mailIcon from "assets/email.svg";
import facebookIcon from "assets/facebook.svg";
import instagramIcon from "assets/instagram.svg";
import hamburgerIcon from "assets/hamburger.svg";
import { useState } from "react";

export const Contact = () => {

	const [ isSidebarOpen, toggleSidebarOpen ] = useState(true);
	
	return (
		<div className="relative mt-20 h-[800px] shadow-xl overflow-hidden">
			<div
				className="absolute top-0 w-[400px] h-full flex flex-col gap-10 z-20 bg-white p-5 transition-all"
				style={ { left: isSidebarOpen ? 0 : -400 } }
			>
				<div
					className="absolute top-5 -right-8 bg-white p-2 rounded-r cursor-pointer"
					onClick={ () => toggleSidebarOpen(isOpen => !isOpen) }
				>
					<img src={ hamburgerIcon } alt="<-" className="h-5"/>
				</div>
				<div className="text-4xl">
					Znajdziesz nas
				</div>
				<div className="flex items-center gap-5">
					<img src={ calendarIcon } alt="calendarIcon" className="h-5"/>
					<div>
						Co sobote
					</div>
				</div>
				<div className="flex items-center gap-5">
					<img src={ clockIcon } alt="clockIcon" className="h-5"/>
					<div>
						od 8:00 do 13:00
					</div>
				</div>
				<div className="flex items-center gap-5">
					<img src={ locationIcon } alt="locationIcon" className="h-5"/>
					<div>
						 ul. Kazimierza Wielkiego 10, Skawina
					</div>
				</div>
				<div className="flex items-center gap-5">
					<img src={ facebookIcon } alt="facebookIcon" className="h-5"/>
					<a href="https://www.facebook.com/kalareparz">
						Facebook
					</a>
				</div>
				<div className="flex items-center gap-5">
					<img src={ instagramIcon } alt="instagramIcon" className="h-5"/>
					<a href="https://www.instagram.com/kalareparz">
						Instragram
					</a>
				</div>
				<div className="flex items-center gap-5">
					<img src={ telephoneIcon } alt="telephoneIcon" className="h-5"/>
					<div>
						123 123 123
					</div>
				</div>
				<div className="flex items-center gap-5">
					<img src={ mailIcon } alt="mailIcon" className="h-5"/>
					<div>
						kontakt@kalareparz.pl
					</div>
				</div>
			</div>
			<img
				src={ mapImage }
				alt="map"
				className="absolute h-full w-full object-cover top-0 left-0 z-10"
			/>
		</div>
	)
}