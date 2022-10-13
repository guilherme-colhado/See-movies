import { InputComponent } from "../../components/Input"
import { ButtonContainer, Info, Register } from "./style"
import icon from "../../assets/seeMoviesIcon.png";

export const RegisterPage = () => {
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
                <button>Criar Conta</button>
            </ButtonContainer>
        </Info>
    </Register>
}