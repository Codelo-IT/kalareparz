import grass from "assets/grass.svg";
import { FOOTER_GRASS_WIDTH } from "utils/constants";
import { useScreenSize } from "utils/hooks/useScreenSize";
import { ContentWrapper } from "components/ContentWrapper";
import logo from "assets/logo.png";
import calendarIcon from "assets/calendar.svg";
import clockIcon from "assets/clock.svg";
import locationIcon from "assets/location.svg";
import facebookIcon from "assets/facebook.svg";
import instagramIcon from "assets/instagram.svg";
import mailIcon from "assets/email.svg";
import phoneIcon from "assets/telephone-call.svg";
import { FooterItem } from "components/FooterItem";
import { FooterTitle } from "components/FooterTitle";

export const Footer = () => {

	const { width } = useScreenSize();

	const Grass = () =>
		<>{new Array(Math.ceil(width / FOOTER_GRASS_WIDTH * 1.10)).fill("").map((_, index) =>
			<img
			src={ grass }
			alt="grass"
			className="absolute top-[-30px]"
			style={ {
				width: FOOTER_GRASS_WIDTH,
				left: index * (FOOTER_GRASS_WIDTH * 0.94),
			} }
		/>
	)}</>

	return (
		<div className="w-screen bg-[#338728] flex gap-3 mt-20 relative text-white py-10">
			<Grass/>
			<ContentWrapper className="flex justify-between gap-40">
				<a href="/#">
					<img
						src={ logo }
						alt="logo"
						className="h-36"
					/>
				</a>
				<div className="flex flex-col gap-3">
					<FooterTitle>
						Kontakt
					</FooterTitle>
					<FooterItem icon={ facebookIcon } name="Facebook" link="https://www.facebook.com/kalareparz"/>
					<FooterItem icon={ instagramIcon } name="Instagram" link="https://www.instagram.com/kalareparz"/>
					<FooterItem icon={ phoneIcon } name="Instagram"/>
					<FooterItem icon={ mailIcon } name="Instagram"/>
				</div>
				<div className="flex flex-col gap-3">
					<FooterTitle>
						Godziny otwarca
					</FooterTitle>
					<FooterItem icon={ calendarIcon } name="Każda sobota"/>
					<FooterItem icon={ clockIcon } name="od 8:00 do 13:00"/>
					<FooterItem icon={ locationIcon } name="ul. Kazimierza wielkiego 10, Skawina"/>
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
		</div>
	)
}