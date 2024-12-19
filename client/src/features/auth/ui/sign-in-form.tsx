import { Button } from "../../../shared/ui"
import { Input } from "../../../shared/ui"
import { useState } from "react"
import classes from './classes.module.css'
import { NavLink } from "react-router"

export const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        console.log(email, password)
    }
    return (
        <form
            className={classes.form}
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
            }
            }>
            <Input placeholder="Введите почту" value={email} onChange={(e) => setEmail(e.target.value)} inputType="email" theme="dark" />
            <Input placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} type="password" theme="dark" />
            <NavLink to='/recover' className={classes.recover}>Забыли пароль?</NavLink>
            <Button buttonType='submit' type="primary" >Войти</Button>
            <NavLink to='/registration'><Button buttonType='reset' type="secondary" >Нет аккаунта</Button></NavLink>
        </form >

    )
}