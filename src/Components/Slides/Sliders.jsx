// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide from '../../../public/Slider.json'
export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => { }}
            onSwiper={(swiper) => { }}
        >
            {
                slide.map(data => (
                    <SwiperSlide key={data.id}>
                        <div
                            className="min-h-screen w-full flex flex-col justify-center items-center"
                            style={{
                                backgroundImage: `url(${data.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                                <h2 className="text-center text-white my-2 text-2xl md:text-4xl font-bold">{data.title}</h2>
                                <p className="text-gray-300 w-3/5 text-center font-semibold">{data.description}</p>
                            </div>
                        </div>

                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};