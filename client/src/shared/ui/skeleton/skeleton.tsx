import styles from './classes.module.css';

export const Skeleton = () => {
    return (
        <div className={styles.skeleton}>
            <div className={styles.skeletonLeft}>
                <div>
                    <div className={`${styles.skeletonLine} ${styles.h17} ${styles.w40} ${styles.m10}`}></div>
                    <div className={styles.skeletonLine}></div>
                    <div className={`${styles.skeletonLine} ${styles.h8} ${styles.w50}`}></div>
                </div>
                <div className={`${styles.skeletonLine} ${styles.h17} ${styles.w40} ${styles.m10}`}></div>
                
            </div>
            <div className={styles.skeletonRight}>
                <div className={styles.skeletonSquare}></div>
            </div>
        </div>
    );
};
