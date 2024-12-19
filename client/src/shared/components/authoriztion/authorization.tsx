import { Container } from "../../ui"
import classes from './classes.module.css'
import astronaut from '../../../assets/Astronaut.png'

interface AuthorizationUiProps {
    children: React.ReactNode
}


export const AuthorizationUi: React.FC<AuthorizationUiProps> = ({ children }) => {
    return (
        <Container>
            <p className={classes.title}><span>Авторизуйтесь</span> для участия в конкурсах</p>
            <div className={classes.wrapper}>
                <div>
                    {children}
                </div>
                <div className={classes.img}>
                    <img src={astronaut} alt="astronaut" />
                </div>
            </div>
        </Container>
    )
}