import appleJuiceImage from "assets/apple-juice.jpg";
import breadImage from "assets/bread-2.jpg";
import cheeseImage from "assets/cheese.jpg";
import hamImage from "assets/ham-2.jpg";
import oilImage from "assets/oil.jpg";
import vegetablesImage from "assets/vegetables.jpg";
import classNames from "classnames";
import arrowIcon from "assets/arrow.svg";
import { Link } from "components/Link";
import { ArrowIcon } from "components/ArrowIcon";

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
			description: "Tłocznia ich to naprawde giga chad. Przeciez jak raz sie tego soku napijesz to juz nie bedizesz chical innego sie w zyciu napic",
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
			title: "Chleby",
			name: "Monika Kadela",
			description: "Chlebek od Pani Moniczki to niebo w gębie. Po spróbowaniu tego chlebka każdy inny przypomniał mi właśnie o tym...",
			image: breadImage,
			color: CardColor.ORANGE
		}
	];

	return (
		<div id="wystawcy" className="flex flex-col items-center text-center mt-20 gap-16">
			<div className="flex flex-col gap-5">
				<div className="text-5xl text-black font-medium ">
					Wystawcy
				</div>
				<div className="text-lg text-black font-medium max-w-3xl font-light">
					Nasi wystawcy to profesjonaliści w swoich branżach. Znajdziesz u nas różnorodne produkty - warzywa, wędliny, sery kozie, chleby czy przetwory!
				</div>
			</div>
			<div className="flex flex-col gap-20">
				{ exhibitors.map(({ title, name, description, image, color }) =>
					<div className="flex gap-10 justify-end items-center odd:flex-row-reverse even:ml-[200px] odd:mr-[200px]">
						<div className="h-full w-3/5 overflow-hidden">
							<img
								src={ image }
								alt="single-exhibitor-image"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="w-2/5 flex flex-col gap-6 items-start">
							<div className="text-3xl font-bold font-title italic">{ title }</div>
							<div className={
								classNames("flex gap-3 justify-between border h-min",
									{ "bg-orange border-darkOrange": color === CardColor.ORANGE },
									{ "bg-yellow border-darkYellow": color === CardColor.YELLOW },
									{ "bg-green border-darkGreen": color === CardColor.GREEN },
								)
							}>
								<div className="text-left p-8">
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
	);
};