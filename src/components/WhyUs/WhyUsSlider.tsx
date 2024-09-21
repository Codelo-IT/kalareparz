import { EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { whyUsIndexToSvgDictionary, whyUsIndexToTabName } from "utils/dictionaries";
import { Swiper as SwiperClass } from "swiper/types";
import appleImg from "assets/apples.jpg";
import breadImg from "assets/bread.jpg";
import hamImg from "assets/ham.jpg";
import { NumberOfSlides, WhyUsTabsIndexes } from "components/WhyUs/WhyUs";

type Props = {
    setActiveSlideIndex: (slideIndex: WhyUsTabsIndexes) => void;
};

export const WhyUsSlider = ({ setActiveSlideIndex }: Props) => {
    const pagination = {
        el: "#why-us-swiper-custom-pagination-wrapper",
        renderBullet: (index: number, swiperClassNames?: string) => {
            if (index >= NumberOfSlides) return "";
            const image = whyUsIndexToSvgDictionary[index as WhyUsTabsIndexes];
            const text = whyUsIndexToTabName[index as WhyUsTabsIndexes];
            return `<div class="${swiperClassNames}">${image}<div class="text">${text}</div></div>`;
        },
        type: "bullets",
        bulletClass: "swiper-custom-bullet",
        bulletActiveClass: "swiper-custom-bullet-active",
        clickable: true,
    };

    const onSlideChange = ({ activeIndex }: SwiperClass) => {
        if (activeIndex >= NumberOfSlides) return;
        setActiveSlideIndex(activeIndex);
    };

    return (
        <Swiper
            pagination={pagination}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination]}
            onSlideChange={onSlideChange}
            className="why-us-swiper"
        >
            <SwiperSlide>
                <img
                    src={appleImg}
                    alt="single-slide"
                    className="absolute h-full w-full top-0 left-0 z-10 backdrop-filter object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={breadImg}
                    alt="single-slide"
                    className="absolute h-full w-full top-0 left-0 z-10 backdrop-filter object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={hamImg}
                    alt="single-slide"
                    className="absolute h-full w-full top-0 left-0 z-10 backdrop-filter object-cover"
                />
            </SwiperSlide>
        </Swiper>
    );
};
