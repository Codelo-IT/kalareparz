import { EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { WhyUsTab } from "components/WhyUs/WhyUsTab";
import { whyUsIndexToSvgDictionary, whyUsIndexToTabName } from "utils/dictionaries";
import { Swiper as SwiperClass } from "swiper/types";
import { useState } from "react";

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
			<div className="container-wrapper w-100 flex justify-center h-[400px] mt-20">
				<div className="w-1/2 h-full flex items-center">
					<Swiper
						pagination={ pagination }
						effect={'cards'}
						grabCursor={true}
						modules={[ EffectCards, Pagination ]}
						onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.activeIndex)}
						className="why-us-swiper"
					>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 9</SwiperSlide>
					</Swiper>
				</div>
				<div className="w-1/2 h-full flex flex-col items-start justify-between">
					{
						activeIndex === 0 &&
                        <WhyUsTab
                            label="Pure organic food"
                            title="HEALTY FOOD FOR YOUR GOOD GROWTH"
                            description="Lorem ipsum dolor sit amte nescei cing eli. Suspe ndisse suspic Lorem ipsum dolor sit amte nescei cing eli. Suspe ndisse suspic Lorem ipsum dolor sit amte nescei cing eli. Suspe ndisse suspic Lorem ipsum dolor sit amte nescei cing eli. Suspe ndisse suspic"
                        />
					}
					{
						activeIndex === 1 &&
                        <WhyUsTab
                            label="Lokalizacja"
                            title="Dobra lokalizacja"
                            description="test description"
                        />
					}
					{
						activeIndex === 2 &&
                        <WhyUsTab
                            label="Pure organic food"
                            title="HEALTY FOOD FOR YOUR GOOD GROWTH"
                            description="Lorem ipsum dolor sit amte nescei cing eli. Suspe ndisse suspic Lorem ipsum dolor sit amte nescei cing eli. Suspe ndisse suspic Lorem ipsum dolor sit amte nescei cing eli. Suspe ndisse suspic Lorem ipsum dolor sit amte nescei cing eli. Suspe ndisse suspic"
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