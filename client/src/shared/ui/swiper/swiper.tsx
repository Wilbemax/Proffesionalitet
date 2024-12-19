import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";
import "./swiper-css.css"; // Ваш CSS-файл для кастомизации
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Skeleton } from "../skeleton/skeleton";

interface CustomSwiperProps {
    children: React.ReactNode;
}

export const CustomSwiper: React.FC<CustomSwiperProps> = ({ children }) => {
    const swiperRef = useRef<SwiperInstance | null>(null);

    return (
        <div className="swiper-container">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                 slidesPerView="auto"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                effect="slide"
                navigation
            >
                <SwiperSlide>
                    <Skeleton />
                </SwiperSlide>
                <SwiperSlide>
                    <Skeleton />
                </SwiperSlide><SwiperSlide>
                    <Skeleton />
                </SwiperSlide><SwiperSlide>
                    <Skeleton />
                </SwiperSlide><SwiperSlide>
                    <Skeleton />
                </SwiperSlide>
                {/* {children} */}
            </Swiper>

            {/* Кнопки навигации */}
            <div className="custom-navigation">
                <button
                    className="custom-button"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous Slide"
                >
                    <ArrowLeft size={30} />
                </button>
                <button
                    className="custom-button"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next Slide"
                >
                    <ArrowRight size={30} />
                </button>
            </div>
        </div>
    );
};

export default CustomSwiper;
