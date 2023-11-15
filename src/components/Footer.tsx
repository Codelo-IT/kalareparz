import grass from "assets/grass.svg";
import { FOOTER_GRASS_WIDTH } from "utils/constants";
import { useScreenSize } from "utils/hooks/useScreenSize";
import { ContentWrapper } from "components/ContentWrapper";
import calendarFilledIcon from "assets/calendar-filled.svg";
import timeFilledIcon from "assets/time-filled.svg";
import locationFilledIcon from "assets/location-filled.svg";
import mailFilledIcon from "assets/mail-filled.svg";
import phoneFilledIcon from "assets/phone-filled.svg";
import tractorIcon from "assets/tractor.svg";
import horseIcon from "assets/horse.svg";
import oboraIcon from "assets/obora.svg";
import treeIcon from "assets/tree.svg";
import caravanIcon from "assets/caravan.svg";
import { FooterItem } from "components/FooterItem";
import { FooterTitle } from "components/FooterTitle";
import { Link } from "components/Link";
import { Logo } from "components/Logo";
import { FacebookIcon } from "components/icons/FacebookIcon";
import React from "react";
import { InstagramIcon } from "components/icons/InstagramIcon";

export const Footer = () => {

	const { width } = useScreenSize();

	const Grass = () =>
		<>{new Array(Math.ceil(width / FOOTER_GRASS_WIDTH * 1.10)).fill("").map((_, index) =>
			<img
			src={ grass }
			alt="grass"
			className="absolute top-[-30px] z-10"
			style={ {
				width: FOOTER_GRASS_WIDTH,
				left: index * (FOOTER_GRASS_WIDTH * 0.94),
			} }
		/>
	)}</>

	return (
		<footer className="w-screen bg-darkBrown flex gap-3 mt-20 relative text-white py-10">
			<Grass/>
			<img src={ tractorIcon } alt="Tractor" className="absolute left-1/2 top-[-30px] h-8"/>
			<img src={ caravanIcon } alt="trailer" className="absolute left-[calc(50%-32px)] top-[-30px] h-8"/>
			<img src={ horseIcon } alt="Horse" className="absolute right-20 top-[-30px] h-8 -scale-x-100"/>
			<img src={ oboraIcon } alt="Obora" className="absolute left-2/3 top-[-30px] h-8"/>
			<img src={ treeIcon } alt="Tree" className="absolute left-[50px] top-[-45px] h-10"/>
			<ContentWrapper className="flex justify-between gap-40">
				<Logo className="h-36"/>
				<div className="flex flex-col gap-3">
					<FooterTitle>
						Kontakt
					</FooterTitle>
					<FooterItem icon={ phoneFilledIcon } name="123 123 123"/>
					<FooterItem icon={ mailFilledIcon } name="kalareparz@gmail.com"/>
					<div className="flex items-center gap-3 mt-2">
						<Link className="flex text-brown items-center" to="https://www.facebook.com/kalareparz">
							<FacebookIcon className="h-8 w-8 transition-colors"/>
						</Link>
						<Link className="flex text-brown items-center" to="https://www.instagram.com/kalareparz">
							<InstagramIcon className="h-8 w-8 transition-colors"/>
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<FooterTitle>
						Godziny otwarcia
					</FooterTitle>
					<FooterItem icon={ calendarFilledIcon } name="Każda sobota"/>
					<FooterItem icon={ timeFilledIcon } name="Od 8:00 do 13:00"/>
					<FooterItem icon={ locationFilledIcon } name="Ul. Kazimierza wielkiego 10, Skawina"/>
				</div>
				<div className="flex flex-col gap-3">
					<FooterTitle>
						Przejdź do
					</FooterTitle>
					<FooterItem name="O nas" link="/#onas"/>
					<FooterItem name="Wystawcy" link="/#wystawcy"/>
					<FooterItem name="Kontakt" link="/#kontakt"/>
				</div>
			</ContentWrapper>
		</footer>
	)
}