import Icon from "../../assets/seeMoviesIcon.png";
import { LoginDiv } from "../Login/style";
import { AssignatureContainer, Assignatures } from "./style";

export const Assignature = () => {
  return (
    <LoginDiv>
      <header>
        <img src={Icon} />
      </header>
      <AssignatureContainer>
        <h2>
          Escolha um plano de <p>assinatura</p>
        </h2>
        <Assignatures>
          <div>
            <h2>Assinatura Mensal</h2>
            <p>R$35,00</p>
          </div>
          <div>
            <h2>Assinatura Semestral</h2>
            <p>R$180,00</p>
          </div>
          <div>
            <h2>Assinatura Anual</h2>
            <p>R$320,00</p>
          </div>
        </Assignatures>
        <button type="submit">Continuar</button>
      </AssignatureContainer>
    </LoginDiv>
  );
};
