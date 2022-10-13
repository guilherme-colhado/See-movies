import Icon from "../../assets/seeMoviesIcon.png";
import { HeaderDiv, IconButton, SearchContainer, SearchInput } from "./style";
import { RiFileSearchFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

export const Header = () => {
  const [isInput, setIsInput] = useState(false);

  return (
    <HeaderDiv>
      <div>
        <img src={Icon} />
        <div>
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
            <FaUserCircle size={36} />
          </span>
        </div>
      </div>
    </HeaderDiv>
  );
};
