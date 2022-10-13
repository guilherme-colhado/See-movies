import { Header } from "../../components/Header/Header";
import { DashboardContainer, DashboardDiv } from "./style";
import Avengers from "../../assets/avengers.svg";
import { CardMovieComponent } from "../../components/Card-Movie";

export const Dashboard = () => {
  return (
    <DashboardDiv>
      <Header />
      <DashboardContainer>
        <div>
          <h2>TOP 10</h2>
          <div>
            <CardMovieComponent img={Avengers} title="Avengers: ENDGAME"/>
            <CardMovieComponent img={Avengers} title="Avengers: ENDGAME"/>
            <CardMovieComponent img={Avengers} title="Avengers: ENDGAME"/>
          </div>
        </div>
        <div>
          <h2>EM ALTA</h2>
          <div>
            <CardMovieComponent img={Avengers} title="Avengers: ENDGAME"/>
            <CardMovieComponent img={Avengers} title="Avengers: ENDGAME"/>
            <CardMovieComponent img={Avengers} title="Avengers: ENDGAME"/>
          </div>
        </div>
        <div>
          <h2>ASSISTIR NOVAMENTE</h2>
          <div>
            <CardMovieComponent img={Avengers} title="Avengers: ENDGAME"/>
            <CardMovieComponent img={Avengers} title="Avengers: ENDGAME"/>
            <CardMovieComponent img={Avengers} title="Avengers: ENDGAME"/>
          </div>
        </div>
      </DashboardContainer>
    </DashboardDiv>
  );
};
