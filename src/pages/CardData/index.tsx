import { ButtonContainer, Info, CardData } from "./style"
import icon from "../../assets/seeMoviesIcon.png";
import { InputComponent } from "../../components/Input";

export const CardDataPage = () => {
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
                    <button>Confirmar pagamento</button>
                </ButtonContainer>
            </Info>
    </CardData>
}