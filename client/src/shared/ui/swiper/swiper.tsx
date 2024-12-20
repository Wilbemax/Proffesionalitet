import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";
import "./swiper-css.css"; // Ваш CSS-файл для кастомизации
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Skeleton } from "../skeleton/skeleton";

interface CustomSwiperProps {
    children: React.ReactNode;
    width?: number | string;
}

export const CustomSwiper: React.FC<CustomSwiperProps> = ({ children, width }) => {
    const swiperRef = useRef<SwiperInstance | null>(null);

    return (
        <div className="swiper-container" style={{ width: width }}>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20} 
                slidesPerView="auto" 
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                effect="slide"
                navigation
                loop // Включаем зацикливание слайдов
            >
                {children ? (
                    <>{children}</>
                ) : (
                    <>
                        <SwiperSlide style={{ width: "100%%" }}>
                            <Skeleton />
                        </SwiperSlide>
                        <SwiperSlide style={{ width: "100%%" }}>
                            <Skeleton />
                        </SwiperSlide>
                        <SwiperSlide style={{ width: "100%%"}}>
                            <Skeleton />
                        </SwiperSlide>
                        <SwiperSlide style={{ width: "100%%" }}>
                            <Skeleton />
                        </SwiperSlide>
                        <SwiperSlide style={{ width: "100%%" }}>
                            <Skeleton />
                        </SwiperSlide>
                    </>
                )}
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