import { Container, ContestCard, Skeleton } from '../../ui';
import classes from './classes.module.css';
import { ContestI } from '../../http/type';

export const ContestUI = ({ contests, error, loading }: { contests: ContestI[], error: boolean, loading: boolean }) => {
    
    if (loading) return <div style={{ marginTop: '1rem' }}><Skeleton /></div>;
    if (error) return <p style={{ fontSize: '21px', marginTop: '1rem' }}>{error}</p>;

    return (
        <Container>
            <p className={classes.title}>Конкурсы</p>
            <div className={classes.wrapper}>
                {contests.length > 0 ? contests.map((contest) => (
                    <ContestCard
                        key={contest.contestId}
                        contestId={contest.contestId}
                        name={contest.name}
                        description={contest.description}
                        coverImage={contest.coverImage}
                        registeredCount={contest.registeredCount}
                        rating={contest.rating}
                    />
                )): <p style={{ fontSize: '21px', marginTop: '1rem' }}>Таких конкурсов нет</p>}
            </div>
        </Container>
    );
};
