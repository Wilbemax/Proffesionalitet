import { Container } from "../../ui"
import classes from './classes.module.css'
import teem from '../../../assets/teem.png'
export const About = () => {
    return (
        <Container>
            <p className={classes.title}>О нас</p>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <p className={classes.text}>
                        «Моя <span>семья</span> – мой <span>космос
                        </span>» — это уникальное событие для семей, объединяющее любовь, творчество и увлечение космосом. Мы верим, что каждая семья — это маленькая вселенная, полная чудес, и наше мероприятие создано, чтобы подарить вам новые звезды вдохновения.
                        <br/>
                        Организаторы праздника стремятся создать яркое и незабываемое событие для жителей Калуги и соседних регионов. Вас ждут конкурсы, викторины, мастер-классы и море положительных эмоций!
                    </p>
                </div>
                <div className={classes.teem}>
                    <img src={teem} alt="teem" />
                </div>
            </div>
        </Container>
    )
}