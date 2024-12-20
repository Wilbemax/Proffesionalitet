import { Button } from "../../../shared/ui"
import { Input } from "../../../shared/ui"
import { useContext, useState } from "react"
import classes from './classes.module.css'
import { NavLink } from "react-router"
import { observer } from "mobx-react-lite"
import { Context } from "../../../main"

const SignInForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [status, setStatus] = useState<"success" | "error" | null>(null)
    const { store } = useContext(Context)

    const onSubmit = async () => {
        if (email.trim() !== '' && password.trim() !== '') {
            const res = await store.login(email, password)
            if (res)
                setStatus('success')
            else setStatus('error')
        }
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
            <Button buttonType='submit' type="primary" width={'100%'}>Войти</Button>
            <NavLink to='/registration' style={{ width: '100%' }}><Button buttonType='reset' type="secondary" width={'100%'}>Нет аккаунта</Button></NavLink>
            {status === "error" ? <p className={classes.error}>Не верный логин или пароль</p> : status === 'success' ? <p className={classes.success}>Вы успешно вошли</p> : null}
        </form >

    )
}

export const SignIn = observer(SignInForm);