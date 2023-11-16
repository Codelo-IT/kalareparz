import { WhyUsTab } from "components/WhyUs/WhyUsTab";
import { useState } from "react";
import classNames from "classnames";
import { WhyUsSlider } from "components/WhyUs/WhyUsSlider";

export const NumberOfSlides = 3;

export type WhyUsTabsIndexes = 0 | 1 | 2;

export const WhyUs = () => {

	const [ activeIndex, setActiveIndex ] = useState<WhyUsTabsIndexes>(1);

	return (
		<div>
			<div
				id="dlaczego-my"
				className={ classNames(
					"container-wrapper w-100 flex justify-center items-center mt-20 relative",
					"h-auto sm:h-[350px] md:h-[450px] xl:h-[400px]",
				) }
			>
				<div className={ classNames(
					"flex items-center",
					"w-max md:w-1/2 h-[320px]",
					"absolute md:static right-5 sm:right-10 top-10 md:top-20",
					"h-[320px] md:h-full",
				) }>
					<WhyUsSlider setActiveSlideIndex={ slideIndex => setActiveIndex(slideIndex) }/>
				</div>
				<div className={ classNames(
					"h-full flex flex-col items-start justify-between",
					"w-full md:w-1/2",
				) }>
					{
						activeIndex === 0 &&
                        <WhyUsTab
                            label="Jakość"
                            title="Jakość, na której możesz polegać"
                            description="Wybierając Kalareparz, stawiasz na niekwestionowaną jakość. Nasze naturalne produkty są uprawiane z dbałością o detale, bez sztucznych dodatków czy pestycydów. Każdy kęs to gwarancja, że podajesz swojej rodzinie jedzenie pełne naturalnego bogactwa i wartości odżywczych."
						/>
					}
					{
						activeIndex === 1 &&
                        <WhyUsTab
                            label="Dostępność"
                            title="Komfortowe Zakupy w Budynku"
                            description="Zapomnij o warunkach atmosferycznych podczas zakupów! Nasz targ to wyjątkowe miejsce, gdzie możesz cieszyć się zakupami w komfortowym budynku. Bez względu na pogodę, możesz swobodnie eksplorować różnorodność naszych produktów, chroniąc się przed deszczem czy słońcem."
						/>
					}
					{
						activeIndex === 2 &&
                        <WhyUsTab
                            label="Świeżość"
                            title="Świeżość Prosto z Gospodarstwa"
                            description="Kalareparz to gwarancja świeżości prosto z lokalnego gospodarstwa. Nasze produkty rolnicze są zbierane z najwyższą starannością, dzięki czemu masz pewność, że na Twoim stole znajduje się to, co najlepsze, pełne smaku i witamin."
						/>
					}
					<div
						id="why-us-swiper-custom-pagination-wrapper"
						className={ classNames(
							"flex gap-5",
							"md:mt-10"
						) }
					></div>
				</div>
			</div>
		</div>
	)
}