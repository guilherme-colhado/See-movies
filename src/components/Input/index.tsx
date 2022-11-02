import { InputHTMLAttributes } from "react";
import { InputDiv } from "./style";

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string
    type: string
    placeholder?: string
}

export const InputComponent = ({label, type, placeholder, ...rest}: InputComponentProps) => {
    return <>
        <InputDiv>
            <input type={type} placeholder={placeholder || " "} id={label || placeholder} {...rest}/>
            {label && <label htmlFor={label}>{label}</label>}
        </InputDiv>
    </>
}