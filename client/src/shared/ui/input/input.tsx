import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import classes from './clsses.module.css'


type InputProps = {
    type?: "text" | "password";
    inputType?: string
    placeholder: string;
    value: string;
    fz?: number
    icon?: React.ReactNode;
    width?: number | string;
    theme?: "light" | "dark";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ icon, onChange, placeholder, type, value, width, theme, inputType, fz }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={classes.input} style={{ width: width, background: `${theme === "dark" ? "#4E4E50" : '#D9D9D9'}` }}>
            <input
                className={classes.in}
                style={{ background: `${theme === "dark" ?  "#4E4E50" : '#D9D9D9' }`, color: `${theme === "dark" ? '#D9D9D9' : "#4E4E50"}`, fontSize: fz  }}
                type={inputType ? inputType : type === "password" && !showPassword ? "password" : "text"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}

            />
            {type === "password" && (
                <span
                    className={classes.span}
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? <Eye size={18} color={  `${theme === "dark" ? '#D9D9D9' : "#4E4E50"}` } /> : <EyeOff size={18} color={ `${theme === "dark" ? '#D9D9D9' : "#4E4E50"}` } />}
                </span>
            )}
            {icon && <span className={classes.span} style={{ color: `${theme === "dark" ? '#D9D9D9' : "#4E4E50"}` }}>{icon}</span>}
        </div>
    );
};
