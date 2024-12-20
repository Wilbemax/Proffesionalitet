import { Container, ContestCard } from "../../ui"
import classes from './classes.module.css'
import rocket from '../../../assets/rocket.png'
import { CustomSwiper } from "../../ui"
import { ContestI } from "../../http/type"
import { SwiperSlide } from "swiper/react"


export const Landing = ({ contests }: { contests?: ContestI[] }) => {
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
                        {contests && contests.map(contest => <SwiperSlide>
                            <ContestCard
                                key={contest.contestId}
                                contestId={contest.contestId}
                                name={contest.name}
                                description={contest.description}
                                coverImage={contest.coverImage}
                                registeredCount={contest.registeredCount}
                                rating={contest.rating}
                            />
                        </SwiperSlide>)}
                    </CustomSwiper>
                </div>
            </div>

        </Container>
    )
}