import { Button, Container, Rating } from '../../ui';
import classes from './classes.module.css';


export const ContestUI = () => {
    return <Container>
        <p className={classes.title}>Конкуры</p>
        <div className={classes.wrapper}>
        <div className={classes.card}>
            <div className={classes.innerWrapper}>
                <div className={classes.typography}>
                    <p className={classes.cardTitle}>Название конкурса</p>
                    <p className={classes.cardText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nostrum natus deserunt, beatae voluptatum vitae consequuntur commodi placeat error, fugiat, dolore nam ullam necessitatibus? Provident magnam tempora aliquam eum aspernatur?</p>
                </div>
                <div>
                    <Rating rating={4.6}/>
                    <Button type='primary'>Подробнее</Button>
                </div>

            </div>

            <div className={classes.innerWrapper}>
                <div className={classes.photo}>Photo</div>
                <p className={classes.amount}>Количество участников: <span>10</span></p>
            </div>

        </div>
        <div className={classes.card}>
            <div className={classes.innerWrapper}>
                <div className={classes.typography}>
                    <p className={classes.cardTitle}>Название конкурса</p>
                    <p className={classes.cardText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nostrum natus deserunt, beatae voluptatum vitae consequuntur commodi placeat error, fugiat, dolore nam ullam necessitatibus? Provident magnam tempora aliquam eum aspernatur?</p>
                </div>
                <div>
                    <Rating rating={4.6}/>
                    <Button type='primary'>Подробнее</Button>
                </div>

            </div>

            <div className={classes.innerWrapper}>
                <div className={classes.photo}>Photo</div>
                <p className={classes.amount}>Количество участников: <span>10</span></p>
            </div>

        </div>
        <div className={classes.card}>
            <div className={classes.innerWrapper}>
                <div className={classes.typography}>
                    <p className={classes.cardTitle}>Название конкурса</p>
                    <p className={classes.cardText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nostrum natus deserunt, beatae voluptatum vitae consequuntur commodi placeat error, fugiat, dolore nam ullam necessitatibus? Provident magnam tempora aliquam eum aspernatur?</p>
                </div>
                <div>
                    <Rating rating={4.6}/>
                    <Button type='primary'>Подробнее</Button>
                </div>

            </div>

            <div className={classes.innerWrapper}>
                <div className={classes.photo}>Photo</div>
                <p className={classes.amount}>Количество участников: <span>10</span></p>
            </div>

        </div>
        <div className={classes.card}>
            <div className={classes.innerWrapper}>
                <div className={classes.typography}>
                    <p className={classes.cardTitle}>Название конкурса</p>
                    <p className={classes.cardText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nostrum natus deserunt, beatae voluptatum vitae consequuntur commodi placeat error, fugiat, dolore nam ullam necessitatibus? Provident magnam tempora aliquam eum aspernatur?</p>
                </div>
                <div>
                    <Rating rating={4.6}/>
                    <Button type='primary'>Подробнее</Button>
                </div>

            </div>

            <div className={classes.innerWrapper}>
                <div className={classes.photo}>Photo</div>
                <p className={classes.amount}>Количество участников: <span>10</span></p>
            </div>

        </div>
        <div className={classes.card}>
            <div className={classes.innerWrapper}>
                <div className={classes.typography}>
                    <p className={classes.cardTitle}>Название конкурса</p>
                    <p className={classes.cardText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nostrum natus deserunt, beatae voluptatum vitae consequuntur commodi placeat error, fugiat, dolore nam ullam necessitatibus? Provident magnam tempora aliquam eum aspernatur?</p>
                </div>
                <div>
                    <Rating rating={4.6}/>
                    <Button type='primary'>Подробнее</Button>
                </div>

            </div>

            <div className={classes.innerWrapper}>
                <div className={classes.photo}>Photo</div>
                <p className={classes.amount}>Количество участников: <span>10</span></p>
            </div>

        </div>
        </div>
        
    </Container>
}