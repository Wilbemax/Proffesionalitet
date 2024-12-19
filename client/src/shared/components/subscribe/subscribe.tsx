import { Button, Container, Input } from '../../ui'
import classes from './classes.module.css'

export const Subscribe = ({ fn, onChange, value }: { value: string, onChange: (value: string) => void, fn?: () => void }) => {
    return (
        <Container>
            <p className={classes.title}>Будьте в курсе наших конкуров</p>
            <div className={classes.wrapper}>
                <Input placeholder='Введите ваш email' value={value} onChange={(e) => onChange(e.target.value)} width={'80%'} inputType='email' theme='dark' fz={18} />
                <Button type='primary' fn={() => fn && fn()} width={'30%'} fz={18}>Подписаться</Button>
            </div>
            <div className={classes.check}>
                <input type="radio" /> <p>Вы соглашается с обработкой персональных данных*</p>
            </div>


        </Container>
    )
}