import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import hamImage from "assets/ham.jpg";
import breadImage from "assets/bread.jpg";
import applesImage from "assets/apples.jpg";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import { SingleSlide } from "components/Hero/SingleSlide";

export const Hero = () => {
    return (
        <Swiper
            className="h-[60vh] w-full !pt-[128px]"
            effect="fade"
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
            loop
            autoplay={{ delay: 3000 }}
        >
            <SwiperSlide>
                <SingleSlide
                    title=""
                    image={hamImage}
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleSlide
                    title="Pierwszy w okolicy targ lokalnych płodów rolnych"
                    image={applesImage}
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleSlide
                    title="Chleb"
                    image={breadImage}
                />
            </SwiperSlide>
        </Swiper>
    );
};
