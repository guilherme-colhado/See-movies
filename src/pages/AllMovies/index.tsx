import { Header } from "../../components/Header/Header";
import { MovieContainer, MovieDiv } from "./style";
import Avengers from "../../assets/avengers.svg";
import { CardMovieComponent } from "../../components/Card-Movie";

export const AllMoviesPage = () => {
    return <MovieDiv>
        <Header />
        <MovieContainer>
            <div>
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
                <CardMovieComponent img={Avengers} id='1' title="Avengers: ENDGAME" isAdm={true} />
            </div>
        </MovieContainer>
    </MovieDiv>
};
