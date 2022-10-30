import Icon from "../../assets/seeMoviesIcon.png";
import { HeaderDiv, IconButton, SearchContainer, SearchInput } from "./style";
import { RiFileSearchFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isInput, setIsInput] = useState(false);
  const nav = useNavigate();
  const location = useLocation();

  return (
    <HeaderDiv>
      <div>
        <img src={Icon} />
        <div>
          {/* Verifica se é a rota do perfil, se for não irá renderizar os icones (igual ao figma) */}
          {location.pathname === "/profile" ? null : (
            <>
              <SearchContainer isSearching={isInput}>
                <IconButton onClick={() => setIsInput(!isInput)}>
                  {isInput ? (
                    <AiOutlineClose size={18} />
                  ) : (
                    <RiFileSearchFill size={36} />
                  )}
                </IconButton>
                <SearchInput />
              </SearchContainer>
              <span>
            <FaUserCircle onClick={() => nav("/login")}size={36} />
          </span>
            </>
          )}
        </div>
      </div>
    </HeaderDiv>
  );
};
