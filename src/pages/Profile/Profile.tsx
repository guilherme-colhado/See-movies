import { Header } from "../../components/Header/Header";
import { DashboardContainer } from "../Dashboard/style";
import { DashboardDiv } from "../Dashboard/style";
import { ProfileMain } from "./style";
import userIcon from "../../assets/userIcon.svg";
import { TbEdit } from "react-icons/tb";
import { OptionsContainer } from "../../components/ProfileOptionsContainer/OptionsContainer";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const nav = useNavigate();

  return (
    <DashboardDiv>
      <Header />
      <DashboardContainer>
        <ProfileMain>
          <span>
            <img src={userIcon} alt="profilePicture" />
          </span>
          <h2>INDIVIDUO INDIGENTE</h2>
        </ProfileMain>
        <OptionsContainer />
        <span>
          <button onClick={() => nav("/login")}>Sair</button>
        </span>
      </DashboardContainer>
    </DashboardDiv>
  );
};
