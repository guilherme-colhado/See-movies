import { Header } from "../../components/Header/Header";
import { DashboardContainer, DashboardDiv } from "./style";
import AvengersCartaz from "../../assets/avengers.svg";
import AvengersHd from "../../assets/avengers.jpeg";
import { CardMovieComponent } from "../../components/Card-Movie";

export const Dashboard = () => {
  return (
    <DashboardDiv>
      <Header />
      <DashboardContainer>
        <div>
          <h2>TOP 10</h2>
          <div>
            <CardMovieComponent imgCartaz={AvengersCartaz} id="1" idVideo="VBv8ILgZMbU" title="Avengers: ENDGAME" imgHd={AvengersHd}/>
            <CardMovieComponent imgCartaz={AvengersCartaz} id="1" idVideo="VBv8ILgZMbU" title="Avengers: ENDGAME" imgHd={AvengersHd}/>
            <CardMovieComponent imgCartaz={AvengersCartaz} id="1" idVideo="VBv8ILgZMbU" title="Avengers: ENDGAME" imgHd={AvengersHd}/>
          </div>
        </div>
        <div>
          <h2>EM ALTA</h2>
          <div>
            <CardMovieComponent imgCartaz={AvengersCartaz} id="1" idVideo="VBv8ILgZMbU" title="Avengers: ENDGAME" imgHd={AvengersHd}/>
            <CardMovieComponent imgCartaz={AvengersCartaz} id="1" idVideo="VBv8ILgZMbU" title="Avengers: ENDGAME" imgHd={AvengersHd}/>
            <CardMovieComponent imgCartaz={AvengersCartaz} id="1" idVideo="VBv8ILgZMbU" title="Avengers: ENDGAME" imgHd={AvengersHd}/>
          </div>
        </div>
        <div>
          <h2>ASSISTIR NOVAMENTE</h2>
          <div>
            <CardMovieComponent imgCartaz={AvengersCartaz} id="1" idVideo="VBv8ILgZMbU" title="Avengers: ENDGAME" imgHd={AvengersHd}/>
            <CardMovieComponent imgCartaz={AvengersCartaz} id="1" idVideo="VBv8ILgZMbU" title="Avengers: ENDGAME" imgHd={AvengersHd}/>
            <CardMovieComponent imgCartaz={AvengersCartaz} id="1" idVideo="VBv8ILgZMbU" title="Avengers: ENDGAME" imgHd={AvengersHd}/>
          </div>
        </div>
      </DashboardContainer>
    </DashboardDiv>
  );
};
