import { Header } from "../../components/Header/Header";
import { DashboardContainer, DashboardDiv } from "./style";
import Avengers from "../../assets/avengers.svg";

export const Dashboard = () => {
  return (
    <DashboardDiv>
      <Header />
      <DashboardContainer>
        <div>
          <h2>TOP 10</h2>
          <div>
            <img src={Avengers} />
            <img src={Avengers} />
            <img src={Avengers} />
          </div>
        </div>
        <div>
          <h2>EM ALTA</h2>
          <div>
            <img src={Avengers} />
            <img src={Avengers} />
            <img src={Avengers} />
          </div>
        </div>
        <div>
          <h2>ASSISTIR NOVAMENTE</h2>
          <div>
            <img src={Avengers} />
            <img src={Avengers} />
            <img src={Avengers} />
          </div>
        </div>
      </DashboardContainer>
    </DashboardDiv>
  );
};
