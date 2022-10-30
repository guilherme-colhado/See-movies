import { useState } from "react";
import { OptionDiv, OptionsContainerDiv } from "./style";

export const OptionsContainer = () => {
  const [isAdmin] = useState(false);

  return (
    <OptionsContainerDiv>
      <OptionDiv>
        <p>Configurações do APP</p>
      </OptionDiv>
      {isAdmin ? (
        <>
          <OptionDiv>
            <p>Visualizar Filmes</p>
          </OptionDiv>
          <OptionDiv>
            <p>Criar Filmes</p>
          </OptionDiv>
        </>
      ) : (
        <>
          <OptionDiv>
            <p>Financeiro</p>
          </OptionDiv>
          <OptionDiv>
            <p>Conta</p>
          </OptionDiv>
        </>
      )}

      <OptionDiv>
        <p>Ajuda</p>
      </OptionDiv>
    </OptionsContainerDiv>
  );
};
