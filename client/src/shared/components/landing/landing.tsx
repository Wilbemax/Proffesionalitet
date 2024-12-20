import { Container } from  "../../ui"
import classes from './classes.module.css'
import rocket from '../../../assets/rocket.png'
import { CustomSwiper } from  "../../ui"
import { SwiperSlide } from 'swiper/react'

type ContestsType = {
    id: string,
    title: string,
    description: string,
    photo: string,
    rating: number,
    peoplesCount: number,
}

export const Landing = ({ contests }: { contests?: ContestsType }) => {
    return (
        <Container>
            <div className={classes.wrapper}>
                <div className={classes.rocket}>
                    <img src={rocket} alt="rocket" />
                </div>
                <div className={classes.side}>
                    <h1 className={classes.title}>Моя <span>семья</span> &mdash; мой<span> космос </span></h1>
                    <p className={classes.subTitle}>Зови всю семью, <span>записывайтесь</span> на конкурсы, <span>участвуйте</span>, побеждайте и получайте <span>призы</span></p>


                    <CustomSwiper >

                        {/* Передаём слайды как children
                        <SwiperSlide className="slide">Слайд 1</SwiperSlide>
                        <SwiperSlide className="slide">Слайд 2</SwiperSlide>
                        <SwiperSlide className="slide">Слайд 3</SwiperSlide>
                        <SwiperSlide className="slide">Слайд 4</SwiperSlide>
                        <SwiperSlide className="slide">Слайд 5</SwiperSlide> */}

                    </CustomSwiper>
                </div>
            </div>

        </Container>
    )
}