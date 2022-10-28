import { InputComponent } from "../../components/Input"
import { ButtonContainer, Info, Register } from "./style"
import icon from "../../assets/seeMoviesIcon.png";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    const nav = useNavigate()
    return <Register>
        <header>
            <figure>
                <img src={icon} alt="See-Movies" />
            </figure>
        </header>
        <Info>
            <p>
                Cadastre um email e senha <br />
                <span>válidos</span>
            </p>
            <InputComponent type="text" label="E-mail"/>
            <InputComponent type="password" label="Senha"/>
            <InputComponent type="password" label="Repetir senha"/>
            <ButtonContainer>
                <button onClick={() => nav("/register/assignature")}>Criar Conta</button>
            </ButtonContainer>
        </Info>
    </Register>
}