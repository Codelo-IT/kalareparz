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
		<div className="relative mt-20 h-[400px] shadow-xl overflow-hidden">
			<div
				className="absolute top-0 w-[500px] h-full flex flex-col gap-5 p-8 z-20 bg-white transition-all"
				style={ { left: isSidebarOpen ? 0 : -500 } }
			>
				<div
					className="absolute top-5 -right-8 bg-white p-2 rounded-r cursor-pointer"
					onClick={ () => toggleSidebarOpen(isOpen => !isOpen) }
				>
					<img src={ hamburgerIcon } alt="<-" className="h-5"/>
				</div>
				<div className="mb-2 text-5xl text-black font-semibold font-title italic">
					Znajdziesz nas
				</div>
				<ContactItem icon={ calendarIcon } label="Co sobotę"/>
				<ContactItem icon={ clockIcon } label="Od 8:00 do 13:00"/>
				<ContactItem icon={ locationIcon } label="Ul. Kazimierza Wielkiego 10, Skawina"/>
			</div>
			<Map/>
		</div>
	)
}