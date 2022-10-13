import Icon from "../../assets/seeMoviesIcon.png";
import { InputComponent } from "../../components/Input";
import { ButtonContainer, FormDiv, LoginDiv } from "./style";

export const Login = () => {
  return (
    <LoginDiv>
      <header>
        <img src={Icon} />
      </header>
      <FormDiv>
          <div>
            <InputComponent label="E-mail" type="email"/>
            <InputComponent label="Senha" type="password"/>
          </div>
        <ButtonContainer>
            <button type="submit" onClick={(e) => e.preventDefault()}>
                Entrar
            </button>
            <span>
                <input type="checkbox" name="rememberMe" id="remember"/>
                <label>Lembrar login</label>
            </span>
        </ButtonContainer>

        <span>Novo por aqui? <p>Assine Agora</p></span>
      </FormDiv>
    </LoginDiv>
  );
};
