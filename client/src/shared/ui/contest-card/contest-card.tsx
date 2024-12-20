import { FC } from 'react';
import { Button, Rating } from '../../ui';
import classes from './classes.module.css';  
import { NavLink } from 'react-router';

interface ContestCardProps {
    contestId: string;
    name: string;
    description: string;
    coverImage: string;
    registeredCount: number;
    rating: number;
}

export const ContestCard: FC<ContestCardProps> = ({ contestId, name, description, coverImage, registeredCount, rating }) => {
    return (
        <div className={classes.card} key={contestId}>
            <div className={classes.innerWrapper}>
                <div className={classes.typography}>
                    <p className={classes.cardTitle}>{name}</p>
                    <p className={classes.cardText}>{description}</p>
                </div>
                <div>
                    <Rating rating={rating} />
                    <NavLink to={`/contest/${contestId}`}><Button type="primary">Подробнее</Button></NavLink>
                </div>
            </div>

            <div className={classes.innerWrapper}>
                <img className={classes.photo} src={coverImage} alt="photo" />
                <p className={classes.amount}>
                    Количество участников: <span>{registeredCount}</span>
                </p>
            </div>
        </div>
    );
};

