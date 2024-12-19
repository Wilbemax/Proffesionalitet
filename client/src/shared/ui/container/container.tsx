import classes from './classes.module.css'

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className={classes.main}>{children}</div>
}