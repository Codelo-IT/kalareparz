import backgroundPhoto from "assets/hero-background.jpg";

export const NewHero = () => {

	return (
		<section className="h-[70vh] w-full relative flex justify-center items-center">
			<img src={ backgroundPhoto } alt="Apples" className="object-cover absolute h-full w-full top-0 left-0"/>
			<div className="w-[70vw] rounded-xl p-20 backdrop-blur-[2px] overflow-hidden">
				<div className="absolute left-0 top-0 bg-white opacity-30 w-full h-full -z-10"></div>
				<div className="flex flex-col justify-center items-center gap-4 z-10">
					<span className="text-7xl text-green font-extrabold">Kalareparz</span>
					<span className="text-5xl font-medium text-center">Targ lokalnych płodów rolnych</span>
					<span className="text text-center mt-6">Nasze produkty rolnicze to nie tylko jedzenie, to kawałek naszej ziemi, owoc pracy lokalnych rolników. Zasmakuj lokalności, wspieraj rolników i delektuj się prawdziwym smakiem!</span>
				</div>
			</div>
		</section>
	);
};