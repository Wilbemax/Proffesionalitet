import { NavLink } from 'react-router'
import { Container } from '../../ui'
import classes from './classes.module.css'

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.wrapper}>
                    <div className={classes.left}>
                        <p className={classes.title}>Навигация по сайту</p>
                        <NavLink to='/' className={classes.item}>Главная</NavLink>
                        <NavLink to='/main-light' className={classes.item}>Главная-светлая</NavLink>
                        <NavLink to='/registration' className={classes.item}>Регистрация</NavLink>
                        <NavLink to='/' className={classes.item}>Конкурсы</NavLink>
                        <NavLink to='/personal-account' className={classes.item}>Личный кабинет</NavLink>
                        <NavLink to='/' className={classes.item}>Страница не найдена</NavLink>
                    </div>
                    <div className={classes.right}>
                        <a href="tel:+74842234567">Тел: +7 (4852) 23-45-67</a>
                        <a href="mailto:family@cosmos.ru">E-mail: family@cosmos.ru</a>
                    </div>
                </div>
                <p className={classes.copy}>© 2024</p>
            </Container>
        </footer>
    )
}