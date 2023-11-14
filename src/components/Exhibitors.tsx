import appleJuiceImage from "assets/apple-juice.jpg";
import breadImage from "assets/bread-2.jpg";
import cheeseImage from "assets/cheese.jpg";
import hamImage from "assets/ham-2.jpg";
import oilImage from "assets/oil.jpg";
import vegetablesImage from "assets/vegetables.jpg";

type Exhibitor = {
	name: string
	description: string
	image: string
}

export const Exhibitors = () => {

	const exhibitors: Exhibitor[] = [
		{
			name: "Gospodarstwo Rolne Gorzkowscy - Warzywa i przetwory",
			description: "Dobre warzywka mhmh bardzo dobre. Ogolnie to wpisuje sobie jakis losowy tekst o warzywkach a co",
			image: vegetablesImage,
		},
		{
			name: "„GAWOR” Szczepan GAWOR - Wędliny",
			description: "Szyneczka od Gawora to prawie jak stronka od Jawora. Kazdy wie, że Gawor robi szyneczke konkrecik",
			image: hamImage,
		},
		{
			name: "Tłocznia Pawłowscy Antoni Pawłowski - Soki i jabłka",
			description: "Tłocznia ich to naprawde giga chad. Przeciez jak raz sie tego soku napijesz to juz nie bedizesz chical innego sie w zyciu napic",
			image: appleJuiceImage,
		},
		{
			name: "Kozie Frykasy Maciej Dybowski - Nabiał kozi",
			description: "Frykasy takie, że hoho. Seyjnie serel konkret w sklepie takiego bratku nie kupisz",
			image: cheeseImage,
		},
		{
			name: "Stefan Wójcicki- Oleje tłoczone",
			description: "Olej dobry bardzo fest. Olej dobry bardzo fest x2",
			image: oilImage,
		},
		{
			name: "Monika Kadela - Chleby",
			description: "Chlebek od Pani Moniczki to niebo w gębie. Po spróbowaniu tego chlebka każdy inny przypomniał mi właśnie o tym...",
			image: breadImage,
		},
	]

	return (
		<div className="flex flex-col items-center text-center mt-20 gap-10">
			<div className="text-4xl text-black">
				Wystawcy
			</div>
			<div className="grid grid-cols-3 gap-10">
				{ exhibitors.map(({ name, description, image }) =>
					<div className="flex flex-col gap-3 h-[350px] justify-between shadow-xl">
						<div className="text-2xl text-black px-10 pt-6">
							{ name }
						</div>
						<div className="text-sm text-black px-10">
							{ description }
						</div>
						<div className="h-40 w-full">
							<img
								src={ image }
								alt="single-exhibitor-image"
								className="h-full w-full object-cover rounded-bl rounded-br"
							/>
						</div>
					</div>
				) }
			</div>
		</div>
	)
}