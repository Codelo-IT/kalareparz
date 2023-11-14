import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import hamImage from "assets/ham.jpg";
import breadImage from "assets/bread.jpg";
import applesImage from "assets/apples.jpg";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import { SingleSlide } from "components/SingleSlide";

export const Hero = () => {

	return (
		<Swiper
			className="h-screen w-full !pt-[100px]"
			effect="fade"
			onSlideChange={() => console.log('slide change')}
			modules={ [ Navigation, Pagination, A11y, EffectFade, Autoplay ] }
			loop
			pagination={ { clickable: true } }
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
		>
			<SwiperSlide>
				<SingleSlide
					title="Szynka"
					description="Zajebista szynka"
					image={ hamImage }
				/>
			</SwiperSlide>
			<SwiperSlide>
				<SingleSlide
					title="Jabłka"
					description="Niedaleko pada jabłko od jabłoni"
					image={ applesImage }
				/>
			</SwiperSlide>
			<SwiperSlide>
				<SingleSlide
					title="Chleb"
					description="Chopok chleb sztos ze jo cie chwyca"
					image={ breadImage }
				/>
			</SwiperSlide>
		</Swiper>
	)
}