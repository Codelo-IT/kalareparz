import calendarIcon from "assets/calendar.svg";
import clockIcon from "assets/clock.svg";
import locationIcon from "assets/location.svg";
import hamburgerIcon from "assets/hamburger.svg";
import { useState } from "react";
import { Map } from "components/util/Map";
import { ContactItem } from "components/Contact/ContactItem";
import { SectionAnchor } from "components/util/SectionAnchor";

export const Contact = () => {

	const [ isSidebarOpen, toggleSidebarOpen ] = useState(true);

	return (
		<section className="container-wrapper mt-20 relative">
			<SectionAnchor id="kontakt"/>
			<div className="rounded-2xl overflow-hidden relative xl:h-[500px]">
				<div
					className="xl:absolute top-0 xl:w-[600px] xl:h-full flex flex-col gap-5 p-6 xl:p-10 z-20 rounded-l-2xl bg-light transition-all"
					style={ { left: isSidebarOpen ? 0 : -600 } }
				>
					<div
						className="hidden xl:block absolute top-5 -right-8 bg-light p-2 rounded-r cursor-pointer"
						onClick={ () => toggleSidebarOpen(isOpen => !isOpen) }
					>
						<img src={ hamburgerIcon } alt="<-" className="h-5"/>
					</div>
					<div className="mb-2 text-3xl lg:text-4xl xl:text-5xl text-black font-semibold font-title">
						Odwiedź Kalareparz
					</div>
					<div className="text-gray-500 font-light text-base xl:text-lg">
						Jeśli zależy Ci na zdrowiu Twoim i Twojej rodziny, odwiedź nasz targ. Świeże warzywa i owoce, soki, przetwory, wędliny - na wyciągnięcie ręki!
					</div>
					<div className="text-black font-semibold text-base xl:text-lg mt-5">
						Będziemy na Ciebie czekać:
					</div>
					<ContactItem icon={ calendarIcon } label="Co sobotę"/>
					<ContactItem icon={ clockIcon } label="Od 8:00 do 13:00"/>
					<ContactItem icon={ locationIcon } label="Na ul. Kazimierza Wielkiego 10 w Skawinie"/>
				</div>
				<div className="h-[300px] xl:h-full">
					<Map/>
				</div>
			</div>
		</section>
	);
};