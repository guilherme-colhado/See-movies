import { useState } from "react";
import { CreateModalComponent } from "../CreateMovie";
import { OptionDiv, OptionsContainerDiv } from "./style";

export const OptionsContainer = () => {
  const [isAdmin] = useState(true);
  const [modalCrete, setModalCrete] = useState(false);
  const [modalUser, setModalUser] = useState(false);

  return <>
    <OptionsContainerDiv>
      {isAdmin ? (
        <>
          <OptionDiv>
            <p>Visualizar Filmes</p>
          </OptionDiv>
          <OptionDiv onClick={() => setModalCrete(true)}>
            <p>Criar Filmes</p>
          </OptionDiv>
        </>
      ) : (
        <OptionDiv>
            <p>Conta</p>
        </OptionDiv>
      )}
    </OptionsContainerDiv>
    {
      modalCrete 
      &&
      <CreateModalComponent setModal={setModalCrete} ></CreateModalComponent>
    }
    {
      modalUser 
      &&
      <CreateModalComponent setModal={setModalCrete} ></CreateModalComponent>
    }
  </>
};
