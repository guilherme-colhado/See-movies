import { ButtonContainer, Info, CardData } from "./style"
import icon from "../../assets/seeMoviesIcon.png";
import { InputComponent } from "../../components/Input";
import { useNavigate } from "react-router-dom";

export const CardDataPage = () => {
    const nav = useNavigate()
    return <CardData>
            <header>
                <figure>
                    <img src={icon} alt="See-Movies" />
                </figure>
            </header>
            <Info>
                <p>
                    Informe os dados do<br />
                    <span>cartão</span>
                </p>
                <InputComponent type="text" label="Nome do cartão"/>
                <InputComponent type="text" label="Numero do cartão"/>
                <InputComponent type="text" label="Data de validade"/>
                <InputComponent type="text" label="Código de segurança (CVV)"/>
                <ButtonContainer>
                    <button onClick={() => nav("/")}>Confirmar pagamento</button>
                </ButtonContainer>
            </Info>
    </CardData>
}