import backgroundPhoto from "assets/hero-background.jpg";
import classNames from "classnames";

export const NewHero = () => {

	return (
		<section className="h-[70vh] w-full relative flex justify-center items-center">
			<img src={ backgroundPhoto } alt="Apples" className="object-cover absolute h-full w-full top-0 left-0"/>
			<div className={ classNames(
				"w-[70vw] rounded-xl backdrop-blur-[2px] overflow-hidden",
				"p-10 md:p-14 xl:p-20"
			) }>
				<div className="absolute left-0 top-0 bg-white opacity-30 w-full h-full -z-10"></div>
				<div className="flex flex-col justify-center items-center gap-4 z-10">
					<span className={ classNames(
						"text-green font-extrabold",
						"text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
					) }>
						Kalareparz
					</span>
					<span className={ classNames(
						"font-medium text-center",
						"text-xl sm:text-2xl lg:text-3xl xl:text4xl 2xl:text-5xl"
					) }>
						Targ lokalnych płodów rolnych
					</span>
					<span className={ classNames(
						"text-center mt-6",
						"text-xs sm:text-xs lg:text-base"
					) }>
						Nasze produkty rolnicze to nie tylko jedzenie,
						to kawałek naszej ziemi, owoc pracy lokalnych rolników.
						Zasmakuj lokalności, wspieraj rolników i delektuj się prawdziwym smakiem!
					</span>
				</div>
			</div>
		</section>
	);
};