import { Container } from  "../../ui"
import Logo from '../../../assets/logo.svg'


import classes from './classes.module.css'
import { NavLink } from 'react-router'
import { Moon, Sun } from 'lucide-react'

export const Header = ({ theme = 'dark' }: { theme?: 'dark' | 'light' }) => {
    return (
        <Container>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className={classes.wrapper}>
                    <nav className={classes.navigation}>
                        <a href="#about">О нас</a>
                        <a href='#authorization'>Авторизация</a>
                        <NavLink to="/registration">Регистрация</NavLink>
                        <a href='#search'>Поиск</a>
                        <a href='#contests'>Конкурсы</a>
                        <NavLink to='/personal-account'>Личный кабинет</NavLink>
                        <a href='#contacts'>Контакты</a>

                    </nav>
                    {theme === 'dark' ? <button className={classes.theme}><Moon /></button> : <button className={classes.theme} ><Sun /></button>}
                </div>

            </header>
        </Container>
    )
}