import { SwiperSlide } from 'swiper/react'
import { Button, Container, CustomSwiper } from '../../ui'
import classes from './classes.module.css'

export const ReviewsUI = () => {


    return (
        <Container>
            <p className={classes.title}>Отзывы</p>
            <CustomSwiper width={'100%'}>
                <SwiperSlide style={{width: '50%'}}>
                    <div className={classes.card}>
                        <div className={classes.typography}>
                            <div>
                                <p className={classes.name}>Имя пользователя</p>
                                <p className={classes.time}>23 февраля в 19:52</p>
                            </div>
                            <div className={classes.avatar}>
                                
                            </div>
                        </div>
                        <p className={classes.text}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aliquid sapiente libero, cumque tenetur beatae soluta sint itaque impedit quos rem, unde culpa id? Cupiditate beatae iste in recusandae vero.
                            Facilis officiis velit aperiam impedit tempore perferendis ut. Magni, voluptatum? Doloremque corrupti, veniam repudiandae eligendi animi ducimus saepe dolorum magni cupiditate magnam eaque aliquid rerum necessitatibus dicta, sunt officiis voluptatum!
                            Eos, culpa libero. Nulla, delectus! Ullam qui earum magnam laudantium laborum doloribus eius pariatur eveniet quae accusamus aperiam odit facere minima ipsum quam numquam temporibus, debitis illo at hic est.
                        </p>

                        <Button type='primary'>Посмотреть мероприятие</Button> 
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width: '50%'}}>
                    <div className={classes.card}>
                        <div className={classes.typography}>
                            <div>
                                <p className={classes.name}>Имя пользователя</p>
                                <p className={classes.time}>23 февраля в 19:52</p>
                            </div>
                            <div className={classes.avatar}>
                                
                            </div>
                        </div>
                        <p className={classes.text}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aliquid sapiente libero, cumque tenetur beatae soluta sint itaque impedit quos rem, unde culpa id? Cupiditate beatae iste in recusandae vero.
                            Facilis officiis velit aperiam impedit tempore perferendis ut. Magni, voluptatum? Doloremque corrupti, veniam repudiandae eligendi animi ducimus saepe dolorum magni cupiditate magnam eaque aliquid rerum necessitatibus dicta, sunt officiis voluptatum!
                            Eos, culpa libero. Nulla, delectus! Ullam qui earum magnam laudantium laborum doloribus eius pariatur eveniet quae accusamus aperiam odit facere minima ipsum quam numquam temporibus, debitis illo at hic est.
                        </p>

                        <Button type='primary'>Посмотреть мероприятие</Button> 
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width: '50%'}}>
                    <div className={classes.card}>
                        <div className={classes.typography}>
                            <div>
                                <p className={classes.name}>Имя пользователя</p>
                                <p className={classes.time}>23 февраля в 19:52</p>
                            </div>
                            <div className={classes.avatar}>
                                
                            </div>
                        </div>
                        <p className={classes.text}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aliquid sapiente libero, cumque tenetur beatae soluta sint itaque impedit quos rem, unde culpa id? Cupiditate beatae iste in recusandae vero.
                            Facilis officiis velit aperiam impedit tempore perferendis ut. Magni, voluptatum? Doloremque corrupti, veniam repudiandae eligendi animi ducimus saepe dolorum magni cupiditate magnam eaque aliquid rerum necessitatibus dicta, sunt officiis voluptatum!
                            Eos, culpa libero. Nulla, delectus! Ullam qui earum magnam laudantium laborum doloribus eius pariatur eveniet quae accusamus aperiam odit facere minima ipsum quam numquam temporibus, debitis illo at hic est.
                        </p>

                        <Button type='primary'>Посмотреть мероприятие</Button> 
                    </div>
                </SwiperSlide>
            </CustomSwiper>
        </Container>
    )
}