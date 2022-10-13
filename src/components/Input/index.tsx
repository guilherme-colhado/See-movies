import { InputHTMLAttributes } from "react";
import { InputDiv } from "./style";

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    type: string;
}

export const InputComponent = ({label, type, ...rest}: InputComponentProps) => {
    return <>
        <InputDiv>
            <input type={type} placeholder=" " id={label} {...rest}/>
            <label htmlFor={label}>{label}</label>
        </InputDiv>
    </>
}