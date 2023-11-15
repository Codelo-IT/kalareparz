import laurelWreathLeft from "assets/laurel-wreath-left.svg";
import laurelWreathRight from "assets/laurel-wreath-right.svg";

export const GoodQuality = () => (
	<section className="w-full h-[250px] flex flex-col justify-center items-center bg-green">
		<div className="flex justify-center items-center">
			<img src={ laurelWreathLeft } className="h-[150px]" alt="Laurel Wreath"/>
			<div className="text-5xl font-bold text-center max-w-[600px] text-white">
				Zasmakuj lokalnej pasji!
			</div>
			<img src={ laurelWreathRight } className="h-[150px]" alt="Laurel Wreath"/>
		</div>
	</section>
);