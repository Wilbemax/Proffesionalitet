import { ButtonHTMLAttributes } from 'react'
import classes from './classes.module.css'

type ButtonProps = {
    children: React.ReactNode,
    icon?: React.ReactNode,
    disabled?: boolean,
    width?: number | string,
    fz?: number,
    buttonType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    type: 'primary' | 'secondary' | 'secondary-light',
    fn?: () => void
}

export const Button = ({ children, icon, fn, disabled, width, type, fz, buttonType }: ButtonProps) => {
    return (
        <button disabled={disabled} className={classes.button} type={buttonType} style={{ width: width ?? undefined, background: `${type === 'primary' ? "#950740" : type === 'secondary' ? "#6F2332" : "#4E4E50"}`, fontSize: fz, justifyContent: `${icon ? "space-between" : "center"}` }} onClick={() => fn && fn()}>
            {children} {icon}
        </button>
    )
}