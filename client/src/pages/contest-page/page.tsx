import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { Context } from "../../main"
import classes from './classes.module.css'
import { Button, Container, Rating } from "../../shared/ui"
export const ContestPage = () => {
    const { contestId } = useParams<{ contestId: string }>()
    const { store } = useContext(Context)
    store.getContests()
    const contests = store.contests
    const contest = contests.find(c => c.contestId === contestId)
    let readableDate = null
    useEffect(() => {
        const getConte = async () => {
            await store.getContests()

        }
        getConte()
    }, [store])

    if (contest) {
        const date = new Date(contest.eventDateTime);
        readableDate = date.toLocaleDateString('ru-RU', {
            weekday: 'long', // день недели
            year: 'numeric', // год
            month: 'long', // месяц
            day: 'numeric' // день
        });
    }

    return (
        <Container>
            {contest && <div className={classes.wrapper}>
                <div className={classes.left}>
                    <div className={classes.typography}>
                        <p className={classes.title}><span>Конкурс: </span>{contest.name}</p>
                        <p className={classes.data}>{readableDate}</p>
                    </div>
                    <p className={classes.descriptionTitle}>Описание:</p>
                    <p className={classes.description}>{contest.description}</p>

                    <p className={classes.total}><span>Всего участников:</span> {contest.registeredCount}</p>
                    <div className={classes.rating}><span>Оценка:</span> <Rating rating={contest.rating} /> </div>

                    <Button type="primary" fz={21}>Записаться</Button>
                </div>
                <div className={classes.right}>
                    <img src={contest.coverImage} alt='cover' />
                </div>
            </div>}

        </Container>
    )

}