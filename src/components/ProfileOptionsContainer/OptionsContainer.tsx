import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateModalComponent } from "../CreateMovie";
import { OptionDiv, OptionsContainerDiv } from "./style";

export const OptionsContainer = () => {
  const [isAdmin] = useState(true);
  const [modalCrete, setModalCrete] = useState(false);
  const [modalUser, setModalUser] = useState(false);
  const nav = useNavigate()
  return <>
    <OptionsContainerDiv>
      {isAdmin ? (
        <>
          <OptionDiv onClick={()=>nav('/all-movies')}>
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
