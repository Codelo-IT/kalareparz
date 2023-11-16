import calendarIcon from "assets/calendar.svg";
import clockIcon from "assets/clock.svg";
import locationIcon from "assets/location.svg";
import hamburgerIcon from "assets/hamburger.svg";
import { useState } from "react";
import { Map } from "components/Map";
import { ContactItem } from "components/ContactItem";

export const Contact = () => {

	const [ isSidebarOpen, toggleSidebarOpen ] = useState(true);

	return (
		<section id="kontakt" className="container-wrapper relative mt-20 h-[500px] rounded-2xl overflow-hidden">
			<div
				className="absolute top-0 w-[600px] h-full flex flex-col gap-5 p-10 z-20 rounded-l-2xl rounded-b-2xl bg-light transition-all"
				style={ { left: isSidebarOpen ? 0 : -568 } }
			>
				<div
					className="absolute top-5 -right-8 bg-light p-2 rounded-r cursor-pointer"
					onClick={ () => toggleSidebarOpen(isOpen => !isOpen) }
				>
					<img src={ hamburgerIcon } alt="<-" className="h-5"/>
				</div>
				<div className="mb-2 text-5xl text-black font-semibold font-title">
					Odwiedź Kalareparz
				</div>
				<div className="text-gray-500 font-light text-lg">
					Jeśli zależy Ci na zdrowiu Twoim i Twojej rodziny, odwiedź nasz targ. Świeże warzywa i owoce, soki, przetwory, wędliny - na wyciągnięcie ręki!
				</div>
				<div className="text-black font-semibold text-lg mt-5">
					Będziemy na Ciebie czekać:
				</div>
				<ContactItem icon={ calendarIcon } label="Co sobotę"/>
				<ContactItem icon={ clockIcon } label="Od 8:00 do 13:00"/>
				<ContactItem icon={ locationIcon } label="Na ul. Kazimierza Wielkiego 10 w Skawinie"/>
			</div>
			<Map/>
		</section>
	);
};