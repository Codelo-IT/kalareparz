import { EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { WhyUsTab } from "components/WhyUs/WhyUsTab";
import { whyUsIndexToSvgDictionary, whyUsIndexToTabName } from "utils/dictionaries";
import { Swiper as SwiperClass } from "swiper/types";
import { useState } from "react";
import appleImg from "assets/apples.jpg";
import breadImg from "assets/bread.jpg";
import hamImg from "assets/ham.jpg";

export const NumberOfSlides = 3;

export type WhyUsTabsIndexes = 0 | 1 | 2;

export const WhyUs = () => {

	const [ activeIndex, setActiveIndex ] = useState<WhyUsTabsIndexes>(1);

	const pagination = {
		el: "#why-us-swiper-custom-pagination-wrapper",
		renderBullet: (index: number, swiperClassNames?: string) => {
			if (index >= NumberOfSlides) return "";
			const image = whyUsIndexToSvgDictionary[ index as WhyUsTabsIndexes ];
			const text = whyUsIndexToTabName[ index as WhyUsTabsIndexes ];
			return (
				'<div class="' + swiperClassNames + '">' +
					image +
					'<div class="text">' +
						text +
					'</div>' +
				'</div>'
			);
		},
		type: "bullets",
		bulletClass: "swiper-custom-bullet",
		bulletActiveClass: "swiper-custom-bullet-active",
		clickable: true,
	} ;

	return (
		<div>
			<div
				id="dlaczego-my"
				className="container-wrapper w-100 flex justify-center h-[400px] mt-20"
			>
				<div className="w-1/2 h-full flex items-center">
					<Swiper
						pagination={ pagination }
						effect={'cards'}
						grabCursor={true}
						modules={[ EffectCards, Pagination ]}
						onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.activeIndex)}
						className="why-us-swiper"
					>
						<SwiperSlide>
							<img
								src={ appleImg }
								alt="single-slide"
								className="absolute h-full w-full top-0 left-0 z-10 backdrop-filter object-cover"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={ breadImg }
								alt="single-slide"
								className="absolute h-full w-full top-0 left-0 z-10 backdrop-filter object-cover"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={ hamImg }
								alt="single-slide"
								className="absolute h-full w-full top-0 left-0 z-10 backdrop-filter object-cover"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="w-1/2 h-full flex flex-col items-start justify-between">
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
						className="flex gap-5 mt-10"
					></div>
				</div>
			</div>
		</div>
	)
}