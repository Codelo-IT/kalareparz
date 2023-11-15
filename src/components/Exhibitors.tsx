import appleJuiceImage from "assets/apple-juice.jpg";
import breadImage from "assets/bread-2.jpg";
import cheeseImage from "assets/cheese.jpg";
import hamImage from "assets/ham-2.jpg";
import oilImage from "assets/oil.jpg";
import vegetablesImage from "assets/vegetables.jpg";
import classNames from "classnames";
import { Link } from "components/Link";
import { ArrowIcon } from "components/ArrowIcon";
import dotsBg from "assets/dots-bg.svg";
import wavesBg from "assets/waves-bg.svg";
import linesBg from "assets/lines-bg.svg";
import { CircleIcon } from "components/icons/CircleIcon";

type Exhibitor = {
	title: string
	name: string
	description: string
	image: string
	color: CardColor
}

enum CardColor {
	GREEN = "green",
	YELLOW = "yellow",
	ORANGE = "orange"
}

export const Exhibitors = () => {

	const exhibitors: Exhibitor[] = [
		{
			title: "Warzywa i przetwory",
			name: "Gospodarstwo Rolne Gorzkowscy",
			description: "Jesteśmy gospodarstwem typowo rodzinnym, skupiamy się przede wszystkim na tradycyjnej uprawie warzyw sezonowych, okopowych i kiszonkach. Sprzedajemy tylko i wyłącznie to, co uda nam się wyprodukować, więc nie znajdziecie u nas w grudniu pomidorów czy ogórków, a wiosną kalafiora. Zdrowo, sezonowo i tradycyjnie to motto naszego gospodarstwa.",
			image: vegetablesImage,
			color: CardColor.GREEN
		},
		{
			title: "Wędliny",
			name: "„GAWOR” Szczepan GAWOR",
			description: "Oferujemy produkty tradycyjne, o prostym składzie (zazwyczaj jest to tylko mięso, sól oraz przyprawy), z polskiego lokalnego mięsa (z małych tradycyjnych hodowli). Produkty te są w wędzone tradycyjnie w wędzarni opalanej drewnem.",
			image: hamImage,
			color: CardColor.YELLOW
		},
		{
			title: "Soki i jabłka",
			name: "Tłocznia Pawłowscy Antoni Pawłowski",
			description: "Intensywny, bogaty smak naszych soków jest naszą pasją, którą z radością dzielimy się z Państwem!",
			image: appleJuiceImage,
			color: CardColor.ORANGE
		},
		{
			title: "Nabiał kozi",
			name: "Kozie Frykasy Maciej Dybowski",
			description: "Wśród wyrobów pochodzących z naszego ekologicznego gospodarstwa \"Kozie Frykasy\" znaleźć można takie przysmaki jak: bundz, bundz wędzony, jogurt, kefir, świeże mleko, sery pleśniowe, długodojrzewające oraz nasze specjały- sery w zalewie, twarożki, fetę, halumi czy nawet 2 letni parmezan, rikotta i słynne już \"Koscypki\". Oczywiście wszystkie wyroby powstają wyłącznie ze świeżego, niepasteryzowanego koziego mleka.",
			image: cheeseImage,
			color: CardColor.GREEN
		},
		{
			title: "Oleje tłoczone",
			name: "Stefan Wójcicki- Oleje tłoczone",
			description: "Olej dobry bardzo fest. Olej dobry bardzo fest x2",
			image: oilImage,
			color: CardColor.YELLOW
		},
		{
			title: "Wypieki",
			name: "Monika Kadela",
			description: "Najpopularniejszym produktem jest chleb pszenno – żytni, może być z dodatkami, takimi jak np. czarnuszka oraz ciasta, które przygotowywane są według tradycyjnych pilnie strzeżonych przepisów. Wszystko z miłością do jakości i zadowolonych klientów.",
			image: breadImage,
			color: CardColor.ORANGE
		}
	];

	return (
		<section id="wystawcy" className="relative mt-20 mb-20 ">
			<img src={ dotsBg } className="absolute h-[100px] top-[50px] right-0" alt="background shape dots"/>
			<img src={ wavesBg } className="absolute h-[60px] top-[1200px] -left-4" alt="background shape waves"/>
			<img src={ linesBg } className="absolute h-[60px] top-[2000px] -right-4" alt="background shape lines"/>
			<div className="container-wrapper flex flex-col items-center text-center gap-16">
				<div className="flex flex-col gap-5">
					<div className="text-5xl text-black font-semibold">
						Wystawcy
					</div>
					<div className="text-lg text-black max-w-3xl font-light">
						Nasi wystawcy to profesjonaliści w swoich branżach. Znajdziesz u nas różnorodne produkty - warzywa, wędliny, sery kozie, chleby czy przetwory!
					</div>
				</div>
				<div className="flex flex-col gap-20">
					{ exhibitors.map(({ title, name, description, image, color }) =>
						<div className="flex gap-10 justify-end items-center odd:flex-row-reverse even:ml-[200px] odd:mr-[200px]">
							<img
								src={ image }
								alt="single-exhibitor"
								className="h-full min-h-[400px] object-cover overflow-hidden rounded-2xl w-3/5"
							/>
							<div className="w-2/5 flex flex-col gap-6 items-start">
								<div className="flex items-center w-full gap-4 text-3xl font-bold text-black">
									<CircleIcon className={
										classNames("h-10 w-10",
											{ "text-orange": color === CardColor.ORANGE },
											{ "text-yellow ": color === CardColor.YELLOW },
											{ "text-green ": color === CardColor.GREEN }
										)
									}/>
									{ title }
								</div>
								<div className={ classNames("flex gap-3 justify-between h-min rounded-2xl") }>
									<div className="text-left pl-14">
										<div className="text-2xl font-semibold text-black mb-4">
											{ name }
										</div>
										<div className="text-lg text-black font-light text-justify italic">
											"{ description }"
										</div>
									</div>
								</div>
								<Link to="" className="group/link transition-colors font-bold flex w-full justify-end items-center gap-2">
									Zobacz więcej
									<ArrowIcon className="h-3 transition-colors group-hover/link:fill-green"/>
								</Link>
							</div>
						</div>
					) }
				</div>
			</div>
		</section>
	);
};