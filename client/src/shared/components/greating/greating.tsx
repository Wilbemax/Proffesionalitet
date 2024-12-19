import { Container } from  "../../ui"
import classes from './classes.module.css'
import video from '../../../assets/ЛУЧШАЯ РАБОТА В МИРЕ.mp4'

export const Greating = () => {
    return (
        <Container>
            <div className={classes.wrapper}>
                <p className={classes.title}>Приветствие участникам от наших <br/> <span>организаторов</span></p>
                <div className={classes.video}>
                    <video src={video} controls muted></video>
                </div>
            </div>
        </Container>
    )

}